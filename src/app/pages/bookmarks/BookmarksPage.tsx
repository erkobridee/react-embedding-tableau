import * as React from 'react';

import { Routes, Route } from 'react-router-dom';

import { NotFoundPage } from 'app/pages/notfound';

import { LazyContent } from 'app/components/ui/LazyContent';

import { BookmarksPageContent } from './BookmarksPageContent';
import { BookmarksPageIndex } from './BookmarksPageIndex';

//----------------------------------------------------------------------------//

const ReactPage = React.lazy(() => import('./react'));
const TableauPage = React.lazy(() => import('./tableau'));
const TailwindPage = React.lazy(() => import('./tailwind'));
const VitePage = React.lazy(() => import('./vite'));

//----------------------------------------------------------------------------//

export const BookmarksPage = () => (
  <Routes>
    <Route
      index
      element={
        <BookmarksPageContent>
          <BookmarksPageIndex />
        </BookmarksPageContent>
      }
    />

    <Route
      path="react"
      element={
        <BookmarksPageContent breadcrumbs={[{ label: 'React.js' }]}>
          <LazyContent>
            <ReactPage className="p-6" />
          </LazyContent>
        </BookmarksPageContent>
      }
    />

    <Route
      path="tableau"
      element={
        <BookmarksPageContent breadcrumbs={[{ label: 'Tableau' }]}>
          <LazyContent>
            <TableauPage className="p-6" />
          </LazyContent>
        </BookmarksPageContent>
      }
    />

    <Route
      path="tailwind"
      element={
        <BookmarksPageContent breadcrumbs={[{ label: 'TailwindCSS' }]}>
          <LazyContent>
            <TailwindPage className="p-6" />
          </LazyContent>
        </BookmarksPageContent>
      }
    />

    <Route
      path="vite"
      element={
        <BookmarksPageContent breadcrumbs={[{ label: 'Vite.js' }]}>
          <LazyContent>
            <VitePage className="p-6" />
          </LazyContent>
        </BookmarksPageContent>
      }
    />

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
