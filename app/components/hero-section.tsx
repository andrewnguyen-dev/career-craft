import Image from 'next/image'
import applicationTracker from '../../public/assets/applications-tracker.png'
import { BorderBeam } from '../ui/border-beam'
import { HoverBorderGradient } from '../ui/hover-border-gradient'
import { Spotlight } from '../ui/spotlight'

const HeroSection = () => {
  return (
    <section className='container mt-20 text-center'>
      <Spotlight className='-mt-24 ml-96 h-[100%]' fill='#06b6d4' />
      <div
        id='headline'
        className='z-10 bg-opacity-50  bg-gradient-to-b from-neutral-50 to-cyan-300 bg-clip-text text-6xl font-bold leading-tight text-transparent'
      >
        <p>Supercharge your</p>
        <p>job hunt with AI</p>
      </div>
      <div id='subheadline' className='mt-16 w-full'>
        <p className='mx-auto max-w-[42rem] text-lg text-gray-400'>
          Streamline your applications, tailor your resume, and prepare for
          interviews like a pro with CareerCraft’s intelligent job search tools.
        </p>
      </div>
      <div id='cta-btn' className='mt-12 flex justify-center'>
        <HoverBorderGradient
          containerClassName='rounded-full border-white/50'
          duration={1.5}
          as='button'
          className='mx-auto flex items-center space-x-2 bg-transparent bg-opacity-60 px-5 text-gray-200 backdrop-blur-lg backdrop-filter'
        >
          <span>Get started now. It&apos;s free.</span>
        </HoverBorderGradient>
      </div>
      <div className='relative mt-28'>
        <div className='relative rounded-xl'>
          <BorderBeam />
          <Image
            src={applicationTracker}
            alt='Screenshot of Applications Tracker in CareerCraft app'
            className='z-50 rounded-xl'
            quality={100}
          />
          <div className='absolute left-1/2 top-10 -z-20 h-[5rem] w-[15rem] -translate-x-1/2 bg-apple-300/30 blur-[5rem] sm:w-[30rem] md:h-[10rem] md:w-[45rem] lg:h-[20rem] lg:w-[60rem]'></div>
        </div>
        <div
          className='pointer-events-none absolute inset-0'
          style={{
            backgroundImage:
              'linear-gradient(to bottom, rgba(255, 255, 255, 0) 50%, #161618 80%)'
          }}
        ></div>
      </div>
    </section>
  )
}

export default HeroSection
