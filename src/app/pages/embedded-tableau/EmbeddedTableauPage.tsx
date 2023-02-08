//---===---//

import { lazyDelayed } from 'utils/lazyDelayed';

import {
  RoutePageConfig,
  RoutesContent,
} from 'app/components/content/RoutesContent';
import { TableauEmbedProvider } from 'app/components/tableau/TableauEmbedContext';
import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';
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
    hasSubpages: true,
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
    hasSubpages: true,
  },
];

export const EmbeddedTableauPage = () => (
  <TableauEmbedProvider baseClassName="transition-opacity motion-reduce:transition-none">
    <RoutesContent
      {...{
        breadcrumbs: [defaultBreadcrumb],
        routes: routes,
        indexPage: { PageComponent: EmbeddedTableauPageIndex },
      }}
    />
  </TableauEmbedProvider>
);

export default EmbeddedTableauPage;
