import SampleAnswers from '@/components/interview-prep/sample-answers'
import CommonInterviewQuestions from '@/components/interview-prep/common-interview-questions'
import { InterviewPrepProvider } from '@/context/interview-prep-context'
import React from 'react'

const InterviewPrep = () => {
  return (
    <div className='p-3'>
      <header className='mb-4'>
        <h1 className='inline-block bg-gradient-to-r from-[#3F70C7] to-[#D84D67] bg-clip-text font-extrabold uppercase tracking-wide text-transparent'>
          Interview Prep
        </h1>
        <p className='mt-0.5 text-base text-gray-600 dark:text-gray-400'>
          Get common interview questions for the job, and sample answer for those questions.
        </p>
      </header>
      <InterviewPrepProvider>
        <main className='flex flex-col gap-4'>
            <CommonInterviewQuestions />
            <SampleAnswers />
        </main>
      </InterviewPrepProvider>
    </div>
  )
}

export default InterviewPrep