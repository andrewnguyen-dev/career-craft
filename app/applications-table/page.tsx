import { useEffect, useState } from 'react';
import { getApplications } from '@/lib/applications';
import { DataTable } from './data-table';
import { Application, columns } from './columns';

export default function ApplicationTable() {
  const [applications, setApplications] = useState<Application[] | undefined>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchApplications = async () => {
      const { applications, error } = await getApplications();
      if (error) {
        console.error('Failed to load applications:', error);
        setError('Failed to load data');
      } else {
        setApplications(applications);
      }
    };

    fetchApplications();
  }, []);

  if (error) return <div>Error loading applications: {error}</div>;

  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <section className='flex flex-col'>
        {applications && <DataTable columns={columns} data={applications} />}
      </section>
    </main>
  );
}
