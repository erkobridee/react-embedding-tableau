//---===---//

// import { lazyDelayed } from 'utils/lazyDelayed';

import {
  RoutePageConfig,
  RoutesContent,
} from 'app/components/content/RoutesContent';
import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

import EmbeddedTableauPublicPageIndex from './EmbeddedTableauPublicPageIndex';

//----------------------------------------------------------------------------//

// const Page = lazyDelayed(() => import('./page'));

//----------------------------------------------------------------------------//

const breadcrumbs: IBreadcrumbItem[] = [
  {
    to: '/embedded-tableau',
    label: 'Embedded Tableau',
  },
  {
    to: '/embedded-tableau/public',
    label: 'Public',
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
  {
    path: 'dynamic-load',
    label: 'Dynamic Load',
    PageComponent: () => (
      <div>
        <strong>TODO:</strong> define the page - Dynamic Load
      </div>
    ),
  },
  {
    path: 'export-pdf',
    label: 'Export PDF',
    PageComponent: () => (
      <div>
        <strong>TODO:</strong> define the page - Export PDF
      </div>
    ),
  },
  {
    path: 'filter',
    label: 'Filter',
    PageComponent: () => (
      <div>
        <strong>TODO:</strong> define the page - Filter
      </div>
    ),
  },
  {
    path: 'get-data',
    label: 'Get Data',
    PageComponent: () => (
      <div>
        <strong>TODO:</strong> define the page - Get Data
      </div>
    ),
  },
  {
    path: 'resize',
    label: 'Resize',
    PageComponent: () => (
      <div>
        <strong>TODO:</strong> define the page - Resize
      </div>
    ),
  },
  {
    path: 'events',
    label: 'Events',
    PageComponent: () => (
      <div>
        <strong>TODO:</strong> define the page - Events
      </div>
    ),
  },
  {
    path: 'animation',
    label: 'Animation',
    PageComponent: () => (
      <div>
        <strong>TODO:</strong> define the page - Animation
      </div>
    ),
  },
];

export const EmbeddedTableauPublicPage = () => (
  <RoutesContent
    {...{
      breadcrumbs: breadcrumbs,
      routes: routes,
      indexPage: { PageComponent: EmbeddedTableauPublicPageIndex },
    }}
  />
);

export default EmbeddedTableauPublicPage;
