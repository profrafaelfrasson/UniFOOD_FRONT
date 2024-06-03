import { Link, LinkProps, useLocation } from 'react-router-dom'

export type NavLinkProps = LinkProps

export function NavLink(props: NavLinkProps) {
  const { children } = props

  const { pathname } = useLocation()

  return (
    <Link
      data-current={pathname === props.to}
      className="group flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8 data-[current=true]:text-foreground data-[current=true]:bg-accent hover:bg-accent hover:transition-all "
      {...props}
    >
      {children}
    </Link>
  )
}
