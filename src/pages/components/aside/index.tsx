
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { MENU } from '@/pages/shared/menu'
import { Package2, Settings } from 'lucide-react'
import { Link } from 'react-router-dom'
import { NavLink } from './nav-link'

export function Aside() {
  return (
    <aside className="fixed inset-y-0 left-0 z-50 hidden w-14 flex-col border-r bg-background sm:flex">
      <nav className="flex flex-col items-center gap-4 px-2 sm:py-5">
        <Link
          to="#"
          className="group flex h-9 w-9 shrink-0 items-center justify-center gap-2 rounded-full bg-primary text-lg font-semibold text-primary-foreground md:h-8 md:w-8 md:text-base"
        >
          <Package2 className="h-5 w-5 transition-all group-hover:scale-110" />
          <span className="sr-only">Acme Inc</span>
        </Link>

        {MENU.map((item) => {
          const { href, icon: Icon, name } = item

          return (
            <TooltipProvider key={href}>
              <Tooltip>
                <TooltipTrigger key={name} >
                  <NavLink to={href}>
                    <Icon className="h-5 w-5 transition-all group-hover:scale-110" />
                    <span className="sr-only">{name}</span>
                  </NavLink>
                </TooltipTrigger>
                <TooltipContent side="right">{name}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          )
        })}
      </nav>
      <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <Link
                to="#"
                className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
              >
                <Settings className="h-5 w-5" />
                <span className="sr-only">Settings</span>
              </Link>
            </TooltipTrigger>
            <TooltipContent side="right">Settings</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      </nav>
    </aside >

  )
}
