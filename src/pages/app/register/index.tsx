import { Helmet } from 'react-helmet-async'

import { Card, CardHeader, CardTitle } from '@/components/ui/card'

export function Register() {
  return (
    <>
      <Helmet title="Cadastros" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Cadastros</h1>

        <div className="grid grid-cols-4 gap-4">
          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Categorias
              </CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Produtos
              </CardTitle>
            </CardHeader>
          </Card>

          <Card>
            <CardHeader className="flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-base font-semibold">
                Fornecedores
              </CardTitle>
            </CardHeader>
          </Card>
        </div>

        <div className="grid grid-cols-9 gap-4">TESTE</div>
      </div>
    </>
  )
}
