'use server'

import { auth } from '@clerk/nextjs/server'
import { createApplication, deleteApplication, updateApplication } from '@/lib/applications'
import { Application, ApplicationCreateInput } from '@/lib/type'
import { revalidatePath } from 'next/cache'
import { formSchema } from '@/lib/validation-schema'

export const createApplicationAction = async (data: ApplicationCreateInput) => {
  // TODO: Validate the input data
  // https://www.youtube.com/watch?v=R_Pj593TH_Q&ab_channel=HamedBahram
  // https://nextjs.org/docs/app/building-your-application/data-fetching/server-actions-and-mutations#server-side-validation-and-error-handling

  const { userId } = auth()
  if (!userId) {
    throw new Error('You must be signed in to create an application.')
  }

  const validatedFields = formSchema.safeParse(data)
  if (!validatedFields.success) {
    throw new Error(validatedFields.error.errors.join(', '))
  }

  await createApplication(userId, data)
  revalidatePath('/applications-tracker')
}

export const updateApplicationAction = async (id: string, data: Application) => {
  const { userId } = auth()
  if (!userId) {
    throw new Error('You must be signed in to update an application.')
  }

  const validatedFields = formSchema.safeParse(data)
  if (!validatedFields.success) {
    throw new Error(validatedFields.error.errors.join(', '))
  }
  
  await updateApplication(id, data)
  revalidatePath('/applications-tracker')
}

export const deleteApplicationAction = async (id: string) => {
  const { userId } = auth()
  if (!userId) {
    throw new Error('You must be signed in to delete an application.')
  }

  await deleteApplication(id)
  revalidatePath('/applications-tracker')
}