import * as React from 'react';

import { tableau } from 'content/bookmarks';
import { RenderHtml } from 'app/components/ui/RenderHtml';

import { DefaultPageProps } from 'app/definitions';

export const TableauBookmarksPage: React.FunctionComponent<
  DefaultPageProps
> = ({ className }) => (
  <RenderHtml className={className} content={tableau.html} />
);

export default TableauBookmarksPage;
