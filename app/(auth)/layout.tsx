import { ThemeProvider } from 'next-themes'

export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      forcedTheme='dark'
      disableTransitionOnChange
    >
      <div className='relative flex h-screen items-center justify-center'>
        <div className='absolute left-1/2 top-1/2 -z-20 h-[15rem] w-[30rem] -translate-x-1/2 -translate-y-1/2 bg-blue-300/30 blur-[10rem]'></div>
        {children}
      </div>
    </ThemeProvider>
  )
}
