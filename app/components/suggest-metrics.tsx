'use client'

import React from 'react'
import { Input } from '../ui/input'
import { useChat } from 'ai/react'
import { Button } from '../ui/button'

const SuggestMetrics = () => {
  const { messages, input, handleInputChange, handleSubmit } = useChat({
    api: '/api/suggest-metrics'
  })
  return (
    <section className='flex flex-col gap-3 rounded-2xl bg-white p-5 dark:bg-neutral-800/60'>
      <h3 className='text-base font-semibold text-apple-600 dark:text-apple-500'>
        Unsure About Which Metrics to Include?
      </h3>
      <p className='text-gray-800 dark:text-gray-300'>
        Enter your responsibilities below, and discover how to quantify them
        effectively.
      </p>
      <form className='flex gap-2' onSubmit={handleSubmit}>
        <Input
          value={input}
          onChange={handleInputChange}
          placeholder='Designed and executed email marketing campaigns to drive customer engagement'
        />
        <Button>Submit</Button>
      </form>
      {messages.map(message => (
        <div key={message.id}>
          {message.role === 'assistant' && <p>{message.content}</p>}
        </div>
      ))}
    </section>
  )
}

export default SuggestMetrics
