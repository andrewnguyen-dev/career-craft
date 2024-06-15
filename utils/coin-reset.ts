import { differenceInDays } from 'date-fns'
import prisma from '../lib/prisma'

export const resetCoinsIfNeeded = async (userId: string) => {
  const user = await prisma.user.findUnique({ where: { id: userId } })
  if (!user) {
    throw new Error('User not found')
  }

  const today = new Date()
  const lastResetDate = new Date(user.lastResetDate)

  const daysSinceLastReset = differenceInDays(today, lastResetDate)
  let resetNeeded = false

  if (user.plan === 'FREE' && daysSinceLastReset >= 30) {
    resetNeeded = true
  } else if (user.plan === 'PRO' && daysSinceLastReset >= 30) {
    resetNeeded = true
  }

  if (resetNeeded) {
    const newCoinBalance = user.plan === 'FREE' ? 15 : 200
    await prisma.user.update({
      where: { id: userId },
      data: {
        coins: newCoinBalance,
        lastResetDate: today
      }
    })
  }
}
