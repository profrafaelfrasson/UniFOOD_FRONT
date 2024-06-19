import { createBrowserRouter } from 'react-router-dom'

import { AppLayout } from './pages/_layouts/app'
import { AuthLayout } from './pages/_layouts/auth'
import { NotFound } from './pages/404'
import { Orders } from './pages/app/orders'
import { Register } from './pages/app/register'
import { Login } from './pages/auth/sign.in'
import { Dashboard } from './pages/app/dashboard'
import { Supplier } from './pages/app/supplier'
import { Products } from './pages/app/products'
import { AddProduct } from './pages/app/products/add-product'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <AppLayout />,
    errorElement: <NotFound />,
    children: [
      { path: '/', element: <Dashboard /> },
      { path: '/produtos', element: <Products /> },

      { path: '/produtos/adicionar-produto', element: <AddProduct /> },

      { path: '/fornecedores', element: <Supplier /> },


      { path: '/pedidos', element: <Orders /> },

      { path: '/cadastros', element: <Register /> },
    ],
  },
  {
    path: '/',
    element: <AuthLayout />,
    children: [{ path: '/login', element: <Login /> }],
  },
])
