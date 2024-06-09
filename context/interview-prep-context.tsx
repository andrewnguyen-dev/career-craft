'use client'

import { createContext, useContext, useState } from 'react'

type InterviewPrepProviderProps = {
  children: React.ReactNode
}

type InterviewPrepContextType = {
  sharedData: {
    interviewQuestions?: string[]
  },
  setSharedData: React.Dispatch<React.SetStateAction<any>>
}

const InterviewPrepContext = createContext<InterviewPrepContextType | undefined>(undefined)

export const InterviewPrepProvider = ({
  children
}: InterviewPrepProviderProps) => {
  const [sharedData, setSharedData] = useState({})
  return (
    <InterviewPrepContext.Provider value={{sharedData, setSharedData}}>
      {children}
    </InterviewPrepContext.Provider>
  )
}

export const useInterviewPrep = () => {
  const context = useContext(InterviewPrepContext)
  if (!context) {
    throw new Error(
      'useInterviewPrep must be used within a InterviewPrepProvider'
    )
  }
  return context
}
