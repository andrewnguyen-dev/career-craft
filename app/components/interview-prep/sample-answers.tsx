'use client'

import React, { useState } from 'react'
import Card from './card'
import TextareaForm from './textarea-form'
import { useCompletion } from 'ai/react'
import { useInterviewPrep } from '@/context/interview-prep-context'
import { Textarea } from '@/app/ui/textarea'
import { Button } from '@/app/ui/button'
import LoadingDots from '../loading-dot'
import { Sparkles } from 'lucide-react'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue
} from '@/ui/select'

const SampleAnswers = () => {
  const [selectedQuestion, setSelectedQuestion] = useState<number | null>(null)
  const { sharedData } = useInterviewPrep()
  const { completion, input, handleInputChange, handleSubmit, isLoading } =
    useCompletion({
      api: '/api/sample-answers',
      body: {
        interviewQuestions: sharedData.interviewQuestions
          ? sharedData.interviewQuestions[selectedQuestion ?? 0]
          : ''
      }
    })

  const answers = completion.split('\n')

  // const handleChange = (value: string) => {
  //   setSelectedQuestion(parseInt(value))
  // }

  return (
    <Card
      title='Sample Interview Answers'
      subtitle='Input your resume to receive personalized answers for your interview questions.'
    >
      <form className='flex flex-col gap-2' onSubmit={handleSubmit}>
        <Textarea
          value={input}
          onChange={handleInputChange}
          placeholder='Enter your resume here...'
          disabled={isLoading}
        />
        <div className='flex gap-3 items-center'>
          <span className='text-gray-700 dark:text-gray-300'>Select the question you want to generate answers for:</span>
          {/* <Select onValueChange={handleChange}> */}
          {/* <Select>
            <SelectTrigger className='w-[180px]'>
              <SelectValue placeholder='Select question' />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value='0'>Question 1</SelectItem>
              <SelectItem value='1'>Question 2</SelectItem>
              <SelectItem value='2'>Question 3</SelectItem>
              <SelectItem value='3'>Question 4</SelectItem>
              <SelectItem value='4'>Question 5</SelectItem>
              <SelectItem value='5'>Question 6</SelectItem>
              <SelectItem value='6'>Question 7</SelectItem>
              <SelectItem value='7'>Question 8</SelectItem>
              <SelectItem value='8'>Question 9</SelectItem>
              <SelectItem value='9'>Question 10</SelectItem>
            </SelectContent>
          </Select> */}
        </div>
        <Button
          type='submit'
          disabled={isLoading || !input || !sharedData.interviewQuestions || !selectedQuestion}
        >
          {isLoading ? (
            <LoadingDots color='white' />
          ) : (
            <>
              <Sparkles className='mr-2 h-4 w-4' />
              Generate Questions
            </>
          )}
        </Button>
      </form>
      {answers.length > 0 && answers[0] !== '' && (
        <div className='space-y-2 rounded-2xl bg-gray-100 p-4 text-gray-800 transition-all hover:bg-gray-200/60 dark:bg-gray-900/90 dark:text-gray-200 hover:dark:bg-gray-900/80'>
          {answers.map((answer, index) => (
            <p key={index} className=''>
              {answer}
            </p>
          ))}
        </div>
      )}
    </Card>
  )
}

export default SampleAnswers
