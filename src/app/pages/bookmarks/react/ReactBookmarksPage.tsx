import * as React from 'react';

import { react } from 'content/bookmarks';
import { RenderHtml } from 'app/components/ui/RenderHtml';

import { DefaultPageProps } from 'app/definitions';

export const ReactBookmarksPage: React.FunctionComponent<DefaultPageProps> = ({
  className,
}) => <RenderHtml className={className} content={react.html} />;

export default ReactBookmarksPage;
