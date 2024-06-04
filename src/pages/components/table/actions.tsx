import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentProps<'div'> { }

export function Actions({ className, ...rest }: Props) {
  return (
    <div
      className={twMerge(
        [
          'flex',
          'items-center',
          'w-full',
          'justify-center',
        ],
        className
      )}
      {...rest}
    />
  );
}
