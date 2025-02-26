import './global.css'

import { RouterProvider } from 'react-router-dom'

import { Providers } from './providers'
import { router } from './route'

export function App() {
  return (
    <Providers>
      <RouterProvider router={router} />
    </Providers>
  )
}
