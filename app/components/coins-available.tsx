"use client";
import useFetchData from "@/hooks/useFetchData";
import { useAuth } from "@clerk/nextjs";

const CoinsAvailable = () => {
  const { userId } = useAuth();
  if (!userId) {
    throw new Error('Please log in to view this page.')
  }

  const { data, error, refetch } = useFetchData(
    '/api/get-current-user',
    userId,
    !!userId // `userId` would be `null` at first, so the query will not execute until the user exists
  )
  
  return (
    <div>{error ? (
      <p>N/A</p>
    ) : (
      <div>{data?.user.coins}</div>
    )}</div>
  )
}

export default CoinsAvailable