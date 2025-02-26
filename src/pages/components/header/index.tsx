import { PanelLeft } from 'lucide-react'

import { ThemeToggle } from '@/components/theme/theme-toggle'
import { Button } from '@/components/ui/button'
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet'
import { MENU } from '@/pages/shared/menu'

import { AccountMenu } from '../account-menu'
import { NavLink } from '../aside/nav-link'

export function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-muted/40 sm:px-6">
      <Sheet>
        <SheetTrigger asChild>
          <Button size="icon" variant="outline" className="sm:hidden">
            <PanelLeft className="h-5 w-5" />
            <span className="sr-only">Toggle Menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="left" className="sm:max-w-xs">
          <nav className="grid gap-6 text-lg font-medium">
            {MENU.map((item) => {
              const { href, icon: Icon, name } = item
              return (
                <NavLink to={href} key={href}>
                  <Icon className="h-5 w-5 transition-all group-hover:scale-110" />
                  <span>{name}</span>
                </NavLink>
              )
            })}
          </nav>
        </SheetContent>
      </Sheet>

      <div className="ml-auto flex gap-3 py-3">
        <ThemeToggle />

        <AccountMenu />
      </div>
    </header>
  )
}
