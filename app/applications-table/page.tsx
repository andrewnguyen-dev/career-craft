import { useEffect, useState } from 'react';
import { getApplications } from '@/lib/applications';
import { DataTable } from './data-table';
import { Application, columns } from './columns';
import { currentUser, auth } from "@clerk/nextjs/server";

export default async function ApplicationTable() {
  const { userId } = auth();
  console.log("🚀 ~ ApplicationTable ~ userId:", userId)
  let applications = null;
  let error = null;
  
  if (userId) {
    ({ applications, error } = await getApplications(userId))
  }

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='flex flex-col'>
        {applications && <DataTable columns={columns} data={applications} />}
      </section>
    </main>
  );
}
