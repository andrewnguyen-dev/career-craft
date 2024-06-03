import ImproveMetrics from '@/app/components/improve-metrics'
import SuggestMetrics from '@/app/components/suggest-metrics'
import WhyMetricsMatter from '@/app/components/why-metrics-matter'
import React from 'react'

const BulletTailoring = () => {
  return (
    <div className='p-3'>
      <header className='mb-4'>
        <h1 className='inline-block bg-gradient-to-r from-[#3F70C7] to-[#D84D67] bg-clip-text font-extrabold uppercase tracking-wide text-transparent'>
          Bullet Point Tailoring
        </h1>
        <p className='mt-0.5 text-base text-gray-600 dark:text-gray-400'>
          Optimize your bullet points.
        </p>
      </header>
      <main className='flex flex-col gap-4'>
        <WhyMetricsMatter />
        <SuggestMetrics />
        <ImproveMetrics />
      </main>
    </div>
  )
}

export default BulletTailoring
