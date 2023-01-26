import { Outlet } from 'react-router-dom';

export const ContentLayout = () => (
  <main id="content" role="main" className="flex-1 px-3 md:px-6 xl:px-0">
    <Outlet />
  </main>
);

export default ContentLayout;
