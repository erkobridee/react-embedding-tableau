import * as React from 'react';

import { ReactComponent as Markdown } from 'content/bookmarks/reactjs.md';

import { TailwindTypography } from 'app/components/ui/TailwindTypography';
import { DefaultPageProps } from 'app/definitions';

export const ReactBookmarksPage: React.FunctionComponent<DefaultPageProps> = ({
  className,
}) => (
  <TailwindTypography className={className}>
    <Markdown />
  </TailwindTypography>
);

export default ReactBookmarksPage;
