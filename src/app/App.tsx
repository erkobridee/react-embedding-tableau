/*
  React Router useful references

  https://reactrouter.com/en/main/routers/create-browser-router

  https://github.com/remix-run/react-router/blob/main/examples/notes/src/app.jsx#L11

  https://github.com/remix-run/react-router/blob/dev/examples/lazy-loading/src/App.tsx

  https://github.com/umair-mirza/safetyapp

  https://github.com/rafgraph/spa-github-pages
*/
import * as React from 'react';

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';

import { PageLayout } from 'app/components/layout';

import { HomePage } from 'app/pages/home';
import { NotFoundPage } from 'app/pages/notfound';

import { LazyContent } from 'app/components/content/LazyContent';

import { lazyDelayed } from 'utils/lazyDelayed';

//----------------------------------------------------------------------------//

const BookmarksPage = lazyDelayed(() => import('app/pages/bookmarks'));
const EmbeddedTableauPage = lazyDelayed(
  () => import('app/pages/embedded-tableau')
);

//----------------------------------------------------------------------------//

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<PageLayout />}>
      <Route index element={<HomePage />} />

      <Route
        path="bookmarks/*"
        element={
          <LazyContent>
            <BookmarksPage />
          </LazyContent>
        }
      />

      <Route
        path="embedded-tableau/*"
        element={
          <LazyContent>
            <EmbeddedTableauPage />
          </LazyContent>
        }
      />

      <Route path="*" element={<NotFoundPage />} />
    </Route>
  ),
  {
    basename: `${import.meta.env.BASE_URL}`,
  }
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export const App = () => <RouterProvider router={router} />;

export default App;
