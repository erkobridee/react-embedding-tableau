//---===---//

import { lazyDelayed } from 'utils/lazyDelayed';

import {
  RoutePageConfig,
  RoutesContent,
} from 'app/components/content/RoutesContent';
import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

import EmbeddedTableauPublicPageIndex from './EmbeddedTableauPublicPageIndex';

//----------------------------------------------------------------------------//

const PublicBasicEmbedExamplePage = lazyDelayed(
  () => import('./examples/BasicEmbed')
);

const PublicDynamicLoadExample = lazyDelayed(
  () => import('./examples/DynamicLoad')
);

const PublicExportOptionsExample = lazyDelayed(
  () => import('./examples/ExportOptions')
);

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
    PageComponent: PublicBasicEmbedExamplePage,
  },
  {
    path: 'dynamic-load',
    label: 'Dynamic Load',
    PageComponent: PublicDynamicLoadExample,
  },
  {
    path: 'export-options',
    label: 'Export Options',
    PageComponent: PublicExportOptionsExample,
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
