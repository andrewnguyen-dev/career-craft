import { useQuery } from '@tanstack/react-query'

const useFetchData = (url: string, requestBody: any, enabled: boolean) => {
  const { data, isFetching, isError, error, refetch } = useQuery({
    queryKey: [url, requestBody],
    queryFn: async () => {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' }
      })
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json()
    },
    enabled
  })

  return { data, isFetching, isError, error, refetch }
}

export default useFetchData