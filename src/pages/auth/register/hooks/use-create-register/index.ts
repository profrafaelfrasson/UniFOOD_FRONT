import { useMutation } from '@tanstack/react-query'

import { api } from '@/lib/axios'

interface Register {
  name: string
  password: string
  email: string
}

export interface CreateRegister {
  user: Register
}

async function create({ user }: CreateRegister) {
  const { data } = await api.post('/api/auth/register', {
    ...user,
  })

  return data
}

export function useCreateRegister() {
  return useMutation({
    mutationFn: create,
    mutationKey: ['create-register'],
    onError: () => {
      console.log('error')
    },
  })
}
