'use client'

import { useCompletion } from 'ai/react';
import { Sparkles } from 'lucide-react';
import React, { useState } from 'react';

import { Button } from '@/app/ui/button';
import { Textarea } from '@/app/ui/textarea';
import { useInterviewPrep } from '@/context/interview-prep-context';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/ui/select';

import LoadingDots from '../loading-dot';
import Card from './card';

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

  const answerParts = completion.split('\n')

  const handleChange = (value: string) => {
    setSelectedQuestion(parseInt(value))
  }

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

        <div className='flex items-center gap-3'>
          <span className='text-gray-700 dark:text-gray-300'>
            Select the question you want to generate answers for:
          </span>
          <Select
            onValueChange={handleChange}
            disabled={!sharedData.interviewQuestions}
            defaultValue='0'
          >
            <SelectTrigger className='w-[180px]'>
              <SelectValue />
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
          </Select>
        </div>

        <Button
          type='submit'
          disabled={isLoading || !input || !sharedData.interviewQuestions}
        >
          {isLoading ? (
            <LoadingDots color='white' />
          ) : (
            <>
              <Sparkles className='mr-2 h-4 w-4' />
              Generate Answer
            </>
          )}
        </Button>
      </form>

      {answerParts.length > 0 && answerParts[0] !== '' && (
        <div>
          {answerParts.map((part, index) => (
            <p key={index} className='mb-2'>
              {part}
            </p>
          ))}
        </div>
      )}
    </Card>
  )
}

export default SampleAnswers
