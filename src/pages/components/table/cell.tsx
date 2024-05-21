import type { Cell } from '@tanstack/react-table';
import type { ComponentProps } from 'react';
import Skeleton from 'react-loading-skeleton';

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
    <td>
      {isLoading ? <Skeleton /> : rest.children}
    </td>
  );
}
