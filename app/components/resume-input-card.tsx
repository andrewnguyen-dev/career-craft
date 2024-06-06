'use client'

import { useEffect, useState } from 'react';

import { useResumeTailoring } from '@/context/resume-tailoring-context';
import useFetchData from '@/hooks/useFetchData';

import Card from './resume-tailoring/card';
import Form from './resume-tailoring/form';

const ResumeInputCard = () => {
  const [value, setValue] = useState('')
  const { sharedData, setSharedData } = useResumeTailoring()

  const { data, isFetching, isError, error, refetch } = useFetchData(
    '/api/resume-tailoring',
    {
      messages: [{ content: value }],
      keyResponsibilities: sharedData.keyResponsibilities
    },
    false
  )

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
    <Card step={2} title="Enter Your Resume">
      <Form
        value={value}
        setValue={setValue}
        isFetching={isFetching}
        isDisabled={!value || !sharedData.keyResponsibilities}
        handleSubmit={handleSubmit}
        placeholder="Paste the text-based resume here..."
        buttonText="Analyze Resume"
      />
    </Card>
  )
}

export default ResumeInputCard
