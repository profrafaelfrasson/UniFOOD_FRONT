import './global.css'

import { RouterProvider } from 'react-router-dom'

import { router } from './route'
import { Providers } from './providers'

export function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}
