import { getApplications } from '@/lib/applications'
import { DataTable } from './applications-tracker/data-table'
import { columns } from './applications-tracker/columns'
import { SidebarNav } from '@/components/sidebar-nav'
import ApplicationTracker from './applications-tracker/page'
import Header from '@/components/header'

type HomeProps = {
  children: React.ReactNode
}

export default async function Home({ children }: HomeProps) {
  return (
    <div>
      <Header />
      <p className='text-center mt-8 font-bold'>This is the Landing Page</p>
    </div>
  )
}
