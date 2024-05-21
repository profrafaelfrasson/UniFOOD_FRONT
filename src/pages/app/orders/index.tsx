import { Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'

import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'

import { Pagination } from '@/pages/components/pagination'
import { Table } from '@/pages/components/table'
import { ColumnDef } from '@tanstack/react-table'

export type Payment = {
  id: string
  amount: number
  status: 'pending' | 'processing' | 'success' | 'failed'
  email: string
}

const data: Payment[] = [
  {
    id: 'm5gr84i9',
    amount: 316,
    status: 'success',
    email: 'ken99@yahoo.com',
  },
  {
    id: '3u1reuv4',
    amount: 242,
    status: 'success',
    email: 'Abe45@gmail.com',
  },
  {
    id: 'derv1ws0',
    amount: 837,
    status: 'processing',
    email: 'Monserrat44@gmail.com',
  },
  {
    id: '5kma53ae',
    amount: 874,
    status: 'success',
    email: 'Silas22@gmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com',
  },
  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com',
  },

  {
    id: 'bhqecj4p',
    amount: 721,
    status: 'failed',
    email: 'carmella@hotmail.com',
  },
]


export const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: 'status',
    header: ({ header }) => {
      return (
        <Table.Head header={header} >
          Nº de Usuários
        </Table.Head>
      );
    },
    cell: ({ cell, row }) => {
      return (
        <Table.Cell
          cell={cell}
          className="text-center text-gray-500"
        >
          {row.getValue('status')}
        </Table.Cell>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ header }) => {
      return (
        <Table.Head header={header} >
          Nº de Usuários
        </Table.Head>
      );
    },
    cell: ({ cell, row }) => {
      return (
        <Table.Cell
          cell={cell}
          className="text-center text-gray-500"
        >
          {row.getValue('status')}
        </Table.Cell>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ header }) => {
      return (
        <Table.Head header={header} >
          Nº de Usuários
        </Table.Head>
      );
    },
    cell: ({ cell, row }) => {
      return (
        <Table.Cell
          cell={cell}
          className="text-center text-gray-500"
        >
          {row.getValue('status')}
        </Table.Cell>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ header }) => {
      return (
        <Table.Head header={header} >
          Nº de Usuários
        </Table.Head>
      );
    },
    cell: ({ cell, row }) => {
      return (
        <Table.Cell
          cell={cell}
          className="text-center text-gray-500"
        >
          {row.getValue('status')}
        </Table.Cell>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ header }) => {
      return (
        <Table.Head header={header} >
          Nº de Usuários
        </Table.Head>
      );
    },
    cell: ({ cell, row }) => {
      return (
        <Table.Cell
          cell={cell}
          className="text-center text-gray-500"
        >
          {row.getValue('status')}
        </Table.Cell>
      );
    },
  },
  {
    accessorKey: 'status',
    header: ({ header }) => {
      return (
        <Table.Head header={header} >
          Nº de Usuários
        </Table.Head>
      );
    },
    cell: ({ cell, row }) => {
      return (
        <Table.Cell
          cell={cell}
          className="text-center text-gray-500"
        >
          {row.getValue('status')}
        </Table.Cell>
      );
    },
  },
]

export function Orders() {

  return (
    <>
      <Helmet title="Pedidos" />
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
                <SelectItem value="processing">Em preparo</SelectItem>
                <SelectItem value="delivering">Em entrega</SelectItem>
                <SelectItem value="delivered">Entregue</SelectItem>
              </SelectContent>
            </Select>

            <Button type="submit" variant="secondary" size="xs">
              <Search className="mr-2 h-4 w-4" />
              Filtrar resultados
            </Button>

            <Button type="button" variant="outline" size="xs">
              <X className="mr-2 h-4 w-4" />
              Remover filtros
            </Button>
          </form>

          <Table.Root>
            <Table.Content
              data={data ?? []}
              columns={columns}
              emptyMessageComponent={() => (
                <Table.EmptyMessage>Adicione um novo</Table.EmptyMessage>
              )}
            />
          </Table.Root>

          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
