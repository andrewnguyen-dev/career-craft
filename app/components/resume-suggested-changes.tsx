'use client'

import { useResumeTailoring } from '@/context/resume-tailoring-context'
import styles from '@/styles/resume-tailoring.module.css'

const ResumeSuggestedChanges = () => {
  const { sharedData } = useResumeTailoring()

  return (
    <div>
      {sharedData.suggestion && (
        <div className='rounded-2xl bg-white p-5'>
          <p className='mb-2 ml-2 font-medium text-gray-800'>
            Suggested changes:
          </p>
          <div
            dangerouslySetInnerHTML={{ __html: sharedData.suggestion }}
            className={`${styles.table} `}
          />
        </div>
      )}
    </div>
  )
}

export default ResumeSuggestedChanges
