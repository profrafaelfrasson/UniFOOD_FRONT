import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { children } = props

  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="group flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:bg-accent hover:text-foreground hover:transition-all data-[current=true]:bg-accent data-[current=true]:text-foreground md:h-8 md:w-8"
      {...props}
    >
      {children}
    </Link>
  )
}
