import type { ComponentProps } from 'react'
import { twMerge } from 'tailwind-merge'

interface Props extends ComponentProps<'div'> { }

export function Root({ className, ...rest }: Props) {
  return (
    <div
      className={twMerge(
        ['rounded-md', 'border'],
        className,
      )}
      {...rest}
    />
  )
}
