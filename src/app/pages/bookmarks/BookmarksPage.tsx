import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

//---===---//

import { lazyDelayed } from 'utils/lazyDelayed';

import {
  RoutePageConfig,
  RoutesContent,
} from 'app/components/content/RoutesContent';

//----------------------------------------------------------------------------//

const TableauPage = lazyDelayed(() => import('./tableau'));
const ReactPage = lazyDelayed(() => import('./react'));
const VitePage = lazyDelayed(() => import('./vite'));
const TypescriptPage = lazyDelayed(() => import('./typescript'));
const TailwindPage = lazyDelayed(() => import('./tailwind'));

//----------------------------------------------------------------------------//

const defaultBreadcrumb: IBreadcrumbItem = {
  to: '/bookmarks',
  label: 'Bookmarks',
};

const routes: RoutePageConfig[] = [
  {
    path: 'tableau',
    label: 'Tableau',
    PageComponent: TableauPage,
  },
  {
    path: 'react',
    label: 'React.js',
    PageComponent: ReactPage,
  },
  {
    path: 'vite',
    label: 'Vite.js',
    PageComponent: VitePage,
  },
  {
    path: 'typescript',
    label: 'TypeScript',
    PageComponent: TypescriptPage,
  },
  {
    path: 'tailwind',
    label: 'TailwindCSS',
    PageComponent: TailwindPage,
  },
];

export const BookmarksPage = () => (
  <RoutesContent {...{ defaultBreadcrumb, routes: routes }} />
);

export default BookmarksPage;
