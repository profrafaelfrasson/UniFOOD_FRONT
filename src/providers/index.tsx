
import { type PropsWithChildren } from 'react';
import { ReactQueryProvider } from './react-query';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { ThemeProvider } from '@/components/theme/theme-provider';

export function Providers({ children }: PropsWithChildren) {
  return (
    <HelmetProvider>
      <ReactQueryProvider>
        <ThemeProvider storageKey="pizzashop-theme" defaultTheme="system">
          <Helmet titleTemplate="%s | unifood" />
          {children}
        </ThemeProvider>
      </ReactQueryProvider>
    </HelmetProvider>
  );
}
