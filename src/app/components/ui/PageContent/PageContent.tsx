import * as React from 'react';
import cn from 'clsx';

import { IBreadcrumbItem, Breadcrumbs } from 'app/components/ui/Breadcrumbs';

export interface PageContentProps {
  className?: string;
  breadcrumbs?: IBreadcrumbItem[];
  children: React.ReactNode;
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
  children,
}) => (
  <div className={cn('flex flex-col space-y-4 xl:space-y-6', className)}>
    <Breadcrumbs
      items={
        breadcrumbs ? [defaultBreadcrumb, ...breadcrumbs] : [defaultBreadcrumb]
      }
    />

    {children}
  </div>
);

export default PageContent;
