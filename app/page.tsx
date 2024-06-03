import HeroSection from './components/hero-section'
import HeaderLandingPage from './components/header-landing-page'
import Announcement from './components/announcement'

export default async function Home() {
  return (
    <div>
      <Announcement />
      <HeaderLandingPage />
      <HeroSection />
    </div>
  )
}

{
  /* <p className='text-center mt-8 font-bold'>Landing Page is Under Construction 🚧</p>
<p className='text-center mt-2 text-gray-700 dark:text-gray-300'>Login or Register to continue.</p> */
}
