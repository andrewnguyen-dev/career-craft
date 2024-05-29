import KeyResponsibilitiesCard from '@/app/components/key-responsibilities-card'
import ResumeInputCard from '@/app/components/resume-input-card'
import ResumeSuggestedChanges from '@/app/components/resume-suggested-changes'
import { ResumeTailoringProvider } from '@/context/resume-tailoring-context'

export default function ResumeTailoring() {
  return (
    <div className='p-3'>
      <header className='mb-4'>
        <h1 className='inline-block bg-gradient-to-r from-[#3F70C7] to-[#D84D67] bg-clip-text font-extrabold uppercase tracking-wide text-transparent'>
          Resume Tailoring
        </h1>
        <p className='mt-0.5 text-base text-gray-600 dark:text-gray-400'>
          Optimize your resume for any job by highlighting your most relevant
          experience.
        </p>
      </header>
      <ResumeTailoringProvider>
        <main className='flex flex-col gap-4'>
          <div className='flex flex-col md:flex-row gap-4'>
            <KeyResponsibilitiesCard />
            <ResumeInputCard />
          </div>
          <div>
            <ResumeSuggestedChanges />
          </div>
        </main>
      </ResumeTailoringProvider>
    </div>
  )
}
