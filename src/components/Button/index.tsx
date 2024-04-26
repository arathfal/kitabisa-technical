import { ButtonHTMLAttributes } from 'react'

import classNames from '@/lib/classNames'
import { CommonProps } from '@/types/common'

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> &
  CommonProps & {
    variant?: 'green' | 'red' | 'light'
  }

export default function Button({ className, disabled, children, ...props }: ButtonProps) {
  return (
    <button
      className={classNames(
        'h-10 w-auto rounded-md border border-slate-300 bg-white px-4 py-2 text-slate-950 transition-all hover:bg-slate-300',
        disabled && 'pointer-events-none bg-slate-500 text-white',
        className
      )}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  )
}
