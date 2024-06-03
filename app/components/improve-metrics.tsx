'use client'

import React, { useEffect, useState } from 'react'
import { Input } from '../ui/input'
import { useCompletion } from 'ai/react'
import { Button } from '../ui/button'
import LoadingDots from './loading-dot'

const ImproveMetrics = () => {
  const { completion, input, handleInputChange, handleSubmit, isLoading } =
    useCompletion({
      api: '/api/improve-metrics'
    })
  console.log('🚀 ~ ImproveMetrics ~ completion:', completion)

  const ideas = completion.split('\n')

  return (
    <section className='flex flex-col gap-2 rounded-2xl bg-white p-5 dark:bg-neutral-800/60'>
      <h3 className='text-base font-semibold text-apple-600 dark:text-apple-500'>
        Already Have Metrics in Your Bullet Point?
      </h3>
      <p className='text-gray-800 dark:text-gray-300'>
        Enter your bullet point below to see how it can be further improved.
      </p>
      <form className='flex gap-2' onSubmit={handleSubmit}>
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder='Example: Managed a team of 10 sales representatives, increasing quarterly sales by 15%'
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

export default ImproveMetrics

// TODO: How to: API always give fresh response, not based on the previous
