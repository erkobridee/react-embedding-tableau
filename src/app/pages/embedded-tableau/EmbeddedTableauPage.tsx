import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

//---===---//

import { lazyDelayed } from 'utils/lazyDelayed';

import {
  RoutePageConfig,
  RoutesContent,
} from 'app/components/content/RoutesContent';

import { EmbeddedTableauPageIndex } from './EmbeddedTableauPageIndex';

//----------------------------------------------------------------------------//

const TableauPublicPage = lazyDelayed(() => import('./public'));
const TableauAnalyticsPage = lazyDelayed(() => import('./analytics'));

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
  },
  {
    path: 'analytics',
    label: 'Analytics',
    PageComponent: TableauPublicPage,
  },
];

export const EmbeddedTableauPage = () => (
  <RoutesContent
    {...{
      defaultBreadcrumb,
      routes: routes,
      // indexPage: { PageComponent: EmbeddedTableauPageIndex },
    }}
  />
);

export default EmbeddedTableauPage;
