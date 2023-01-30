import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

//---===---//

import { lazyDelayed } from 'utils/lazyDelayed';

import {
  RoutePageConfig,
  RoutesContent,
} from 'app/components/content/RoutesContent';

import ExternalLink from 'app/components/ui/ExternalLink';

import { EmbeddedTableauPageIndex } from './EmbeddedTableauPageIndex';

//----------------------------------------------------------------------------//

const TableauPublicPage = lazyDelayed(() => import('./public'));
const TableauConnectedAppsPage = lazyDelayed(() => import('./connected-apps'));

//----------------------------------------------------------------------------//

const defaultBreadcrumb: IBreadcrumbItem = {
  to: '/embedded-tableau',
  label: 'Embedded Tableau',
};

const routes: RoutePageConfig[] = [
  {
    path: 'public',
    label: 'Public',
    PageComponent: TableauPublicPage,
    description: (
      <span>
        data visualizations from the{' '}
        <ExternalLink
          className="font-medium hover:underline"
          href="https://public.tableau.com/app/discover"
        >
          Tableau Public
        </ExternalLink>
      </span>
    ),
  },
  {
    path: 'connected-apps',
    label: 'Connected Apps',
    PageComponent: TableauConnectedAppsPage,
    description: (
      <span>
        data visualizations from the{' '}
        <ExternalLink
          className="font-medium hover:underline"
          href="https://www.tableau.com/products/cloud-bi"
        >
          Tableau Cloud
        </ExternalLink>{' '}
        or
        <ExternalLink
          className="font-medium hover:underline"
          href="https://www.tableau.com/products/server"
        >
          Tableau Server
        </ExternalLink>
      </span>
    ),
  },
];

export const EmbeddedTableauPage = () => (
  <RoutesContent
    {...{
      defaultBreadcrumb,
      routes: routes,
      indexPage: { PageComponent: EmbeddedTableauPageIndex },
    }}
  />
);

export default EmbeddedTableauPage;
