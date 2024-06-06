import { useQuery } from '@tanstack/react-query'

const useFetchData = (url: string, requestBody: any, enabled: false) => {
  const { data, isFetching, isError, error, refetch } = useQuery({
    queryKey: [url],
    queryFn: async () => {
      const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(requestBody),
        headers: { 'Content-Type': 'application/json' }
      })
      return response.json()
    },
    enabled
  })

  return { data, isFetching, isError, error, refetch }
}

export default useFetchData