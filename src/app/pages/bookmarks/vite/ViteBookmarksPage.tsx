import * as React from 'react';

import { ReactComponent as Markdown } from 'content/bookmarks/vitejs.md';

import { TailwindTypography } from 'app/components/ui/TailwindTypography';
import { DefaultPageProps } from 'app/definitions';

export const ViteBookmarksPage: React.FunctionComponent<DefaultPageProps> = ({
  className,
}) => (
  <TailwindTypography className={className}>
    <Markdown />
  </TailwindTypography>
);

export default ViteBookmarksPage;
