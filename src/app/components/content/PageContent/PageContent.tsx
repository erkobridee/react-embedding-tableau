import * as React from 'react';
import cn from 'clsx';

import { IBreadcrumbItem, Breadcrumbs } from 'app/components/ui/Breadcrumbs';

import { ContainerProps, Container } from './container';

export interface PageContentProps extends ContainerProps {
  className?: string;
  breadcrumbs?: IBreadcrumbItem[];
}

interface InnerPageContentProps extends PageContentProps {
  defaultBreadcrumb: IBreadcrumbItem;
}

/**
 * Define a page content which contains breadcrumbs on the top followed by the page content
 */
export const PageContent: React.FunctionComponent<InnerPageContentProps> = ({
  className,
  breadcrumbs,
  defaultBreadcrumb,

  ...props
}) => {
  breadcrumbs = breadcrumbs
    ? [defaultBreadcrumb, ...breadcrumbs]
    : [defaultBreadcrumb];

  return (
    <div className={cn('flex flex-col space-y-4 xl:space-y-6', className)}>
      <Breadcrumbs items={breadcrumbs} />

      <Container {...props} />
    </div>
  );
};

export default PageContent;
