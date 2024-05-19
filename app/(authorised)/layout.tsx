import { SidebarNav } from '../components/sidebar-nav'
import { sidebarNavItems } from '@/constants/nav'

type AuthorisedLayoutProps = {
  children: React.ReactNode
}

const AuthorisedLayout = ({ children }: AuthorisedLayoutProps) => {
  return (
    <section className=''>
      <div className='flex gap-x-6 p-6'>
        <SidebarNav items={sidebarNavItems} />
        <main className='flex-1'>{children}</main>
      </div>
    </section>
  )
}

export default AuthorisedLayout
