import Image from 'next/image';
import { cn } from '@/lib/utils';
import applicationTracker from '../../public/assets/applications-tracker.png';
import AnimatedShinyText from '../ui/animated-shiny-text';
import { BorderBeam } from '../ui/border-beam';
import { HoverBorderGradient } from '../ui/hover-border-gradient';
import Particles from '../ui/particles';
import { Spotlight } from '../ui/spotlight';
import GlowUnderImage from './glow-under-image';

const HeroSection = () => {
  return (
    <section className='container pt-20 text-center'>
      <Particles
        className="absolute inset-0 -z-50"
        quantity={100}
        ease={80}
        color='#ffffff'
        refresh
      />
      {/* <Spotlight className='-mt-24 ml-96 h-[100%]' fill='#06b6d4' /> */}
      <Spotlight
        className='-left-10 -top-20 h-screen md:-left-32 md:-top-20'
        fill='#06b6d4'
      />
      <Spotlight className='left-80 top-28 h-[80vh] w-[50vw]' fill='#60a5fa' />

      <div className='z-10 flex items-center justify-center'>
        <div
          className={cn(
            'group rounded-full border border-black/5 bg-neutral-100 text-base text-white transition-all ease-in hover:cursor-pointer hover:bg-neutral-200 dark:border-white/5 dark:bg-neutral-900 dark:hover:bg-neutral-800'
          )}
        >
          <AnimatedShinyText className='inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400'>
            <span className='text-sm'>
              ✨ The Ultimate Toolkit for Job Seekers
            </span>
          </AnimatedShinyText>
        </div>
      </div>

      <div
        id='headline'
        className='z-10 mt-5 bg-opacity-50 bg-gradient-to-b from-neutral-50 to-cyan-300 bg-clip-text text-6xl font-bold leading-tight text-transparent'
      >
        <h1>
          Supercharge your <br />
          <span className='bg-gradient-to-br from-apple-200 to-apple-500 bg-clip-text inline-block pl-2'>
            job hunt
          </span>{' '}
          with AI
        </h1>
      </div>

      <div id='subheadline' className='mt-14 w-full'>
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
        <div className='relative mx-16 rounded-xl'>
          <BorderBeam />
          <Image
            src={applicationTracker}
            alt='Screenshot of Applications Tracker in CareerCraft app'
            className='z-50 rounded-xl'
            quality={100}
          />
          <GlowUnderImage />
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
