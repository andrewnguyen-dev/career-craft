'use client'
import { useTheme } from 'next-themes'
import { useResumeTailoring } from '@/context/resume-tailoring-context'
import stylesLight from '@/styles/resume-tailoring-light.module.css'
import stylesDark from '@/styles/resume-tailoring-dark.module.css'

const ResumeSuggestedChanges = () => {
  const { sharedData } = useResumeTailoring()
  const { theme } = useTheme()

  return (
    <div>
      {sharedData.suggestion && (
        <div className='rounded-2xl bg-white dark:bg-neutral-800/60 p-5'>
          <p className='mb-2 ml-2 font-medium text-gray-800 dark:text-gray-200'>
            Suggested changes:
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: sharedData.suggestion }}
            className={theme === 'light' ? `${stylesLight.table}` : `${stylesDark.table}`}
          />
        </div>
      )}
    </div>
  )
}

export default ResumeSuggestedChanges
