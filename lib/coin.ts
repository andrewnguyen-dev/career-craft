import prisma from './prisma'

export const deductCoin = async (userId: string) => {
  try {
    const user = await prisma.user.findUnique({ where: { id: userId } })
    
    if (!user) {
      throw new Error('User not found')
    }

    if (user.coins <= 0) {
      throw new Error('Insufficient coins')
    }

    await prisma.user.update({
      where: { id: userId },
      data: { coins: { decrement: 1 } }
    })

    return { message: 'API call successful', coinsLeft: user.coins - 1 }
  } catch (error) {
    return { error }
  }
}
