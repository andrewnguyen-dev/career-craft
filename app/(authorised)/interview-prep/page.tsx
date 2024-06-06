import CommonInterviewQuestions from '@/app/components/common-interview-questions'
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
      {/* <ResumeTailoringProvider> */}
        <main className='flex flex-col gap-4'>
          <div className='flex flex-col md:flex-row gap-4'>
            <CommonInterviewQuestions />
            {/* <ResumeInputCard /> */}
          </div>
          <div>
            {/* <ResumeSuggestedChanges /> */}
          </div>
        </main>
      {/* </ResumeTailoringProvider> */}
    </div>
  )
}

export default InterviewPrep