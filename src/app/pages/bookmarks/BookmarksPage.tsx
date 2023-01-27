import * as React from 'react';

import { Routes, Route } from 'react-router-dom';

import { NotFoundPage } from 'app/pages/notfound';

import { BookmarksPageContent } from './BookmarksPageContent';
import { BookmarksPageIndex } from './BookmarksPageIndex';

import { lazyDelayed } from 'utils/lazyDelayed';

//----------------------------------------------------------------------------//

const TableauPage = lazyDelayed(() => import('./tableau'));
const ReactPage = lazyDelayed(() => import('./react'));
const VitePage = lazyDelayed(() => import('./vite'));
const TypescriptPage = lazyDelayed(() => import('./typescript'));
const TailwindPage = lazyDelayed(() => import('./tailwind'));

//----------------------------------------------------------------------------//

interface RouteConfig {
  path: string;
  label: string;
  PageComponent: React.ComponentType;
}

const routes: RouteConfig[] = [
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
  <Routes>
    <Route
      index
      element={
        <BookmarksPageContent containerClassName="p-8">
          <BookmarksPageIndex />
        </BookmarksPageContent>
      }
    />

    {routes.map(({ path, label, PageComponent }, index) => (
      <Route
        key={index}
        {...{
          path,
          element: (
            <BookmarksPageContent
              lazy
              containerClassName="p-3 lg:p-6"
              breadcrumbs={[{ label }]}
            >
              <PageComponent />
            </BookmarksPageContent>
          ),
        }}
      />
    ))}

    <Route
      path="*"
      element={
        <BookmarksPageContent breadcrumbs={[{ label: '404' }]}>
          <NotFoundPage />
        </BookmarksPageContent>
      }
    />
  </Routes>
);

export default BookmarksPage;
