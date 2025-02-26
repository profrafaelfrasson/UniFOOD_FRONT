import { Helmet } from 'react-helmet-async'
import { Link, NavLink } from 'react-router-dom'

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Page } from '@/pages/components/page'

export function Orders() {
  return (
    <>
      <Helmet title="Pedidos" />
      <Page.Root>
        <Page.Header>
          <nav className="px-6">
            <Breadcrumb className="hidden md:flex">
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink asChild>
                    <Link to="#">Dashboard</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </Page.Header>

        <Page.Content>
          <Card>
            <CardHeader className="pb-3">
              <CardTitle>Pedidos</CardTitle>
            </CardHeader>
            <CardFooter>
              <NavLink to="/pedidos/adicionar-pedido">
                <Button>Create New Order</Button>
              </NavLink>
            </CardFooter>
          </Card>
        </Page.Content>
      </Page.Root>
    </>
  )
}
