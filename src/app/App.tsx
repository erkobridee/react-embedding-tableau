/*
  React Router useful references

  https://reactrouter.com/en/main/routers/create-browser-router

  https://github.com/remix-run/react-router/blob/main/examples/notes/src/app.jsx#L11
*/

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { PageLayoutType, PageLayout } from 'app/components/layout';

import { HomePage } from 'app/pages/home';

//----------------------------------------------------------------------------//

const router = createBrowserRouter(
  [
    {
      path: '/',
      element: <PageLayout type={PageLayoutType.HOME} />,
      children: [{ index: true, element: <HomePage /> }],
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
