import { Helmet } from 'react-helmet-async'

import { CardDashboard } from './components/card'

export function Dashboard() {
  return (
    <>
      <Helmet title="Painel" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Painel</h1>

        <div className="grid grid-cols-4 gap-4">
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
          <CardDashboard />
        </div>

        <div className="grid grid-cols-9 gap-4">TESTE</div>
      </div>
    </>
  )
}
