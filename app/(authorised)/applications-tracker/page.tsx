import { getApplications } from '@/lib/applications'
import { DataTable } from './data-table'
import { columns } from './columns'
import { currentUser, auth } from '@clerk/nextjs/server'
import { checkIsNewUser, createUserInDatabase, getTotalUserCount } from '@/lib/user'

export default async function ApplicationTracker() {
  const user = await currentUser()
  if (!user) {
    throw new Error('Please log in to view this page.')
  }

  const { isNewUser } = await checkIsNewUser(user.id)
  if (isNewUser) {
    const { userCount, error: errorUserCount } = await getTotalUserCount()
    if (errorUserCount) {
      throw new Error('Failed to fetch user count')
    }
    const plan = userCount !== undefined && userCount < 50 ? 'PRO' : 'FREE'
    const coins = plan === 'PRO' ? 200 : 15

    const { error: errorCreateUser } = await createUserInDatabase(
      user.id,
      user.emailAddresses[0].emailAddress,
      user.firstName,
      user.lastName,
      user.imageUrl,
      plan,
      coins
    )

    if (errorCreateUser) {
      throw new Error('Failed to create user')
    }
  }

  const { applications, error: errorFetching } = await getApplications(user.id)

  if (errorFetching) {
    throw new Error('Failed to fetch applications')
  }

  return (
    <div className='mx-auto'>
      {applications && <DataTable columns={columns} data={applications} />}
    </div>
  )
}

// TODO: Check if the Clerk User already exist in the table
