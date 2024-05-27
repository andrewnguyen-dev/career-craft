'use client'

import { Sparkles } from 'lucide-react'
import { useEffect, useState } from 'react'

import { useResumeTailoring } from '@/context/resume-tailoring-context'
import LoadingDots from '@/components/loading-dot'
import { Button } from '@/ui/button'
import { Textarea } from '@/ui/textarea'
import { useQuery } from '@tanstack/react-query'
import styles from '@/styles/resume-tailoring.module.css'

const ResumeInputCard = () => {
  const [value, setValue] = useState('')
  const { sharedData, setSharedData } = useResumeTailoring()

  const { data, isFetching, isError, error, refetch } = useQuery({
    queryKey: ['resume-tailoring'],
    queryFn: async () => {
      const response = await fetch('/api/resume-tailoring', {
        method: 'POST',
        body: JSON.stringify({
          messages: [{ content: value }],
          keyResponsibilities: sharedData.keyResponsibilities
        }),
        headers: { 'Content-Type': 'application/json' }
      })
      return response.json()
    },
    enabled: false
  })

  if (isError) {
    console.error(error)
  }

  useEffect(() => {
    if (data) {
      setSharedData({ suggestion: data.text })
    }
  }, [data, setSharedData])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    refetch()
  }

  return (
    <section className='bg-white flex flex-1 flex-col gap-4 rounded-2xl p-5'>
      <div>
        <span className='bg-azblue-300 inline-block self-start rounded-sm px-1.5 py-[0.2rem] text-xs font-semibold uppercase'>
          Step 2
        </span>
        <p className='text-gray-800 mt-2 font-medium'>Enter Your Resume</p>
      </div>
      <form onSubmit={handleSubmit} className='flex h-full flex-col gap-3'>
        <Textarea
          placeholder='Paste the text-based resume here...'
          value={value}
          onChange={e => setValue(e.target.value)}
          className='grow'
        />
        <Button
          type='submit'
          disabled={isFetching || !value || !sharedData.keyResponsibilities}
          className='flex-none'
        >
          {isFetching ? (
            <LoadingDots color='white' />
          ) : (
            <>
              <Sparkles className='mr-2 h-4 w-4' />
              Analyze Resume
            </>
          )}
        </Button>
      </form>
    </section>
  )
}

export default ResumeInputCard
