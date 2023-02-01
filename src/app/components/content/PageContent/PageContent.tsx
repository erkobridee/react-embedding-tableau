import * as React from 'react';

import cn from 'clsx';

import { Breadcrumbs, IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

import { Container, ContainerProps } from './container';

export interface PageContentProps extends ContainerProps {
  className?: string;
  breadcrumbs?: IBreadcrumbItem[];
}

/**
 * Define a page content which contains breadcrumbs on the top followed by the page content
 */
export const PageContent: React.FunctionComponent<PageContentProps> = ({
  className,
  breadcrumbs,
  ...props
}) => (
  <div className={cn('flex flex-col space-y-4 xl:space-y-6', className)}>
    <Breadcrumbs items={breadcrumbs} />

    <Container {...props} />
  </div>
);

export default PageContent;
