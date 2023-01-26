import { Outlet } from 'react-router-dom';

export const ContentLayout = () => (
  <main id="content" role="main" className="flex-1">
    <Outlet />
  </main>
);

export default ContentLayout;
