'use client'

import { useEffect, useState } from 'react'

import { useResumeTailoring } from '@/context/resume-tailoring-context'
import useFetchData from '@/hooks/useFetchData'

import SkeletonKeyResponsibility from '../../skeletons/skeleton-key-responsibility'
import Card from './card'
import TextareaForm from './textarea-form'
import { useQueryClient } from '@tanstack/react-query'

const KeyResponsibilitiesCard = () => {
  const [value, setValue] = useState('')
  const { setSharedData } = useResumeTailoring()
  const [keyResponsibilities, setKeyResponsibilities] = useState([])
  const queryClient = useQueryClient()

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
      queryClient.invalidateQueries({ queryKey: ['/api/get-current-user'] })
    }
  }, [data, queryClient, setSharedData])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    refetch()
  }

  return (
    <Card step={1} title='Enter Job Description'>
      <TextareaForm
        value={value}
        setValue={setValue}
        isFetching={isFetching}
        isDisabled={!value}
        handleSubmit={handleSubmit}
        placeholder='Paste the job description here...'
        buttonText='Analyze Job Description'
      />
      <div className='-mt-4 flex flex-col space-y-2'>
        {isFetching && <SkeletonKeyResponsibility />}
        {isError && (
          <div className='mt-4 text-sm text-red-700'>
            Error: {error?.message}
          </div>
        )}
        {!isFetching &&
          keyResponsibilities &&
          keyResponsibilities.map(responsibility => (
            <div
              key={responsibility}
              className='mt-4 rounded-2xl bg-gray-100 p-4 text-gray-800 transition-all hover:bg-gray-200/60 dark:bg-gray-900/90 dark:text-gray-200 hover:dark:bg-gray-900/80'
            >
              {responsibility}
            </div>
          ))}
      </div>
    </Card>
  )
}

export default KeyResponsibilitiesCard
