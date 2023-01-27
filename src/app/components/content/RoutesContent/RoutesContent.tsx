import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

//---===---//

import * as React from 'react';
import cn from 'clsx';

import { Routes, Route } from 'react-router-dom';

import { PageContent } from 'app/components/content/PageContent';

import { TPartialBasePageConfig, RoutePageConfig } from './definitions';

import { IndexRoute } from './IndexRoute';
import { NotFoundRoute } from './NotFoundRoute';

//----------------------------------------------------------------------------//

interface RoutesContentProps {
  defaultBreadcrumb: IBreadcrumbItem;
  indexPage?: TPartialBasePageConfig;
  notFoundPage?: TPartialBasePageConfig;
  routes?: RoutePageConfig[];
  routeContainerClass?: string;
}

export const RoutesContent: React.FunctionComponent<RoutesContentProps> = ({
  defaultBreadcrumb,
  indexPage,
  notFoundPage,
  routes = [],
  routeContainerClass = 'p-3 lg:p-6',
}) => (
  <Routes>
    {IndexRoute({ defaultBreadcrumb, page: indexPage, routes })}

    {routes.map(
      (
        { path, label, PageComponent, className, containerClassname },
        index
      ) => (
        <Route
          key={index}
          {...{
            path,
            element: (
              <PageContent
                lazy
                containerClassName={cn(routeContainerClass, containerClassname)}
                breadcrumbs={[defaultBreadcrumb, { label }]}
              >
                <PageComponent className={className} />
              </PageContent>
            ),
          }}
        />
      )
    )}

    {NotFoundRoute({ defaultBreadcrumb, page: notFoundPage })}
  </Routes>
);

export default RoutesContent;
