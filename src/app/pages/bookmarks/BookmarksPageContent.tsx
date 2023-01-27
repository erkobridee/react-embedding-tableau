import * as React from 'react';

import { PageContent, PageContentProps } from 'app/components/ui/PageContent';

export const BookmarksPageContent: React.FunctionComponent<
  PageContentProps
> = ({ className, breadcrumbs, children }) => (
  <PageContent
    {...{
      className,
      breadcrumbs,
      defaultBreadcrumb: {
        to: '/bookmarks',
        label: 'Bookmarks',
      },
    }}
  >
    {children}
  </PageContent>
);

export default BookmarksPageContent;
