import * as React from 'react';

import {
  PageContent,
  PageContentProps,
} from 'app/components/content/PageContent';

export const BookmarksPageContent: React.FunctionComponent<PageContentProps> = (
  props
) => (
  <PageContent
    {...{
      ...props,
      defaultBreadcrumb: {
        to: '/bookmarks',
        label: 'Bookmarks',
      },
    }}
  />
);

export default BookmarksPageContent;
