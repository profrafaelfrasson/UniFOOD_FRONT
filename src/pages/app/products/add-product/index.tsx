
import {
  ChevronLeft,
  MoreHorizontal,
  PlusCircle,
  Upload,
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
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import { Textarea } from "@/components/ui/textarea"

import { Link } from "react-router-dom"
import { Page } from "@/pages/components/page"
import { Dialog, DialogContent, DialogTitle, DialogHeader, DialogFooter } from "@/components/ui/dialog"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { Helmet } from "react-helmet-async"


export function AddProduct() {
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
                    <BreadcrumbPage>Adicionar Produto</BreadcrumbPage>
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </nav>
        </Page.Header>

        <Page.Content>
          <main className="grid flex-1 items-start gap-4 p-4 sm:px-6 sm:py-0 md:gap-8">
            <div className="mx-auto grid max-w-[65rem] flex-1 auto-rows-max gap-4">
              <div className="flex items-center gap-4">
                <Link to="/produtos">
                  <Button variant="outline" size="icon" className="h-7 w-7">
                    <ChevronLeft className="h-4 w-4" />
                    <span className="sr-only">Voltar</span>
                  </Button>
                </Link>

                <h1 className="flex-1 shrink-0 whitespace-nowrap text-xl font-semibold tracking-tight sm:grow-0">
                  Adicionar Produto
                </h1>
                <div className="hidden items-center gap-2 md:ml-auto md:flex">
                  <Button variant="outline" size="sm">
                    Descartar
                  </Button>
                  <Button size="sm">Salvar Produto</Button>
                </div>
              </div>
              <div className="grid gap-4 md:grid-cols-[1fr_250px] lg:grid-cols-3 lg:gap-8">
                <div className="grid auto-rows-max items-start gap-4 lg:col-span-2 lg:gap-8">
                  <Card x-chunk="dashboard-07-chunk-0">
                    <CardHeader>
                      <CardTitle>Detalhes do Protudo</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-6">
                        <div className="grid gap-3">
                          <Label htmlFor="name">Nome</Label>
                          <Input
                            id="name"
                            type="text"
                            className="w-full"
                            placeholder="Digite o nome do produto"

                          />
                        </div>
                        <div className="grid gap-3">
                          <Label htmlFor="description">Descrição</Label>
                          <Textarea
                            id="description"
                            className="min-h-32"
                            placeholder="Digite a descrição do produto"
                          />
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card>
                    <CardHeader>
                      <CardTitle>Estoque</CardTitle>
                    </CardHeader>

                    <CardContent>
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead>Quantidade</TableHead>
                            <TableHead>Preço</TableHead>
                            <TableHead>Kilos / Quantidade</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          <TableRow>
                            <TableCell>
                              <Label htmlFor="stock-1" className="sr-only">
                                Quantidade
                              </Label>
                              <Input
                                id="stock-1"
                                type="number"
                                defaultValue="100"
                              />
                            </TableCell>
                            <TableCell>
                              <Label htmlFor="price-1" className="sr-only">
                                Preço
                              </Label>
                              <Input
                                id="price-1"
                                type="number"
                                defaultValue="99.99"
                              />
                            </TableCell>
                            <TableCell>
                              <Label htmlFor="price-1" className="sr-only">
                                KG/Quantidade
                              </Label>
                              <ToggleGroup
                                type="single"
                                defaultValue="kg"
                                variant="outline"
                              >
                                <ToggleGroupItem value="kg">KG</ToggleGroupItem>
                                <ToggleGroupItem value="qnt">QTD</ToggleGroupItem>
                              </ToggleGroup>
                            </TableCell>
                          </TableRow>
                        </TableBody>
                      </Table>
                    </CardContent>
                  </Card>

                </div>
                <div className="grid auto-rows-max items-start gap-4 lg:gap-8">
                  <Card className="overflow-hidden" x-chunk="dashboard-07-chunk-4">
                    <CardHeader>
                      <CardTitle>Imagem do Produto</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-2">
                        <img
                          alt="Product image"
                          className="aspect-square w-full rounded-md object-cover"
                          height="300"
                          src="/pastel.jpeg"
                          width="300"
                        />
                        <div className="grid grid-cols-3 gap-2">
                          <button>
                            <img
                              alt="Product image"
                              className="aspect-square w-full rounded-md object-cover"
                              height="84"
                              src="/pastel.jpeg"
                              width="84"
                            />
                          </button>
                          <button>
                            <img
                              alt="Product image"
                              className="aspect-square w-full rounded-md object-cover"
                              height="84"
                              src="/pastel.jpeg"
                              width="84"
                            />
                          </button>
                          <button className="flex aspect-square w-full items-center justify-center rounded-md border border-dashed">
                            <Upload className="h-4 w-4 text-muted-foreground" />
                            <span className="sr-only">Upload</span>
                          </button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card x-chunk="dashboard-07-chunk-2">
                    <CardHeader>
                      <CardTitle>Categoria do Produto </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <div className="grid gap-3">
                        <Label htmlFor="category">Categoria</Label>
                        <Select>
                          <SelectTrigger
                            id="category"
                            aria-label="Selecione"
                          >
                            <SelectValue placeholder="Selecione a categoria" />
                          </SelectTrigger>
                          <SelectContent>
                            <div className="w-full flex gap-2">
                              <SelectItem value="clothing" className="w-[85%]">
                                TESTE2222
                              </SelectItem>
                              <DropdownMenu>
                                <DropdownMenuTrigger className="p-2 rounded-sm hover:bg-accent flex justify-center items-center">
                                  <MoreHorizontal className="h-4 w-4" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                  <DropdownMenuItem>Editar</DropdownMenuItem>
                                  <DropdownMenuItem>Excluir</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                            <div className="w-full flex gap-2">
                              <SelectItem value="electronics" className="w-[85%]">
                                Electronics
                              </SelectItem>
                              <DropdownMenu>
                                <DropdownMenuTrigger className="p-2 rounded-sm hover:bg-accent flex justify-center items-center">
                                  <MoreHorizontal className="h-4 w-4" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                  <DropdownMenuItem>Editar</DropdownMenuItem>
                                  <DropdownMenuItem>Excluir</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                            <div className="w-full flex gap-2">
                              <SelectItem value="accessories" className="w-[85%]">
                                Accessories
                              </SelectItem>
                              <DropdownMenu>
                                <DropdownMenuTrigger className="p-2 rounded-sm hover:bg-accent flex justify-center items-center">
                                  <MoreHorizontal className="h-4 w-4" />
                                </DropdownMenuTrigger>
                                <DropdownMenuContent>
                                  <DropdownMenuItem>Editar</DropdownMenuItem>
                                  <DropdownMenuItem>Excluir</DropdownMenuItem>
                                </DropdownMenuContent>
                              </DropdownMenu>
                            </div>
                          </SelectContent>
                        </Select>
                      </div>
                    </CardContent>
                    <CardFooter className="justify-center border-t p-2">
                      <Button size="sm" variant="ghost" className="gap-1">
                        <PlusCircle className="h-3.5 w-3.5" />
                        Adicionar Categoria
                      </Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>
              <div className="flex items-center justify-center gap-2 md:hidden">
                <Button variant="outline" size="sm">
                  Descartar
                </Button>
                <Button size="sm">Salvar Produto</Button>
              </div>
            </div>
          </main >
        </Page.Content>
      </Page.Root>

      <Dialog open={false} >
        <DialogContent className="sm:gap-8">
          <DialogHeader>
            <DialogTitle>Deseja Remover a Categoria?</DialogTitle>
          </DialogHeader>
          <DialogFooter className="justify-between gap-2 sm:gap-3" >
            <Button type="submit" className="w-full">Confirmar</Button>

            <Button type="submit" variant="secondary" className="w-full"  >Cancelar</Button>
          </DialogFooter>
        </DialogContent >
      </Dialog >

      <Dialog open={false}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Adicionar Categoria / Editar Produto</DialogTitle>
          </DialogHeader>
          <div className="grid gap-3">
            <Label htmlFor="name">Nome</Label>
            <Input
              id="name"
              type="text"
              className="w-full"
              placeholder="Digite o nome da categoria"
              defaultValue="Nome categoria"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Confirmar</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </>
  )
}
