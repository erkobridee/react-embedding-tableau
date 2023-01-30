import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

//---===---//

import * as React from 'react';
import cn from 'clsx';

import { Routes, Route } from 'react-router-dom';

import { PageContent } from 'app/components/content/PageContent';
import { Container } from 'app/components/content/PageContent/container';

import { BreadcrumbsProvider } from 'app/components/ui/Breadcrumbs';

import { TPartialBasePageConfig, RoutePageConfig } from './definitions';

import { IndexRoute } from './IndexRoute';
import { NotFoundRoute } from './NotFoundRoute';

//----------------------------------------------------------------------------//

interface RoutesContentProps {
  breadcrumbs: IBreadcrumbItem[];
  indexPage?: TPartialBasePageConfig;
  notFoundPage?: TPartialBasePageConfig;
  routes?: RoutePageConfig[];
  routeContainerClass?: string;
}

export const RoutesContent: React.FunctionComponent<RoutesContentProps> = ({
  breadcrumbs,
  indexPage,
  notFoundPage,
  routes = [],
  routeContainerClass = 'p-3 lg:p-6',
}) => (
  <Routes>
    {IndexRoute({ breadcrumbs, page: indexPage, routes })}

    {routes.map(
      (
        {
          path,
          label,
          PageComponent,
          className,
          containerClassname,
          lazy = true,
          hasSubpages = false,
        },
        index
      ) => (
        <Route
          key={index}
          {...{
            path: hasSubpages ? `${path}/*` : path,
            element: (
              <BreadcrumbsProvider items={[...breadcrumbs, { label }]}>
                {hasSubpages ? (
                  <Container
                    lazy={lazy}
                    containerClassName={cn(
                      routeContainerClass,
                      containerClassname
                    )}
                  >
                    <PageComponent className={className} />
                  </Container>
                ) : (
                  <PageContent
                    lazy={lazy}
                    containerClassName={cn(
                      routeContainerClass,
                      containerClassname
                    )}
                  >
                    <PageComponent className={className} />
                  </PageContent>
                )}
              </BreadcrumbsProvider>
            ),
          }}
        />
      )
    )}

    {NotFoundRoute({ breadcrumbs, page: notFoundPage })}
  </Routes>
);

export default RoutesContent;
