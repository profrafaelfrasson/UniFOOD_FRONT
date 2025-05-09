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
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Page } from '@/pages/components/page'
import { formatPrice } from '@/utils/formatPrice'

export default function Cart() {
  const cart = [
    {
      name: 'Coca-Cola 350ml',
      price: 10,
      cartQuantity: 1,
      totalPrice: 10,
    },
    {
      name: 'Pastel de carne',
      price: 10,
      cartQuantity: 2,
      totalPrice: 20,
    },
  ]

  return (
    <>
      <Helmet title="Adicionar Produto" />

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
                  <BreadcrumbLink>
                    <Link to="/produtos">Adicionar Produto</Link>
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink>
                    <BreadcrumbPage>Carrinho</BreadcrumbPage>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </Page.Header>

        <Page.Content className="space-y-10">
          <Table className="border-spacing-y-4 border bg-muted-foreground/10">
            <TableHeader>
              <TableRow className="shadow-xs">
                <TableHead className="p-6 text-foreground">Produto</TableHead>
                <TableHead className="text-foreground">Preço</TableHead>
                <TableHead className="text-foreground">Quantidade</TableHead>
                <TableHead className="text-center text-foreground">
                  Subtotal
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {cart.map((product, index) => (
                <TableRow key={index} className="shadow-xs">
                  <TableCell className="group relative flex items-center gap-4 p-6">
                    <p className="text-sm">{product.name}</p>
                  </TableCell>
                  <TableCell className="py-6 text-sm text-muted-foreground">
                    {formatPrice(product.price)}
                  </TableCell>
                  <TableCell className="py-6">
                    <Input
                      type="number"
                      className="w-20"
                      min={1}
                      value={product.cartQuantity ?? 0}
                    />
                  </TableCell>
                  <TableCell className="p-6 text-center text-sm text-muted-foreground">
                    {formatPrice(product.totalPrice)}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>

          <div className="flex justify-between">
            <Button size="lg" variant="outline">
              Voltar para o painel
            </Button>

            <Card className="w-96 rounded-none">
              <CardHeader>
                <CardTitle className="text-lg font-medium">
                  Total do Carrinho
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="flex items-center justify-between text-base font-medium">
                  <span className="text-base">Subtotal:</span>

                  <span className="text-sm text-muted-foreground">
                    {formatPrice(20)}
                  </span>
                </div>

                <Separator />
                <div className="flex items-center justify-between text-base font-medium">
                  <span className="text-base">Descontos:</span>
                  <span className="text-sm text-muted-foreground">
                    {formatPrice(1.4)}
                  </span>
                </div>

                <Separator />

                <div className="flex items-center justify-between text-base font-medium">
                  <span className="text-base">Total:</span>

                  <span className="text-sm text-muted-foreground">
                    {formatPrice(28.6)}
                  </span>
                </div>
              </CardContent>
              <CardFooter>
                <Button>Processar o pagamento</Button>
              </CardFooter>
            </Card>
          </div>
        </Page.Content>
      </Page.Root>
    </>
  )
}
