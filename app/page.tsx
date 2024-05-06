import { getApplications } from '@/lib/applications'
import { DataTable } from './applications-table/data-table'
import { Application, columns } from './applications-table/columns'

export default async function Home() {
  const { applications, error } = await getApplications()
  console.log('🚀 ~ Home ~ applications:', applications)

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='flex flex-col'>
        {applications && <DataTable columns={columns} data={applications} />}
      </section>
    </main>
  )
}
