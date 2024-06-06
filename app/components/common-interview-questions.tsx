'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Sparkles } from 'lucide-react'

import { Button } from '@/ui/button'
import { Textarea } from '@/ui/textarea'

import LoadingDots from './loading-dot'

const CommonInterviewQuestions = () => {
  const [value, setValue] = useState('')

  const { data, isFetching, isError, error, refetch } = useQuery({
    queryKey: ['common-interview-questions'],
    queryFn: async () => {
      const response = await fetch('/api/common-interview-questions', {
        method: 'POST',
        body: JSON.stringify({ messages: [{ content: value }] }),
        headers: { 'Content-Type': 'application/json' }
      })
      return response.json()
    },
    enabled: false
  })

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    refetch()
  }

  return (
    <section className='flex flex-1 flex-col rounded-2xl bg-white p-5 dark:bg-neutral-800/60'>
      <div className='flex flex-col gap-4'>
        <div>
          <span className='bg-apple-300 dark:bg-apple-700 dark:text-apple-100 inline-block self-start rounded-sm px-1.5 py-[0.2rem] text-xs font-semibold uppercase'>
            Step 1
          </span>
          <p className='text-gray-800 dark:text-gray-300 mt-2 font-medium'>
            Enter Job Description
          </p>
        </div>
        <form onSubmit={handleSubmit} className='flex h-full flex-col gap-3'>
          <Textarea
            placeholder='Paste the job description here...'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Button type='submit' disabled={isFetching || !value}>
            {isFetching ? (
              <>
                <span className='mr-2'>Analyzing</span>
                <LoadingDots color='white' />
              </>
            ) : (
              <>
                <Sparkles className='mr-2 h-4 w-4' />
                Analyze Job Description
              </>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}

export default CommonInterviewQuestions
