/* eslint-disable react-hooks/exhaustive-deps */
'use client'

import { useEffect } from 'react'

import Card from './card'
import { useInterviewPrep } from '@/context/interview-prep-context'
import { useCompletion } from 'ai/react'
import TextareaForm from './textarea-form'
import { useQueryClient } from '@tanstack/react-query'

const CommonInterviewQuestions = () => {
  const { setSharedData } = useInterviewPrep()

  const { completion, input, handleInputChange, handleSubmit, isLoading } =
    useCompletion({
      api: '/api/common-interview-questions'
    })

  const queryClient = useQueryClient()
  useEffect(() => {
    queryClient.invalidateQueries({ queryKey: ['/api/get-current-user'] })
  }, [queryClient, completion])

  const questions = completion.split('\n')

  useEffect(() => {
    if (completion) {
      setSharedData({ interviewQuestions: questions })
    }
  }, [completion, setSharedData])

  return (
    <Card
      title='AI-Generated Interview Questions'
      subtitle='Paste the job description below, and let our AI generate customized interview questions to help you ace your next interview.'
    >
      <TextareaForm
        input={input}
        handleInputChange={handleInputChange}
        handleSubmit={handleSubmit}
        isLoading={isLoading}
        isDisabled={!input}
        placeholder='Paste the job description here...'
        buttonText='Generate Questions'
      />
      {questions.length > 0 && questions[0] !== '' && (
        <div className='space-y-2 rounded-2xl bg-gray-100 p-4 text-gray-800 transition-all hover:bg-gray-200/60 dark:bg-gray-900/90 dark:text-gray-200 hover:dark:bg-gray-900/80'>
          {questions.map((question, index) => (
            <p key={index} className=''>
              {question}
            </p>
          ))}
        </div>
      )}
    </Card>
  )
}

export default CommonInterviewQuestions
