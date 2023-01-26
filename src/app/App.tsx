/*
  React Router useful references

  https://reactrouter.com/en/main/routers/create-browser-router

  https://github.com/remix-run/react-router/blob/main/examples/notes/src/app.jsx#L11

  https://github.com/remix-run/react-router/blob/dev/examples/lazy-loading/src/App.tsx

  https://github.com/umair-mirza/safetyapp
*/
import * as React from 'react';

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PageLayout } from 'app/components/layout';

import { HomePage } from 'app/pages/home';
import { NotFoundPage } from 'app/pages/notfound';

//----------------------------------------------------------------------------//

const BookmarksPage = React.lazy(() => import('app/pages/bookmarks'));
const EmbeddedAnalyticsPage = React.lazy(
  () => import('app/pages/embedded-analytics')
);

//----------------------------------------------------------------------------//

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <PageLayout />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },

        {
          path: 'bookmarks',
          element: (
            <React.Suspense fallback={<>Loading...</>}>
              <BookmarksPage />
            </React.Suspense>
          ),
        },
        {
          path: 'embedded-analytics',
          element: (
            <React.Suspense fallback={<>Loading...</>}>
              <EmbeddedAnalyticsPage />
            </React.Suspense>
          ),
        },

        {
          path: '*',
          element: <NotFoundPage />,
        },
      ],
    },
  ],
  {
    basename: `${import.meta.env.BASE_URL}`,
  }
);

if (import.meta.hot) {
  import.meta.hot.dispose(() => router.dispose());
}

export const App = () => <RouterProvider router={router} />;

export default App;
