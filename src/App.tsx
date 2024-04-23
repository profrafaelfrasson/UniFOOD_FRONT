import './global.css'

import { Helmet, HelmetProvider } from 'react-helmet-async'
import { RouterProvider } from 'react-router-dom'

import { router } from './route'

export function App() {
  return (
    <HelmetProvider>
      <Helmet titleTemplate="%s | Unifood" />
      <RouterProvider router={router} />
    </HelmetProvider>
  )
}
