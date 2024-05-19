export default function AuthLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <body className='h-screen flex items-center justify-center'>
      {children}
    </body>
  )
}
