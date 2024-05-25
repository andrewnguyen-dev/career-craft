'use client'

import { createContext, useContext, useState } from 'react'

type ResumeTailoringProviderProps = {
  children: React.ReactNode
}

type ResumeTailoringContextType = {
  sharedData: {
    keyResponsibilities?: string
    suggestion?: string
  },
  setSharedData: React.Dispatch<React.SetStateAction<any>>
}

const ResumeTailoringContext = createContext<ResumeTailoringContextType | undefined>(undefined)

export const ResumeTailoringProvider = ({
  children
}: ResumeTailoringProviderProps) => {
  const [sharedData, setSharedData] = useState({})
  return (
    <ResumeTailoringContext.Provider value={{sharedData, setSharedData}}>
      {children}
    </ResumeTailoringContext.Provider>
  )
}

export const useResumeTailoring = () => {
  const context = useContext(ResumeTailoringContext)
  if (!context) {
    throw new Error(
      'useResumeTailoring must be used within a ResumeTailoringProvider'
    )
  }
  return context
}
