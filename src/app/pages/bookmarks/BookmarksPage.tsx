//---===---//

import { lazyDelayed } from 'utils/lazyDelayed';

import {
  RoutePageConfig,
  RoutesContent,
} from 'app/components/content/RoutesContent';
import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

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
    className: 'max-w-full',
  },
  {
    path: 'react',
    label: 'React.js',
    PageComponent: ReactPage,
    className: 'max-w-full',
  },
  {
    path: 'vite',
    label: 'Vite.js',
    PageComponent: VitePage,
    className: 'max-w-full',
  },
  {
    path: 'typescript',
    label: 'TypeScript',
    PageComponent: TypescriptPage,
    className: 'max-w-full',
  },
  {
    path: 'tailwind',
    label: 'TailwindCSS',
    PageComponent: TailwindPage,
    className: 'max-w-full',
  },
];

export const BookmarksPage = () => (
  <RoutesContent {...{ breadcrumbs: [defaultBreadcrumb], routes: routes }} />
);

export default BookmarksPage;
