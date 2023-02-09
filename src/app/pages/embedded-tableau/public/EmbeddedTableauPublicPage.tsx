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

const PublicFilterExample = lazyDelayed(() => import('./examples/Filter'));

const PublicMarkSelectionChangedExample = lazyDelayed(
  () => import('./examples/MarkSelectionChanged')
);

const PublicSelectMarksExample = lazyDelayed(
  () => import('./examples/SelectMarks')
);

const PublicResizeExample = lazyDelayed(() => import('./examples/Resize'));

const PublicAnimationExample = lazyDelayed(
  () => import('./examples/Animation')
);

const PublicGetDataExample = lazyDelayed(() => import('./examples/GetData'));

const PublicGetLogicalDataExample = lazyDelayed(
  () => import('./examples/GetLogicalData')
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
    PageComponent: PublicFilterExample,
  },
  {
    path: 'mark-selection',
    label: 'Mark Selection Changed',
    PageComponent: PublicMarkSelectionChangedExample,
  },
  {
    path: 'select-marks',
    label: 'Select Marks',
    PageComponent: PublicSelectMarksExample,
  },
  {
    path: 'resize',
    label: 'Resize',
    PageComponent: PublicResizeExample,
  },
  {
    path: 'animation',
    label: 'Animation',
    PageComponent: PublicAnimationExample,
  },
  {
    path: 'get-data',
    label: 'Get Data',
    PageComponent: PublicGetDataExample,
  },
  {
    path: 'get-logical-data',
    label: 'Get Logical Data',
    PageComponent: PublicGetLogicalDataExample,
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
