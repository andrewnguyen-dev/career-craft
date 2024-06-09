import React from 'react'

type CardProps = {
  title: string
  subtitle: string
  children: React.ReactNode
}

const Card = ({title, subtitle, children}: CardProps) => {
  return (
    <section className='bg-white dark:bg-neutral-800/60 flex flex-1 flex-col rounded-2xl p-5 gap-4'>
    <div>
      <h2 className='text-lg font-bold text-apple-600 dark:text-apple-500'>
        {title}
      </h2>
      <p className='text-gray-700 dark:text-gray-300'>{subtitle}</p>
    </div>
    {children}
  </section>
  )
}

export default Card