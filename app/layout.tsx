import { ClerkProvider } from '@clerk/nextjs'

import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/header'
import Footer from '@/components/footer'
import { ThemeProvider } from '@/components/theme-provider'
import { SidebarNav } from './components/sidebar-nav'
import { sidebarNavItems } from '@/constants/nav'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'CareerCraft | Smart Tools for Smart Job Seekers',
  description:
    "Optimize your job search with CareerCraft's AI-driven tools. Track applications, tailor resumes, prepare for interviews, and get personalized LinkedIn tips—all in one place!"
}

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ClerkProvider>
      <html
        lang='en'
        className='scroll-smooth antialiased'
        suppressHydrationWarning
      >
        <body className={`flex min-h-screen flex-col ${inter.className}`}>
          <ThemeProvider
            enableSystem
            attribute='class'
            defaultTheme='system'
            disableTransitionOnChange
          >
            <Header />
            <main className='grow'>
              <div className='flex flex-col space-y-8 lg:flex-row lg:space-x-12 lg:space-y-0'>
                <aside className='ml-16 mr-6 p-6 rounded-xl bg-white h-[75vh] w-1/5'>
                  <SidebarNav items={sidebarNavItems} />
                </aside>
                <div className='flex-1'>{children}</div>
              </div>
            </main>
            <Footer />
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  )
}
