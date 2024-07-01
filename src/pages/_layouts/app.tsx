import { Outlet, useNavigate } from 'react-router-dom'
import { Aside } from '../components/aside'
import { Header } from '../components/header'
import { useEffect } from 'react'
import { useSession } from '@/contexts/session/hook/use-session'


export function AppLayout() {

  const { session } = useSession()

  const navigate = useNavigate()

  useEffect(() => {
    if (!session) {
      navigate('/login', { replace: true })
    }
  }, [session])

  if (!session) return

  return (
    <div className="flex min-h-screen flex-col antialiased ">
      <Aside />
      <Header />

      <Outlet />
    </div>
  )

}
