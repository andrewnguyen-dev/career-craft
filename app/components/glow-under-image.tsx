'use client'

import { motion } from 'framer-motion'

const GlowUnderImage = () => {
  return (
    <motion.div
      className='absolute left-1/2 top-10 -z-20 h-[5rem] w-[15rem] -translate-x-1/2 bg-apple-300/30 blur-[5rem] sm:w-[30rem] md:h-[10rem] md:w-[45rem] lg:h-[20rem] lg:w-[60rem]'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1 }}
    />
  )
}

export default GlowUnderImage
