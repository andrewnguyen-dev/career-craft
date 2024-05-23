import { Textarea } from '@/ui/textarea'
import { useState } from 'react'
import { Button } from '@/ui/button'
import { Sparkles } from 'lucide-react'
import { useQuery } from '@tanstack/react-query'
import SkeletonKeyResponsibility from '../skeletons/skeleton-key-responsibility'
import LoadingDots from './loading-dot'

const KeyResponsibilitiesCard = () => {
  const [value, setValue] = useState('')

  const { data, isFetching, isError, error, refetch } = useQuery({
    queryKey: ['key-responsibilities'],
    queryFn: async () => {
      const response = await fetch('/api/resume-tailoring', {
        method: 'POST',
        body: JSON.stringify({ messages: [{ content: value }] }),
        headers: { 'Content-Type': 'application/json' }
      })
      return response.json()
    },
    enabled: false
  })

  let keyResponsibilities: string[] = []
  if (data) {
    keyResponsibilities = data.text
      .substring(data.text.indexOf('1') + 3)
      .split(/2\.|3\./)
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    refetch()
  }

  return (
    <section className='flex flex-1 flex-col gap-4 rounded-2xl bg-white p-5'>
      <div>
        <span className='inline-block self-start rounded-sm bg-slate-400 px-1.5 py-[0.2rem] text-xs font-semibold uppercase'>
          Step 1
        </span>
        <p className='mt-2 font-medium text-gray-800'>Enter Job Description</p>
      </div>
      <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
        <Textarea
          placeholder='Paste the job description here...'
          value={value}
          onChange={e => setValue(e.target.value)}
        />
        <Button type='submit' disabled={isFetching}>
          {isFetching ? (
            <LoadingDots color='white'/>
          ) : (
            <>
              <Sparkles className='mr-2 h-4 w-4' />
              Analyze Job Description
            </>
          )}
        </Button>
      </form>
      <div className='flex flex-col gap-2'>
        {isFetching && <SkeletonKeyResponsibility />}
        {isError && (
          <div className='text-sm text-red-700'>Error: {error.message}</div>
        )}
        {!isFetching &&
          keyResponsibilities &&
          keyResponsibilities.map(responsibility => (
            <div
              key={responsibility}
              className='rounded-2xl bg-gray-100 p-4 text-gray-800 transition-all hover:bg-gray-200'
            >
              {responsibility}
            </div>
          ))}
      </div>
    </section>
  )
}

export default KeyResponsibilitiesCard
