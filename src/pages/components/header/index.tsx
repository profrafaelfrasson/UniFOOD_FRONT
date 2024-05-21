import { DialogClose } from '@radix-ui/react-dialog'
import {
  Building,
  ChevronDown,
  CopyPlus,
  Home,
  LogOut,
  Pizza,
  UtensilsCrossed,
} from 'lucide-react'

import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '@/components/ui/dialog'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Textarea } from '@/components/ui/textarea'

import { NavLink } from './nav-link'

export function Header() {
  return (
    <div className="border-b">
      <div className="flex h-16 items-center gap-6 px-6">
        <Pizza className="h-6 w-6" />

        <Separator orientation="vertical" className="h-6" />

        <nav className="lg-space-x-6 flex items-center space-x-5">
          <NavLink to="/">
            <Home className="h-4 w-4" />
            Inicio
          </NavLink>

          <NavLink to="/pedidos">
            <UtensilsCrossed className="h-4 w-4" />
            Pedidos
          </NavLink>

          <NavLink to="/cadastros">
            <CopyPlus className="h-4 w-4" />
            Cadastro
          </NavLink>
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <ThemeToggle />
          <Dialog>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  className="flex select-none items-center gap-2"
                >
                  Restaurante
                  <ChevronDown />
                </Button>
              </DropdownMenuTrigger>

              <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                  <span>Vinicius</span>
                  <span className="text-sm  font-normal text-muted-foreground">
                    vini@email.com
                  </span>
                </DropdownMenuLabel>

                <DropdownMenuSeparator />

                <DialogTrigger asChild>
                  <DropdownMenuItem>
                    <Building className="mr-2 h-4 w-4" />
                    <span>Perfil da loja</span>
                  </DropdownMenuItem>
                </DialogTrigger>

                <DropdownMenuItem
                  asChild
                  className="text-rose-500 dark:text-rose-400"
                >
                  <button className="w-full">
                    <LogOut className="mr-2 h-4 w-4" />
                    <span>Sair</span>
                  </button>
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>

            <DialogContent>
              <DialogHeader>
                <DialogTitle>Perfil da loja</DialogTitle>
                <DialogDescription>
                  Atualize as informações do seu estabelecimento visíaveis ao
                  seu cliente
                </DialogDescription>
              </DialogHeader>

              <form>
                <div className="space-y-4 py-4">
                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right" htmlFor="name">
                      Nome
                    </Label>

                    <Input className="col-span-3" id="name" />
                  </div>

                  <div className="grid grid-cols-4 items-center gap-4">
                    <Label className="text-right" htmlFor="description">
                      Descrição
                    </Label>

                    <Textarea className="col-span-3" id="description" />
                  </div>
                </div>

                <DialogFooter>
                  <DialogClose asChild>
                    <Button variant="ghost" type="button">
                      Cancelar
                    </Button>
                  </DialogClose>

                  <Button type="submit" variant="success">
                    Salvar
                  </Button>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </div>
  )
}
