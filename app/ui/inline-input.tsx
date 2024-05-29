import * as React from 'react'

import { cn } from '@/lib/utils'

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {}

const InlineInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          'flex max-w-48 rounded-md border border-transparent bg-transparent px-2 py-1 text-sm text-slate-700 dark:text-slate-300 ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground hover:border hover:border-input focus-visible:bg-background focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-gray-200 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:focus-visible:ring-gray-700',
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
InlineInput.displayName = 'InlineInput'

export { InlineInput }
