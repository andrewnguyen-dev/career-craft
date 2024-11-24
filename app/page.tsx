import HeroSection from './components/landing-page/hero-section'
import HeaderLandingPage from './components/landing-page/header-landing-page'
import Announcement from './components/landing-page/announcement'
import { FeaturesSection } from './components/landing-page/features-section'
import ComingSoon from './components/landing-page/coming-soon'
import { ThemeProvider } from 'next-themes'

export default async function Home() {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      forcedTheme='dark'
      disableTransitionOnChange
    >
      <div>
        <Announcement />
        <HeaderLandingPage />
        <HeroSection />
        <FeaturesSection />
        <ComingSoon />
      </div>
    </ThemeProvider>
  )
}
