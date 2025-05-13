import { type PropsWithChildren } from 'react'
import { Helmet, HelmetProvider } from 'react-helmet-async'

import { ThemeProvider } from '@/components/theme/theme-provider'
import { Toaster } from '@/components/ui/toaster'
import { SessionProvider } from '@/contexts/session'

import { ReactQueryProvider } from './react-query'

export function Providers({ children }: PropsWithChildren) {
  return (
    <HelmetProvider>
      <ReactQueryProvider>
        <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
          <Helmet titleTemplate="%s | unifood" />
          <SessionProvider>
            {children}
            <Toaster />
          </SessionProvider>
        </ThemeProvider>
      </ReactQueryProvider>
    </HelmetProvider>
  )
}
