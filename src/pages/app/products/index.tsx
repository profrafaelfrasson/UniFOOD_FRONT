import {
  MoreHorizontal,
  PlusCircle,
} from "lucide-react"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


import { Link } from "react-router-dom"
import { ColumnDef } from "@tanstack/react-table"
import { Table } from "@/pages/components/table"
import { Page } from "@/pages/components/page"

interface Product {
  id: string
  image: string
  name: string
  amount: string
  price: string
  createdAt: string
  editedAt: string
}

const data: Product[] = [
  {
    id: crypto.randomUUID(),
    image: '/pastel.jpeg',
    name: 'Pastel de ovo',
    price: '$499.99',
    amount: '25',
    createdAt: '2023-07-12 10:42 AM',
    editedAt: '2023-07-12 10:42 AM'
  },
  {
    id: crypto.randomUUID(),
    image: '/pastel.jpeg',
    name: 'Pastel de ovo',
    price: '$499.99',
    amount: '25',
    createdAt: '2023-07-12 10:42 AM',
    editedAt: '2023-07-12 10:42 AM'
  },
  {
    id: crypto.randomUUID(),
    image: '/pastel.jpeg',
    name: 'Pastel de ovo',
    price: '$499.99',
    amount: '25',
    createdAt: '2023-07-12 10:42 AM',
    editedAt: '2023-07-12 10:42 AM'
  },
  {
    id: crypto.randomUUID(),
    image: '/pastel.jpeg',
    name: 'Pastel de ovo',
    price: '$499.99',
    amount: '25',
    createdAt: '2023-07-12 10:42 AM',
    editedAt: '2023-07-12 10:42 AM'
  },
  {
    id: crypto.randomUUID(),
    image: '/pastel.jpeg',
    name: 'Pastel de ovo',
    price: '$499.99',
    amount: '25',
    createdAt: '2023-07-12 10:42 AM',
    editedAt: '2023-07-12 10:42 AM'
  },
  {
    id: crypto.randomUUID(),
    image: '/pastel.jpeg',
    name: 'Pastel de ovo',
    price: '$499.99',
    amount: '25',
    createdAt: '2023-07-12 10:42 AM',
    editedAt: '2023-07-12 10:42 AM'
  },
  {
    id: crypto.randomUUID(),
    image: '/pastel.jpeg',
    name: 'Pastel de ovo',
    price: '$499.99',
    amount: '25',
    createdAt: '2023-07-12 10:42 AM',
    editedAt: '2023-07-12 10:42 AM'
  },

  {
    id: crypto.randomUUID(),
    image: '/pastel.jpeg',
    name: 'Pastel de ovo',
    price: '$499.99',
    amount: '25',
    createdAt: '2023-07-12 10:42 AM',
    editedAt: '2023-07-12 10:42 AM'
  },
]

export const columns: ColumnDef<Product>[] = [
  {
    accessorKey: 'image',
    header: ({ header }) => {
      return (
        <Table.Head
          header={header}
        />
      );
    },
    cell: ({ cell, row: { original } }) => {
      return (
        <Table.Cell
          cell={cell}
        >
          <img
            alt="Product image"
            className="aspect-square rounded-md object-cover"
            height="64"
            src={original.image}
            width="64"
          />
        </Table.Cell>
      );
    },
  },
  {
    accessorKey: 'name',
    header: ({ header }) => {
      return (
        <Table.Head header={header}  >
          Nome
        </Table.Head>
      );
    },
    cell: ({ cell, row }) => {
      return (
        <Table.Cell
          cell={cell}
        >
          {row.getValue('name')}
        </Table.Cell>
      );
    },
  },
  {
    accessorKey: 'price',
    header: ({ header }) => {
      return (
        <Table.Head header={header} className="hidden md:table-cell">
          Preço
        </Table.Head>
      );
    },
    cell: ({ cell, row }) => {
      return (
        <Table.Cell
          cell={cell}
          className="hidden md:table-cell"
        >
          {row.getValue('price')}
        </Table.Cell>
      );
    },
  },
  {
    accessorKey: 'amount',
    header: ({ header }) => {
      return (
        <Table.Head header={header} className="hidden md:table-cell" >
          Unidades
        </Table.Head>
      );
    },
    cell: ({ cell, row }) => {
      return (
        <Table.Cell
          cell={cell}
          className="hidden md:table-cell"
        >
          {row.getValue('amount')}
        </Table.Cell>
      );
    },
  },
  {
    accessorKey: 'createdAt',
    header: ({ header }) => {
      return (
        <Table.Head header={header} className="hidden md:table-cell">
          Criado há
        </Table.Head>
      );
    },
    cell: ({ cell, row }) => {
      return (
        <Table.Cell
          cell={cell}
          className="hidden md:table-cell"
        >
          {row.getValue('createdAt')}
        </Table.Cell>
      );
    },
  },
  {
    accessorKey: 'actions',
    header: ({ header, }) => {
      return (
        <Table.Head header={header} className="hidden md:table-cell" />
      );
    },
    cell: ({ cell }) => {
      return (
        <Table.Cell cell={cell}>
          <Table.Actions>
            <DropdownMenu >
              <DropdownMenuTrigger asChild >
                <Button
                  aria-haspopup="true"
                  size="icon"
                  variant="ghost"
                >
                  <MoreHorizontal className="h-4 w-4" />
                  <span className="sr-only">Toggle menu</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem>Edit</DropdownMenuItem>
                <DropdownMenuItem>Delete</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </Table.Actions>
        </Table.Cell>

      );
    },
  },
]

export function Products() {
  return (
    <>
      <Page.Root>
        <Page.Header>
          <nav className="px-6">
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link to="/">Painel</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link to="/produtos">Produtos</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbPage>Todos Produtos</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </Page.Header>

        <Page.Content>
          <Card>
            <CardHeader>
              <CardTitle className="flex justify-between">
                Produtos
                <Button size="sm" className="h-8 gap-1">
                  <PlusCircle className="h-4 w-4" />
                  <span className="sr-only sm:not-sr-only sm:whitespace-nowrap">Adicionar Produto</span>
                </Button>

              </CardTitle>
              <CardDescription >
                Gerencie seus produtos e visualize seu desempenho de vendas
              </CardDescription>


            </CardHeader>
            <CardContent>
              <Table.Root>
                <Table.Content
                  data={data ?? []}
                  columns={columns}
                  emptyMessageComponent={() => (
                    <Table.EmptyMessage>Adicione um novo produto</Table.EmptyMessage>
                  )}
                />
              </Table.Root>
            </CardContent>
            <CardFooter>
              <div className="text-xs text-muted-foreground">
                Mostrando <strong>1-10</strong> de <strong>32</strong> produtos
              </div>
            </CardFooter>
          </Card>
        </Page.Content>
      </Page.Root >
    </>


  )
}
