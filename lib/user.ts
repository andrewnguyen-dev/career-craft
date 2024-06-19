import prisma from './prisma'
import { Plan } from './type'

export const checkIsNewUser = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } })
    return { isNewUser: !user }
  } catch (error) {
    return { error }
  }
}

export const createUserInDatabase = async (
  userId: string,
  emailAddress: string,
  firstName: string | null,
  lastName: string | null,
  imageUrl: string,
  plan: Plan,
  coins: number
) => {
  try {
    await prisma.user.create({
      data: {
        id: userId,
        emailAddress,
        firstName,
        lastName,
        imageUrl,
        plan,
        coins
      }
    })
    return { success: true }
  } catch (error) {
    return { error }
  }
}

export const getTotalUserCount = async () => {
  try {
    const userCount = await prisma.user.count()
    return { userCount }
  } catch (error) {
    return { error }
  }
}

export const getUserById = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } })
    return { user }
  } catch (error) {
    return { error }
  }
}