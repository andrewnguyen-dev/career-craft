'use client'

import KeyResponsibilitiesCard from '@/app/components/key-responsibilities-card'
import TailoredResumeCard from '@/app/components/tailored-resume-card'

export default function Chat() {

  return (
    <div className='p-3'>
      <div id='header'>
        <h1 className='inline-block bg-gradient-to-r from-[#3F70C7] to-[#D84D67] bg-clip-text font-extrabold uppercase tracking-wide text-transparent'>
          Resume Tailoring
        </h1>
        <p className='mt-0.5 text-base text-gray-600'>
          Optimize your resume for any job by highlighting your most relevant
          experience.
        </p>
      </div>
      <main className='mt-4 flex gap-4'>
        <KeyResponsibilitiesCard />
        <TailoredResumeCard />
      </main>
    </div>
  )
}
