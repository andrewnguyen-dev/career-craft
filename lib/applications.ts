import { Application } from '@/app/applications-table/columns'
import prisma from './prisma'

export const getApplications = async (userId: string) => {
  try {
    const applications = await prisma.application.findMany({
      where: { userId }
    })
    return { applications }
  } catch (error) {
    return { error }
  }
}

export const createApplication = async (
  userId: string,
  applicationData: Application
) => {
  try {
    const application = await prisma.application.create({
      data: {
        ...applicationData,
        userId
      }
    })
    return { application }
  } catch (error) {
    return { error }
  }
}
