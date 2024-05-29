import React from 'react'

const WhyMetricsMatter = () => {
  return (
    <section className='rounded-2xl bg-white p-5 dark:bg-neutral-800/60'>
      <h3 className='text-lg font-bold text-apple-600 dark:text-apple-500'>
        Why Metrics Matter?
      </h3>
      <p className='text-gray-800 dark:text-gray-300'>
        Metrics make your achievements tangible and impressive to potential
        employers. According to{' '}
        <a
          href='https://cultivatedculture.com/resume-statistics/'
          className='underline'
        >
          {' '}
          Cultivated Culture
        </a>
        , resumes with measurable metrics improve interview chances
        significantly, yet only 26% of resumes leverage this. Companies prefer
        resumes with metrics because they:
      </p>
      <ul className='text-gray-800 dark:text-gray-300'>
        <li>
          <span className='font-medium'>- Show Impact:</span> Quantifiable
          results demonstrate the real impact of your work.
        </li>
        <li>
          <span className='font-medium'>- Enhance Credibility:</span> Specific
          numbers provide concrete evidence of your skills and achievements.
        </li>
        <li>
          <span className='font-medium'>- Facilitate Comparison:</span> Metrics
          allow employers to compare candidates more easily. If ten candidates
          all say they were responsible for a task, it&apos;s hard to tell who
          did it well and who didn&apos;t. Metrics solve this by providing clear
          evidence of performance.
        </li>
      </ul>
    </section>
  )
}

export default WhyMetricsMatter
