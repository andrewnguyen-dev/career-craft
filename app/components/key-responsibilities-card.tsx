'use client'

import { useEffect, useState } from 'react'
import { useQuery } from '@tanstack/react-query'
import { Sparkles } from 'lucide-react'

import { Button } from '@/ui/button'
import { Textarea } from '@/ui/textarea'

import SkeletonKeyResponsibility from '../skeletons/skeleton-key-responsibility'
import LoadingDots from './loading-dot'
import { useResumeTailoring } from '@/context/resume-tailoring-context'
import useFetchData from '@/hooks/useFetchData'
import Card from './resume-tailoring/card'
import Form from './resume-tailoring/form'

const KeyResponsibilitiesCard = () => {
  const [value, setValue] = useState('')
  const { setSharedData } = useResumeTailoring()
  const [keyResponsibilities, setKeyResponsibilities] = useState([])

  const { data, isFetching, isError, error, refetch } = useFetchData(
    '/api/key-responsibilities',
    { messages: [{ content: value }] },
    false
  )

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
    <Card step={1} title='Enter Job Description'>
      <Form
        value={value}
        setValue={setValue}
        isFetching={isFetching}
        isDisabled={!value}
        handleSubmit={handleSubmit}
        placeholder='Paste the job description here...'
        buttonText='Analyze Job Description'
      />
      <div className='flex flex-col space-y-2 -mt-4'>
        {isFetching && <SkeletonKeyResponsibility />}
        {isError && (
          <div className='text-sm text-red-700 mt-4'>Error: {error?.message}</div>
        )}
        {!isFetching &&
          keyResponsibilities &&
          keyResponsibilities.map(responsibility => (
            <div
              key={responsibility}
              className='mt-4 rounded-2xl bg-gray-100 p-4 text-gray-800 transition-all hover:bg-gray-200 dark:bg-gray-900/90 dark:text-gray-200'
            >
              {responsibility}
            </div>
          ))}
      </div>
    </Card>
  )
}

export default KeyResponsibilitiesCard
