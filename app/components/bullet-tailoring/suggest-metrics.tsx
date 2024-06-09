'use client'

import { Input } from '@/ui/input'
import { useCompletion } from 'ai/react'
import { Button } from '@/ui/button'
import LoadingDots from '@/components/loading-dot'

const SuggestMetrics = () => {
  const { completion, input, handleInputChange, handleSubmit, isLoading } =
    useCompletion({
      api: '/api/suggest-metrics'
    })
  console.log('🚀 ~ SuggestMetrics ~ completion:', completion)

  const ideas = completion.split('\n')

  return (
    <section className='flex flex-col gap-2 rounded-2xl bg-white p-5 dark:bg-neutral-800/60'>
      <h3 className='text-base font-semibold text-apple-600 dark:text-apple-500'>
        Unsure About Which Metrics to Include?
      </h3>
      <p className='text-gray-800 dark:text-gray-300'>
        Enter your responsibilities below, and discover how to add quantifiable
        metrics to your resume.
      </p>
      <form className='flex gap-2' onSubmit={handleSubmit}>
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder='Example: Designed and executed email marketing campaigns to drive customer engagement'
          disabled={isLoading}
        />
        <Button>{isLoading ? <LoadingDots color='white' /> : 'Submit'}</Button>
      </form>
      {ideas?.map((idea, index) => (
        <div key={index} className='flex gap-2'>
          <p className='text-gray-800 dark:text-gray-300'>{idea}</p>
        </div>
      ))}
    </section>
  )
}

export default SuggestMetrics

// TODO: How to: API always give fresh response, not based on the previous
