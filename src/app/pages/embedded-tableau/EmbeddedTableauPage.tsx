import type { IBreadcrumbItem } from 'app/components/ui/Breadcrumbs';

//---===---//

import { PageContent } from 'app/components/content/PageContent';

import { EmbeddedTableauPageIndex } from './EmbeddedTableauPageIndex';

//----------------------------------------------------------------------------//

// TODO: Lazy load the inner pages

//----------------------------------------------------------------------------//

const defaultBreadcrumb: IBreadcrumbItem = {
  to: '/embedded-tableau',
  label: 'Embedded Tableau',
};

export const EmbeddedTableauPage = () => (
  <PageContent breadcrumbs={[defaultBreadcrumb]}>
    <EmbeddedTableauPageIndex />
  </PageContent>
);

export default EmbeddedTableauPage;
