import Link from 'next/link'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'
import { ThemeProvider } from './theme/theme-provider'

export default function HeaderLandingPage() {
  return (
    <header className='py-4'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-8 items-center justify-center'>
          <li className='font-bold text-lg'>
            <Link href='/'>[CareerCraft]</Link>
          </li>
          <li>
            <Link href='/applications-tracker'>Dashboard</Link>
          </li>
        </ul>
        <div className='flex gap-6'>
          <ThemeProvider
            enableSystem
            attribute='class'
            defaultTheme='dark'
            disableTransitionOnChange
          >
            <SignedOut>
              <SignInButton />
            </SignedOut>
            <SignedIn>
              <UserButton />
            </SignedIn>
          </ThemeProvider>
        </div>
      </nav>
    </header>
  )
}
