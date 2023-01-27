import * as React from 'react';

import {
  PageContent,
  PageContentProps,
} from 'app/components/content/PageContent';

export const EmbeddedTableauPageContent: React.FunctionComponent<
  PageContentProps
> = (props) => (
  <PageContent
    {...{
      ...props,
      defaultBreadcrumb: {
        to: '/embedded-tableau',
        label: 'Embedded Tableau',
      },
    }}
  />
);

export default EmbeddedTableauPageContent;
