import type { ComponentProps } from 'react';
import { twMerge } from 'tailwind-merge';

interface Props extends ComponentProps<'section'> { }

export function Content({ className, ...rest }: Props) {
  return <section className={twMerge(['flex-1', 'sm:py-4', 'p-4', 'sm:px-6', 'sm:pl-14'], className)} {...rest} />;
}