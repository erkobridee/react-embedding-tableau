import * as React from 'react';

import cn from 'clsx';

const inputFieldClassName = cn(
  'transition-colors',
  'm-0 p-2',
  'rounded-md text-sm font-medium',
  'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
  'disabled:opacity-50 disabled:pointer-events-none',
  'bg-transparent border border-slate-200 hover:bg-slate-100',
  'dark:border-slate-700 dark:text-slate-100',
  'dark:focus:ring-offset-slate-900 dark:focus:ring-slate-400',
  'dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:hover:bg-slate-700'
);

type InputProps = React.InputHTMLAttributes<HTMLInputElement>;

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, ...props }, ref) => (
    <input
      ref={ref}
      {...props}
      className={cn(inputFieldClassName, className)}
    />
  )
);

Input.displayName = 'Input';

export default Input;
