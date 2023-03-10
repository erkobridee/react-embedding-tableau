import * as React from 'react';

import cn from 'clsx';

const baseClassName = cn(
  'form-select appearance-none block bg-no-repeat bg-clip-padding transition-colors',
  'm-0 pl-3 pr-9 py-2',
  'rounded-md text-sm font-medium',
  'focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2',
  'disabled:opacity-50 disabled:pointer-events-none',
  'bg-transparent border border-slate-200 hover:bg-slate-100',
  'dark:border-slate-700 dark:text-slate-100',
  'dark:focus:ring-offset-slate-900 dark:focus:ring-slate-400',
  'dark:hover:bg-slate-800 dark:hover:text-slate-100 dark:hover:bg-slate-700'
);

type SelectProps = React.SelectHTMLAttributes<HTMLSelectElement>;

export const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, ...props }, ref) => (
    <select ref={ref} {...props} className={cn(baseClassName, className)} />
  )
);

Select.displayName = 'Select';

export default Select;
