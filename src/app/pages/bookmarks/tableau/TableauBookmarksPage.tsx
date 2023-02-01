import * as React from 'react';

import { ReactComponent as Markdown } from 'content/bookmarks/tableau.md';

import { TailwindTypography } from 'app/components/ui/TailwindTypography';
import { DefaultPageProps } from 'app/definitions';

export const TableauBookmarksPage: React.FunctionComponent<
  DefaultPageProps
> = ({ className }) => (
  <TailwindTypography className={className}>
    <Markdown />
  </TailwindTypography>
);

export default TableauBookmarksPage;
