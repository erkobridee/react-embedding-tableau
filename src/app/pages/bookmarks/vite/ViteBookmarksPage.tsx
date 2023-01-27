import * as React from 'react';

import { vite } from 'content/bookmarks';
import { RenderHtml } from 'app/components/ui/RenderHtml';

import { DefaultPageProps } from 'app/definitions';

export const ViteBookmarksPage: React.FunctionComponent<DefaultPageProps> = ({
  className,
}) => <RenderHtml className={className} content={vite.html} />;

export default ViteBookmarksPage;
