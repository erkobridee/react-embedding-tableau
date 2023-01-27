import * as React from 'react';

import { tailwind } from 'content/bookmarks';
import { RenderHtml } from 'app/components/ui/RenderHtml';

import { DefaultPageProps } from 'app/definitions';

export const TailwindBookmarksPage: React.FunctionComponent<
  DefaultPageProps
> = ({ className }) => (
  <RenderHtml className={className} content={tailwind.html} />
);

export default TailwindBookmarksPage;
