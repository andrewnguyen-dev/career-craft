'use server'

import { auth } from '@clerk/nextjs/server'
import { createApplication, updateApplication } from '@/lib/applications'
import { Application, ApplicationCreateInput } from '@/lib/type'
import { revalidatePath } from 'next/cache'

export const createApplicationAction = async (data: ApplicationCreateInput) => {
  // TODO: Validate the input data
  // https://www.youtube.com/watch?v=R_Pj593TH_Q&ab_channel=HamedBahram
  // https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#server-side-validation-and-error-handling

  const { userId } = auth()
  if (!userId) {
    throw new Error('You must be signed in to create an application.')
  }

  await createApplication(userId, data)
  revalidatePath('/applications-tracker')
}

export const updateApplicationAction = async (id: string, data: Application) => {
  const { userId } = auth()
  if (!userId) {
    throw new Error('You must be signed in to update an application.')
  }

  await updateApplication(id, data)
  revalidatePath('/applications-tracker')
}