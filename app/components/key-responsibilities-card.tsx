'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Sparkles } from 'lucide-react'

import { Button } from '@/ui/button'
import { Textarea } from '@/ui/textarea'

import SkeletonKeyResponsibility from '../skeletons/skeleton-key-responsibility'
import LoadingDots from './loading-dot'
import { useResumeTailoring } from '@/context/resume-tailoring-context'

const KeyResponsibilitiesCard = () => {
  const [value, setValue] = useState('')
  const [keyResponsibilities, setKeyResponsibilities] = useState([])
  const { setSharedData } = useResumeTailoring()

  const { data, isFetching, isError, error, refetch } = useQuery({
    queryKey: ['key-responsibilities'],
    queryFn: async () => {
      const response = await fetch('/api/key-responsibilities', {
        method: 'POST',
        body: JSON.stringify({ messages: [{ content: value }] }),
        headers: { 'Content-Type': 'application/json' }
      })
      return response.json()
    },
    enabled: false
  })

  useEffect(() => {
    if (data) {
      setSharedData({ keyResponsibilities: data.text })
      const transformedKeyResponsibilities = data.text
        .substring(data.text.indexOf('1') + 3)
        .split(/2\.|3\./)
      setKeyResponsibilities(transformedKeyResponsibilities)
    }
  }, [data, setSharedData])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    refetch()
  }

  return (
    <section className='flex flex-1 flex-col rounded-2xl bg-white p-5'>
      <div className='flex flex-col gap-4'>
        <div>
          <span className='inline-block self-start rounded-sm bg-slate-400 px-1.5 py-[0.2rem] text-xs font-semibold uppercase'>
            Step 1
          </span>
          <p className='mt-2 font-medium text-gray-800'>
            Enter Job Description
          </p>
        </div>
        <form onSubmit={handleSubmit} className='flex h-full flex-col gap-3'>
          <Textarea
            placeholder='Paste the job description here...'
            value={value}
            onChange={e => setValue(e.target.value)}
          />
          <Button type='submit' disabled={isFetching}>
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
      <div className='flex flex-col space-y-2'>
        {isFetching && <SkeletonKeyResponsibility />}
        {isError && (
          <div className='text-sm text-red-700'>Error: {error.message}</div>
        )}
        {!isFetching &&
          keyResponsibilities &&
          keyResponsibilities.map(responsibility => (
            <div
              key={responsibility}
              className='mt-4 rounded-2xl bg-gray-100 p-4 text-gray-800 transition-all hover:bg-gray-200'
            >
              {responsibility}
            </div>
          ))}
      </div>
    </section>
  )
}

export default KeyResponsibilitiesCard
