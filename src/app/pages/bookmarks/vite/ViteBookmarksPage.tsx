import * as React from 'react';

import { DefaultPageProps } from 'app/definitions';
import { TailwindTypography } from 'app/components/ui/TailwindTypography';
import { ReactComponent as Markdown } from 'content/bookmarks/vitejs.md';

export const ViteBookmarksPage: React.FunctionComponent<DefaultPageProps> = ({
  className,
}) => (
  <TailwindTypography className={className}>
    <Markdown />
  </TailwindTypography>
);

export default ViteBookmarksPage;
