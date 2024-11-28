import { api } from '@/lib/axios'
import { useQuery } from '@tanstack/react-query'

async function get() {
  const { data } = await api.get('/orders/1')

  return data
}

export function useGetProducts() {
  const queryKey = ['get-products']

  const query = useQuery({
    queryKey,
    queryFn: get
  })

  return { ...query, queryKey }
}