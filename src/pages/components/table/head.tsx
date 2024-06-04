import type { Header } from '@tanstack/react-table';
import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props<T> extends ComponentProps<'th'> {
  header: Header<T, unknown>;
}

export function Head<T>({ className, header, style, ...rest }: Props<T>) {
  return (
    <th
      className={twMerge(
        "h-12 px-4 text-left align-middle font-medium text-muted-foreground [&:has([role=checkbox])]:pr-0",
        className
      )}
      style={{
        ...style,
        width:
          header.getSize() === Number.MAX_SAFE_INTEGER
            ? 'auto'
            : header.getSize(),
      }}
      {...rest}
    />
  );
}
