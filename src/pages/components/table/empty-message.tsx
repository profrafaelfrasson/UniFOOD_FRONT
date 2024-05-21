import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';
import { useCtx } from './content';

interface Props extends ComponentProps<'td'> { }

export function EmptyMessage({ className, ...rest }: Props) {
  const { columnsLength } = useCtx();

  return (
    <td
      colSpan={columnsLength}
      className={twMerge(
        [
          'font-inter',
          'text-[0.875rem]',
          'font-normal',
          'leading-normal',
          'text-gray-400',
          'border-b',
          'border-b-gray-300',
          'px-[1rem]',
          'h-[3.125rem]',
        ],
        className
      )}
      {...rest}
    />
  );
}
