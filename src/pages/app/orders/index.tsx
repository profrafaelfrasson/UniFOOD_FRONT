import { ArrowRight, Search, X } from 'lucide-react'
import { Helmet } from 'react-helmet-async'

import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from '@/components/ui/table'
import { Pagination } from '@/pages/components/pagination'

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

          <div className="rounded-md border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="w-[64px]"></TableHead>
                  <TableHead className="w-[140px]">Identificador</TableHead>
                  <TableHead className="w-[180px]">Realizado há</TableHead>
                  <TableHead className="w-[140px]">Status</TableHead>
                  <TableHead>Cliente</TableHead>
                  <TableHead className="w-[140px]">Total do pedido</TableHead>
                  <TableHead className="w-[164px]"></TableHead>
                  <TableHead className="w-[132px]"></TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {Array.from({ length: 9 }).map((_, i) => {
                  return (
                    <TableRow key={i}>
                      <TableCell>
                        <Dialog>
                          <DialogTrigger asChild>
                            <Button variant="outline" size="xs">
                              <Search className="h-3 w-3" />
                              <span className="sr-only">
                                Detalhes do pedido
                              </span>
                            </Button>
                          </DialogTrigger>

                          <DialogContent>
                            <DialogHeader>
                              <DialogTitle>Pedido: 432423432</DialogTitle>
                              <DialogDescription>
                                Detalhes do pedido
                              </DialogDescription>
                            </DialogHeader>

                            <div className="space-y-6">
                              <Table>
                                <TableBody>
                                  <TableRow>
                                    <TableCell className="text-muted-foreground">
                                      Status
                                    </TableCell>
                                    <TableCell className="flex justify-end">
                                      <div className="flex items-center gap-2">
                                        <span className="h-2 w-2 rounded-full bg-slate-400" />
                                        <span className="font-medium text-muted-foreground">
                                          Pendente
                                        </span>
                                      </div>
                                    </TableCell>
                                  </TableRow>

                                  <TableRow>
                                    <TableCell className="text-muted-foreground">
                                      Cliente
                                    </TableCell>
                                    <TableCell className="flex justify-end">
                                      Vinicius Martins
                                    </TableCell>
                                  </TableRow>

                                  <TableRow>
                                    <TableCell className="text-muted-foreground">
                                      Telefone
                                    </TableCell>
                                    <TableCell className="flex justify-end">
                                      (48) 996751735
                                    </TableCell>
                                  </TableRow>

                                  <TableRow>
                                    <TableCell className="text-muted-foreground">
                                      E-mail
                                    </TableCell>
                                    <TableCell className="flex justify-end">
                                      vinimribeiro2004@gmail.com
                                    </TableCell>
                                  </TableRow>

                                  <TableRow>
                                    <TableCell className="text-muted-foreground">
                                      Realizado há
                                    </TableCell>
                                    <TableCell className="flex justify-end">
                                      há 3 minutos
                                    </TableCell>
                                  </TableRow>
                                </TableBody>
                              </Table>

                              <Table>
                                <TableHeader>
                                  <TableRow>
                                    <TableHead>Produto</TableHead>
                                    <TableHead className="text-right">
                                      Qnt.
                                    </TableHead>
                                    <TableHead className="text-right">
                                      Preço
                                    </TableHead>
                                    <TableHead className="text-right">
                                      SubTotal
                                    </TableHead>
                                  </TableRow>
                                </TableHeader>
                                <TableBody>
                                  <TableCell>Pizza Pepperoni Familia</TableCell>
                                  <TableCell className="text-right">
                                    2
                                  </TableCell>
                                  <TableCell className="text-right">
                                    R$ 69,90
                                  </TableCell>
                                  <TableCell className="text-right">
                                    R$ 139,80
                                  </TableCell>
                                </TableBody>
                                <TableBody>
                                  <TableCell>Pizza Pepperoni Familia</TableCell>
                                  <TableCell className="text-right">
                                    2
                                  </TableCell>
                                  <TableCell className="text-right">
                                    R$ 59,90
                                  </TableCell>
                                  <TableCell className="text-right">
                                    R$ 119,80
                                  </TableCell>
                                </TableBody>
                                <TableFooter>
                                  <TableRow>
                                    <TableCell colSpan={3}>
                                      Total do pedido
                                    </TableCell>
                                    <TableCell className="text-right font-medium">
                                      R$ 259,60
                                    </TableCell>
                                  </TableRow>
                                </TableFooter>
                              </Table>
                            </div>
                          </DialogContent>
                        </Dialog>
                      </TableCell>
                      <TableCell className="font-mono text-sm font-medium">
                        83498539485345
                      </TableCell>
                      <TableCell className="text-muted-foreground">
                        há 15 minutos
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="h-2 w-2 rounded-full bg-slate-400" />
                          <span className="font-medium text-muted-foreground">
                            Pendente
                          </span>
                        </div>
                      </TableCell>
                      <TableCell className="font-medium">Vinicius</TableCell>
                      <TableCell className="font-medium">R$ 149,90</TableCell>
                      <TableCell>
                        <Button variant="outline" size="xs">
                          <ArrowRight className="mr-2 h-3 w-3" />
                          Aprovar
                        </Button>
                      </TableCell>
                      <TableCell>
                        <Button variant="ghost" size="xs">
                          <X className="mr-2 h-3 w-3" />
                          Cancelar
                        </Button>
                      </TableCell>
                    </TableRow>
                  )
                })}
              </TableBody>
            </Table>
          </div>
          <Pagination pageIndex={0} totalCount={105} perPage={10} />
        </div>
      </div>
    </>
  )
}
