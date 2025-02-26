import { Pizza, Trash2 } from 'lucide-react'
import { useState } from 'react'
import { Helmet } from 'react-helmet-async'
import { Link } from 'react-router-dom'

import hamburguer from '@/assets/hamburguer.png'
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from '@/components/ui/breadcrumb'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Toggle } from '@/components/ui/toggle'
import { Page } from '@/pages/components/page'

export function AddOrder() {
  const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(0)

  const handleToggle = (index: number) => {
    setSelectedCategoryIndex(index)
  }

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

        <Page.Content className="grid grid-cols-4">
          <div className="col-span-3 flex flex-col gap-10 border-r p-4">
            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Categoria</h3>
              <div className="flex gap-4 overflow-x-auto pb-2">
                {Array.from({ length: 9 }).map((_, index) => {
                  return (
                    <Toggle
                      key={index}
                      onPressedChange={() => handleToggle(index)}
                      asChild
                      pressed={index === selectedCategoryIndex}
                    >
                      <Card className="flex h-32 w-32 shrink-0 cursor-pointer items-center justify-center bg-card">
                        <CardContent className="flex flex-col items-center justify-center gap-1 p-3">
                          <Pizza
                            style={{
                              width: '30px',
                              height: '30px',
                            }}
                          />
                          <p className="w-20 truncate text-ellipsis text-center text-lg font-medium">
                            Pizza
                          </p>
                        </CardContent>
                      </Card>
                    </Toggle>
                  )
                })}
              </div>
            </div>

            <div className="space-y-3">
              <h3 className="text-2xl font-bold">Produto</h3>
              <div className="grid gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {Array.from({ length: 30 }).map((_, index) => {
                  return (
                    <Card
                      key={index}
                      className="flex h-52 w-full shrink-0 cursor-pointer items-center justify-center hover:bg-muted-foreground/10"
                    >
                      <CardContent className="flex flex-col items-center justify-center gap-2 p-4">
                        <img
                          src={hamburguer}
                          width={97}
                          height={84}
                          alt="Image product"
                        />
                        <div className="flex flex-col items-center justify-center">
                          <p className="w-44 truncate text-ellipsis text-center text-2xl font-bold">
                            Hambúrguer
                          </p>
                          <p className="text-center text-base font-medium text-muted-foreground">
                            R$ 2,30
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="col-span-1 space-y-3 p-3">
            <h3 className="text-2xl font-bold">Pedido</h3>
            <div className="flex h-[calc(100vh-12rem)] w-full flex-col rounded-lg border bg-card p-6 shadow-sm">
              <div className="flex h-[calc(100vh-30rem)] min-h-0 flex-col space-y-4 overflow-y-auto pr-2">
                {Array.from({ length: 10 }).map((_, index) => (
                  <Card
                    key={index}
                    className="flex h-auto w-full cursor-pointer items-center p-3"
                  >
                    <CardContent className="flex w-full flex-wrap items-center gap-4 p-0">
                      <div className="flex-shrink-0">
                        <img
                          src={hamburguer}
                          width={97}
                          height={84}
                          alt="Image product"
                        />
                      </div>

                      <div className="flex h-full w-full min-w-0 flex-1 flex-col justify-between gap-3">
                        <div className="flex w-full items-center justify-between gap-1">
                          <h3 className="flex-grow truncate text-ellipsis text-base font-medium">
                            Hambúrguer de Peito de Peru
                          </h3>
                          <Button variant="ghost" size="icon">
                            <Trash2 className="h-4 w-4 text-destructive" />
                          </Button>
                        </div>

                        <div className="flex w-full items-center justify-between">
                          <span className="flex-shrink-0 text-sm text-muted-foreground">
                            R$ 2,30
                          </span>

                          <div className="flex items-center gap-2">
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8"
                            >
                              -
                            </Button>
                            <span className="w-4 text-center">10</span>
                            <Button
                              variant="outline"
                              size="sm"
                              className="h-8 w-8"
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-auto w-full space-y-4 pt-4 text-sm">
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span>Subtotal:</span>
                    <span>R$ 8,20</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxas:</span>
                    <span>R$ 0,82</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Descontos:</span>
                    <span>R$ 1,40</span>
                  </div>
                  <div className="flex justify-between font-semibold">
                    <span>Total</span>
                    <span>R$ 7,42</span>
                  </div>
                </div>

                <Button className="mt-4 w-full">Finalizar compra</Button>
              </div>
            </div>
          </div>
        </Page.Content>
      </Page.Root>
    </>
  )
}
