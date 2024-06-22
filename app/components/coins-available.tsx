'use client'

import { useEffect, useState } from 'react';
import { useUser } from '@/context/user-context';
import toast from 'react-hot-toast';
import Coin from './coin';

const CoinsAvailable = () => {
  const { currentUser, isFetching } = useUser()
  const [prevCoins, setPrevCoins] = useState(currentUser.coins)

  useEffect(() => {
    if (prevCoins > 0 && currentUser.coins === 0) {
      toast('You have run out of coins', {
        icon: '😢'
      })
    }
    setPrevCoins(currentUser.coins)
  }, [currentUser.coins, prevCoins])

  return (
    <div className='flex h-8 items-center justify-center gap-1.5 rounded-full border-2 border-apple-400/80 px-2'>
      <Coin />
      {isFetching ? (
        <div className='h-4 w-3 animate-pulse rounded bg-gray-300 dark:bg-gray-600'></div>
      ) : (
        <p>{currentUser.coins}</p>
      )}
    </div>
  )
}

export default CoinsAvailable
