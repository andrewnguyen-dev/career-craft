'use server'

import { auth } from '@clerk/nextjs/server'
import { createApplication } from '@/lib/applications'
import { Application, ApplicationCreateInput } from '@/lib/type'

export const createApplicationAction = async (data: ApplicationCreateInput) => {
  const { userId } = auth()
  if (!userId) {
    throw new Error('You must be signed in to add an item to your cart')
  }

  console.log('🚀 ~ userId:', userId)
  console.log('🚀 ~ data:', data)

  await createApplication(userId, data)
}
