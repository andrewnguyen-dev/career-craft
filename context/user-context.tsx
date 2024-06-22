'use client'
import useFetchData from '@/hooks/useFetchData'
import { useAuth } from '@clerk/nextjs'

import { createContext, useContext, useEffect, useState } from 'react'

type UserProviderProps = {
  children: React.ReactNode
}

type User = {
  id: string
  emailAddress: string
  firstName: string | null
  lastName: string | null
  imageUrl: string
  coins: number
  plan: 'FREE' | 'PRO'
  registrationDate: Date
  lastResetDate: Date
}

type UserContextType = {
  currentUser: User
  isFetching: boolean
}

const UserContext = createContext<UserContextType>({} as UserContextType)

export const UserProvider = ({ children }: UserProviderProps) => {
  const { userId } = useAuth()
  const { data, isFetching } = useFetchData('/api/get-current-user', userId, !!userId)

  const [currentUser, setCurrentUser] = useState<User>({} as User)

  useEffect(() => {
    if (data) {
      setCurrentUser(data.user)
    }
  }, [data])

  return (
    <UserContext.Provider value={{currentUser, isFetching}}>{children}</UserContext.Provider>
  )
}

export const useUser = () => {
  const context = useContext(UserContext)
  if (!context) {
    throw new Error('useUser must be used with  in a UserProvider')
  }
  return context
}
