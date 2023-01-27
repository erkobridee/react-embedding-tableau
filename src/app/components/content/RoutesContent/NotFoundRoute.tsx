import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

//---===---//

import * as React from 'react';

import { Route } from 'react-router-dom';

import { NotFoundPage } from 'app/pages/notfound';

import { PageContent } from 'app/components/content/PageContent';

import { TPartialBasePageConfig } from './definitions';

//----------------------------------------------------------------------------//

interface NotFoundRouteProps {
  defaultBreadcrumb: IBreadcrumbItem;
  page?: TPartialBasePageConfig;
  label?: React.ReactNode;
}

export const NotFoundRoute: React.FunctionComponent<NotFoundRouteProps> = ({
  defaultBreadcrumb,
  page = {},
  label = '404',
}) => {
  const { containerClassname, PageComponent = NotFoundPage } = page;

  return (
    <Route
      path="*"
      element={
        <PageContent
          containerClassName={containerClassname}
          breadcrumbs={[defaultBreadcrumb, { label }]}
        >
          <PageComponent />
        </PageContent>
      }
    />
  );
};

export default NotFoundRoute;
