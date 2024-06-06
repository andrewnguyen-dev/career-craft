import { SidebarNav } from '../components/sidebar-nav'
import { sidebarNavItems } from '@/constants/nav'
import { ThemeProvider } from '../components/theme/theme-provider'

type AuthorisedLayoutProps = {
  children: React.ReactNode
}

const AuthorisedLayout = ({ children }: AuthorisedLayoutProps) => {
  return (
    <ThemeProvider
      enableSystem
      attribute='class'
      defaultTheme='dark'
      disableTransitionOnChange
    >
      <section className=''>
        <div className='flex gap-x-6 p-6'>
          <SidebarNav items={sidebarNavItems} />
          <main className='flex-1'>{children}</main>
        </div>
      </section>
    </ThemeProvider>
  )
}

export default AuthorisedLayout
