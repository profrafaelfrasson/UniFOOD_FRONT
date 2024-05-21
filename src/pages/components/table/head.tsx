import type { Header } from '@tanstack/react-table';
import type { ComponentProps } from 'react';

interface Props<T> extends ComponentProps<'th'> {
  header: Header<T, unknown>;
}

export function Head<T>({ className, header, style, ...rest }: Props<T>) {
  return (
    <th
      {...rest}
    />
  );
}
