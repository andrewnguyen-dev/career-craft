import prisma from './prisma'

export const getApplications = async () => {
  try {
    // TODO: Include userId in the query
    const applications = await prisma.application.findMany()
    return { applications }
  } catch (error) {
    return { error }
  }
}

export const createApplication = async (data) => {
  // TODO: Include userId in the query
  try {
    const application = await prisma.application.create({ data })
    return { application }
  } catch (error) {
    return { error }
  }
}
