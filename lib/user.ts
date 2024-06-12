import prisma from './prisma'

export const checkIsNewUser = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({
      where: { id: userId }
    })
    return { isNewUser: !user }
  } catch (error) {
    return { error }
  }
}

export const createUserInDatabase = async (userId: string, emailAddress: string, firstName: string | null, lastName: string | null, imageUrl: string) => {
  try {
    await prisma.user.create({
      data: {
        id: userId,
        emailAddress,
        firstName,
        lastName,
        imageUrl
      }
    })
    return { success: true }
  } catch (error) {
    return { error }
  }
}
