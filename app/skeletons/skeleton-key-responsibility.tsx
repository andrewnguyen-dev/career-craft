import React from 'react'

const SkeletonKeyResponsibility = () => {
  return (
    <>
      <div className='mt-4 flex animate-pulse flex-col gap-3 rounded-2xl bg-gray-100 p-4'>
        <div className='h-4 rounded-lg bg-gray-200'></div>
        <div className='h-4 w-7/12 rounded-lg bg-gray-200'></div>
      </div>
      <div className='flex animate-pulse flex-col gap-3 rounded-2xl bg-gray-100 p-4'>
        <div className='h-4 rounded-lg bg-gray-200'></div>
        <div className='h-4 w-4/12 rounded-lg bg-gray-200'></div>
      </div>
      <div className='flex animate-pulse flex-col gap-3 rounded-2xl bg-gray-100 p-4'>
        <div className='h-4 rounded-lg bg-gray-200'></div>
        <div className='h-4 w-6/12 rounded-lg bg-gray-200'></div>
      </div>
    </>
  )
}

export default SkeletonKeyResponsibility
