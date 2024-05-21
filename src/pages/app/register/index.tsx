import { Helmet } from 'react-helmet-async'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

export function Register() {
  return (
    <>
      <Helmet title="Cadastros" />
      <div className="flex flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Pedidos</h1>
        <div className="space-y-2.5">
          <form className="flex items-center gap-2">
            <span className="text-sm font-semibold">Filtros: </span>
            <Input placeholder="ID do pedido" className="h-8 w-auto" />
            <Input placeholder="Nome do cliente" className="h-8 w-[320px]" />
            <Select defaultValue="all">
              <SelectTrigger className="h-8 w-[180px]">
                <SelectValue />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">Todos</SelectItem>
                <SelectItem value="peding">Pendente</SelectItem>
                <SelectItem value="camceled">Cancelado</SelectItem>
              </SelectContent>
            </Select>
          </form>
        </div>
      </div>
    </>
  )
}
