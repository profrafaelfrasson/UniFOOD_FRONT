import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/404'
import { Dashboard } from './pages/app/dashboard'
import { Orders } from './pages/app/orders'
import { AddOrder } from './pages/app/orders/add-order'
import { Products } from './pages/app/products'
import { AddProduct } from './pages/app/products/add-product'
import Cart from './pages/app/products/checkout'
import { Login } from './pages/auth/login'
import { Register } from './pages/auth/register'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/produtos', element: <Products /> },
      { path: '/produtos/adicionar-produto', element: <AddProduct /> },
      { path: '/pedidos', element: <Orders /> },
      { path: '/pedidos/adicionar-pedido', element: <AddOrder /> },
      { path: '/pedidos/adicionar-pedido/cart', element: <Cart /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [
      { path: '/login', element: <Login /> },
      { path: '/register', element: <Register /> },
    ],
  },
])
