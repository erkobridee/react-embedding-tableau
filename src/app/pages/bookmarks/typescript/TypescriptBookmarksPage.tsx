import * as React from 'react';

import { typescript } from 'content/bookmarks';
import { RenderHtml } from 'app/components/ui/RenderHtml';

import { DefaultPageProps } from 'app/definitions';

export const TypescriptBookmarksPage: React.FunctionComponent<
  DefaultPageProps
> = ({ className }) => (
  <RenderHtml className={className} content={typescript.html} />
);

export default TypescriptBookmarksPage;
