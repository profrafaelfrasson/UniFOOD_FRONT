import { Outlet } from 'react-router-dom'
import { Aside } from '../components/aside'
import { Header } from '../components/header'


export function AppLayout() {
  return (
    <div className="flex min-h-screen flex-col antialiased ">
      <Aside />
      <Header />

      <Outlet />
    </div>
  )
}
