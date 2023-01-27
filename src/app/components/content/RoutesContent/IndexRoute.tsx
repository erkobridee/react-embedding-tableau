// IndexRoute
import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

//---===---//

import * as React from 'react';

import { Route } from 'react-router-dom';

import { PageContent } from 'app/components/content/PageContent';

import { IndexItem, IndexContent } from 'app/components/content/IndexContent';

import { TPartialBasePageConfig, RoutePageConfig } from './definitions';

//----------------------------------------------------------------------------//

interface IndexRouteProps {
  defaultBreadcrumb: IBreadcrumbItem;
  page?: TPartialBasePageConfig;
  routes?: RoutePageConfig[];
}

export const IndexRoute: React.FunctionComponent<IndexRouteProps> = ({
  defaultBreadcrumb,
  page = {},
  routes = [],
}) => {
  const {
    className = 'space-y-6',
    containerClassname = 'p-8',
    PageComponent,
  } = page;

  const wrapper = (children?: React.ReactNode) => (
    <Route
      index
      element={
        <PageContent
          breadcrumbs={[defaultBreadcrumb]}
          containerClassName={containerClassname}
        >
          {children}
        </PageContent>
      }
    />
  );

  if (PageComponent) {
    return wrapper(<PageComponent />);
  }

  if (routes.length === 0) {
    return wrapper();
  }

  const items: IndexItem[] = routes.map(
    ({ path, label, icon, description }) =>
      ({
        label,
        icon,
        description,
        to: path,
      } as IndexItem)
  );

  return wrapper(<IndexContent className={className} items={items} />);
};

export default IndexRoute;
