import * as React from 'react';

import { PageContent, PageContentProps } from 'app/components/ui/PageContent';

export const EmbeddedTableauPageContent: React.FunctionComponent<
  PageContentProps
> = ({ className, breadcrumbs, children }) => (
  <PageContent
    {...{
      className,
      breadcrumbs,
      defaultBreadcrumb: {
        to: '/embedded-tableau',
        label: 'Embedded Tableau',
      },
    }}
  >
    {children}
  </PageContent>
);

export default EmbeddedTableauPageContent;
