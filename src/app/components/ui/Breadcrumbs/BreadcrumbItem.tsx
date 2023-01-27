import * as React from 'react';
import cn from 'clsx';

import { ReactComponent as ArrowRightIcon } from 'assets/icons/arrow-right.svg';

import { BreadcrumbItemContainer } from './BreadcrumbItemContainer';

export interface IBreadcrumbItem {
  icon?: React.ReactNode;
  to?: string;
  label: React.ReactNode;
}

interface BreadcrumbItemProps extends IBreadcrumbItem {
  className?: string;
  lastone?: boolean;
}

export const BreadcrumbItem: React.FunctionComponent<BreadcrumbItemProps> = ({
  className,
  icon,
  lastone = false,
  to,
  label,
}) => {
  to = lastone ? undefined : to;

  return (
    <BreadcrumbItemContainer {...{ className, to }}>
      {icon}

      <span
        className={cn({
          'text-secondary font-bold': lastone,
          'hover:underline': !lastone,
        })}
      >
        {label}
      </span>

      {!lastone ? <ArrowRightIcon /> : null}
    </BreadcrumbItemContainer>
  );
};

export default BreadcrumbItem;
