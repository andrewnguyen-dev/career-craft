import { SidebarNav } from '../components/sidebar-nav'
import { sidebarNavItems } from '@/constants/nav'
import { ThemeProvider } from '../components/theme/theme-provider'
import { UserProvider } from '@/context/user-context'

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
      <UserProvider>
        <section className=''>
          <div className='flex gap-x-6 p-6'>
            <SidebarNav items={sidebarNavItems} />
            <main className='flex-1'>{children}</main>
          </div>
        </section>
      </UserProvider>
    </ThemeProvider>
  )
}

export default AuthorisedLayout
