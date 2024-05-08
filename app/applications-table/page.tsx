import { getApplications } from '@/lib/applications';
import { DataTable } from './data-table';
import { columns } from './columns';
import { currentUser, auth } from "@clerk/nextjs/server";
import { AddNewApplication } from '../components/add-new-application';

export default async function ApplicationTable() {
  const { userId } = auth();
  if (!userId) {
    throw new Error('Please log in to view this page.');
  } 

  const { applications, error } = await getApplications(userId);
  if (error) {
    throw new Error('Failed to fetch applications');
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='flex flex-col gap-4'>
        {applications && <DataTable columns={columns} data={applications} />}
      </section>
    </main>
  );
}

// TODO: Check if the Clerk User already exist in the table
