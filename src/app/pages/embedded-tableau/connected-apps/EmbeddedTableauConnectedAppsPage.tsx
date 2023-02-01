//---===---//

// import { lazyDelayed } from 'utils/lazyDelayed';

import {
  RoutePageConfig,
  RoutesContent,
} from 'app/components/content/RoutesContent';
import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

import EmbeddedTableauConnectedAppsPageIndex from './EmbeddedTableauConnectedAppsPageIndex';

//----------------------------------------------------------------------------//

// const Page = lazyDelayed(() => import('./page'));

//----------------------------------------------------------------------------//

const breadcrumbs: IBreadcrumbItem[] = [
  {
    to: '/embedded-tableau',
    label: 'Embedded Tableau',
  },
  {
    to: '/embedded-tableau/connected-apps',
    label: 'Connected Apps',
  },
];

const routes: RoutePageConfig[] = [
  {
    path: 'basic-embed',
    label: 'Basic Embed',
    PageComponent: () => (
      <div>
        <strong>TODO:</strong> define the page - Basic Embed
      </div>
    ),
    lazy: false,
  },
];

export const EmbeddedTableauConnectedAppsPage = () => (
  <RoutesContent
    {...{
      breadcrumbs: breadcrumbs,
      routes: routes,
      indexPage: { PageComponent: EmbeddedTableauConnectedAppsPageIndex },
    }}
  />
);

export default EmbeddedTableauConnectedAppsPage;
