import Link from 'next/link'
import { ThemeToggle } from '@/components/theme/theme-toggle'
import { SignInButton, SignedIn, SignedOut, UserButton } from '@clerk/nextjs'

export default function Header() {
  return (
    <header className='py-4'>
      <nav className='container flex items-center justify-between'>
        <ul className='flex gap-6'>
          <li>
            <Link href='/'>Home</Link>
          </li>
          <li>
            <Link href='/applications-tracker'>Applications</Link>
          </li>
        </ul>
        <div className='flex gap-6'>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserButton />
          </SignedIn>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
