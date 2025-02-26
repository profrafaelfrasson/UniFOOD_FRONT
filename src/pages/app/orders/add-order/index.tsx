import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Page } from '@/pages/components/page'

export function AddOrder() {
  return (
    <>
      <Helmet title="Pedidos" />
      <Page.Root>
        <Page.Header>
          <nav className="px-6">
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <Link to="/pedidos">Pedidos</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <BreadcrumbPage>Adicionar pedido</BreadcrumbPage>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </Page.Header>

        <Page.Content className="grid grid-cols-3">
          <div className="col-span-2 flex flex-col gap-10 border-r">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Categoria</h3>
              <div className="flex gap-4">
                <Card>
                  <CardHeader>
                    <CardTitle>Card Title</CardTitle>
                    <CardDescription>Card Description</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                  <CardFooter>
                    <p>Card Footer</p>
                  </CardFooter>
                </Card>
                <Card>
                  <CardContent>
                    <p>Card Content</p>
                  </CardContent>
                </Card>
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Produto</h3>
              <div>Produtos</div>
            </div>
          </div>
          <div className="col-span-1 space-y-3 p-3">
            <h3 className="text-2xl font-bold">Pedido</h3>
            <div>Produtos</div>
          </div>
        </Page.Content>
      </Page.Root>
    </>
  )
}
