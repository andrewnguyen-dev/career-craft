import { getApplications } from '@/lib/applications'
import { DataTable } from './applications-tracker/data-table'
import { columns } from './applications-tracker/columns'
import { SidebarNav } from '@/components/sidebar-nav'
import ApplicationTracker from './applications-tracker/page'

type HomeProps = {
  children: React.ReactNode
}

export default async function Home({ children }: HomeProps) {
  return <ApplicationTracker />
}
