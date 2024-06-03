import { Home, LineChart, Package, ShoppingCart, Users2 } from 'lucide-react';

export const MENU = [
  {
    icon: Home,
    href: '/',
    name: 'Dashboard',
  },
  {
    icon: ShoppingCart,
    href: '/pedidos',
    name: 'Orders',
  },
  {
    icon: Package,
    href: '/produtos',
    name: 'Products',
  },
  {
    icon: Users2,
    href: '/customers',
    name: 'Customers',
  },
  {
    icon: LineChart,
    href: '/analytics',
    name: 'Analytics',
  },
];
