// IndexRoute
import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

//---===---//

import * as React from 'react';

import { Route } from 'react-router-dom';

import { PageContent } from 'app/components/content/PageContent';

import { IndexItem, IndexContent } from 'app/components/content/IndexContent';

import {
  ComponentIndexPage,
  TPartialBasePageConfig,
  RoutePageConfig,
} from './definitions';

//----------------------------------------------------------------------------//

interface IndexRouteProps {
  breadcrumbs: IBreadcrumbItem[];
  page?: TPartialBasePageConfig<ComponentIndexPage>;
  routes?: RoutePageConfig[];
}

export const IndexRoute: React.FunctionComponent<IndexRouteProps> = ({
  breadcrumbs,
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
          breadcrumbs={breadcrumbs}
          containerClassName={containerClassname}
        >
          {children}
        </PageContent>
      }
    />
  );

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

  if (PageComponent) {
    return wrapper(<PageComponent className={className} items={items} />);
  }

  return wrapper(<IndexContent className={className} items={items} />);
};

export default IndexRoute;
