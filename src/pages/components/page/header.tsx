import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentProps<'header'> { }

export function Header({ className, ...rest }: Props) {
  return (
    <header
      className={twMerge(
        [
          'flex',
          'flex-col',
          'sm:gap-4',
          'sm:pb-4',
          'sm:pl-14',
          'px-6',
        ],
        className
      )}
      {...rest}
    />
  );
} 