import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

//---===---//

import * as React from 'react';

import { Route } from 'react-router-dom';

import { NotFoundPage } from 'app/pages/notfound';

import { PageContent } from 'app/components/content/PageContent';

import { TPartialBasePageConfig } from './definitions';

//----------------------------------------------------------------------------//

interface NotFoundRouteProps {
  breadcrumbs: IBreadcrumbItem[];
  page?: TPartialBasePageConfig;
  label?: React.ReactNode;
}

export const NotFoundRoute: React.FunctionComponent<NotFoundRouteProps> = ({
  breadcrumbs,
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
          breadcrumbs={[...breadcrumbs, { label }]}
        >
          <PageComponent />
        </PageContent>
      }
    />
  );
};

export default NotFoundRoute;
