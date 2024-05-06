import { CopyPlus, Home, Pizza, UtensilsCrossed } from 'lucide-react'

import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Separator } from '@/components/ui/separator'

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
          {/* <AccountMenu /> */}
        </div>
      </div>
    </div>
  )
}
