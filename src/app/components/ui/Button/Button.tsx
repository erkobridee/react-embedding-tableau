import * as React from 'react';

import cn from 'clsx';

const baseButtonClassName = cn(
  'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors',
  'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
  'disabled:opacity-50 disabled:pointer-events-none',
  'data-[state=open]:bg-slate-100 dark:data-[state=open]:bg-slate-800',
  'bg-transparent border border-slate-200 hover:bg-slate-100',
  'dark:border-slate-700 dark:text-slate-100',
  'dark:focus:ring-offset-slate-900 dark:focus:ring-slate-400',
  'dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:hover:bg-slate-700',
  'py-2 px-4'
);

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, ...props }, ref) => (
    <button
      ref={ref}
      className={cn(baseButtonClassName, className)}
      {...props}
    />
  )
);

Button.displayName = 'Button';

export default {};
