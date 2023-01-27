import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

//---===---//

import { lazyDelayed } from 'utils/lazyDelayed';

import {
  RoutePageConfig,
  RoutesContent,
} from 'app/components/content/RoutesContent';

import { EmbeddedTableauPageIndex } from './EmbeddedTableauPageIndex';

//----------------------------------------------------------------------------//

// TODO: Lazy load the inner pages

//----------------------------------------------------------------------------//

const defaultBreadcrumb: IBreadcrumbItem = {
  to: '/embedded-tableau',
  label: 'Embedded Tableau',
};

const routes: RoutePageConfig[] = [];

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
