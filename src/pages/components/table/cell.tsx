import type { Cell } from '@tanstack/react-table';
import type { ComponentProps } from 'react';
import Skeleton from 'react-loading-skeleton';
import { twMerge } from 'tailwind-merge';

interface Props<T> extends ComponentProps<'td'> {
  isLoading?: boolean;
  cell: Cell<T, unknown>;
}

export function Cell<T>({
  className,
  cell,
  style,
  isLoading,
  ...rest
}: Props<T>) {
  return (
    <td
      className={twMerge("p-4 align-middle [&:has([role=checkbox])]:pr-0", className)}

    >
      {isLoading ? <Skeleton /> : rest.children}
    </td>
  );
}
