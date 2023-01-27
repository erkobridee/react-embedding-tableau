import * as React from 'react';
import cn from 'clsx';
import { Link } from 'react-router-dom';

interface BreadcrumbItemContainerProps {
  className?: string;
  to?: string;
  children: React.ReactNode;
}

const defaultClassName = 'flex items-center';

export const BreadcrumbItemContainer: React.FunctionComponent<
  BreadcrumbItemContainerProps
> = ({ className, to, children }) => (
  <li>
    {to ? (
      <Link className={cn(defaultClassName, className)} to={to}>
        {children}
      </Link>
    ) : (
      <div className={cn(defaultClassName, className)}>{children}</div>
    )}
  </li>
);

export default BreadcrumbItemContainer;
