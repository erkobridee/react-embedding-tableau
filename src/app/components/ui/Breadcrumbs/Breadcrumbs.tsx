import * as React from 'react';

import cn from 'clsx';

import { ReactComponent as HomeIcon } from 'assets/icons/home.svg';

import { BreadcrumbItem, IBreadcrumbItem } from './BreadcrumbItem';
import { useBreadcrumbs } from './BreadcrumbsContext';

interface BreadcrumbsProps {
  className?: string;
  items?: IBreadcrumbItem[];
}

export const Breadcrumbs: React.FunctionComponent<BreadcrumbsProps> = ({
  className,
  items = [],
}) => {
  items = useBreadcrumbs(items);

  const breadcrumbsLength = items.length;
  const lastIndex = breadcrumbsLength - 1;

  return (
    <nav className={cn('w-full', className)}>
      <ol className="list-reset flex">
        <BreadcrumbItem
          {...{
            to: '/',
            label: 'Home',
            icon: <HomeIcon />,
            lastone: breadcrumbsLength === 0,
          }}
        />

        {items.map((item, index) => (
          <BreadcrumbItem key={index} {...item} lastone={lastIndex === index} />
        ))}
      </ol>
    </nav>
  );
};

export default Breadcrumbs;
