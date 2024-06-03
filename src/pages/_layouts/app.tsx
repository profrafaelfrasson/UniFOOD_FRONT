import { Outlet } from 'react-router-dom'
import { Aside } from '../components/aside'


export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased">
      <Aside />

      <Outlet />
    </div>
  )
}
