import { Home, LineChart, Package, ShoppingCart, Users2 } from 'lucide-react';

export const MENU = [
  {
    icon: Home,
    href: '/',
    name: 'Painel',
  },
  {
    icon: ShoppingCart,
    href: '/pedidos',
    name: 'Pedidos',
  },
  {
    icon: Package,
    href: '/produtos',
    name: 'Produtos',
  },
  {
    icon: Users2,
    href: '/fornecedores',
    name: 'Fornecedores',
  },
  {
    icon: LineChart,
    href: '/analytics',
    name: 'Analytics',
  },
];
