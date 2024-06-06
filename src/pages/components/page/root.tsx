import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentProps<'main'> { }

export function Root({ className, ...rest }: Props) {
  return (
    <main
      className={twMerge(
        [
          'flex',
          'min-h-[calc(100vh-64px)]',
          'w-full',
          'flex-col',
          'bg-muted/40',
        ],
        className
      )}
      {...rest}
    />
  );
}