import * as React from 'react';

import cn from 'clsx';

import IndexContent from 'app/components/content/IndexContent';
import type { ComponentIndexPage } from 'app/components/content/RoutesContent';
import ExternalLink from 'app/components/ui/ExternalLink';
import TailwindTypography from 'app/components/ui/TailwindTypography';

export const EmbeddedTableauPublicPageIndex: React.FunctionComponent<
  ComponentIndexPage
> = ({ className, items }) => (
  <div className={cn('flex flex-col', className)}>
    {items ? (
      <>
        <div>
          Available examples -{' '}
          <span>
            data visualizations from the{' '}
            <ExternalLink
              className="font-medium hover:underline"
              href="https://public.tableau.com/app/discover"
            >
              Tableau Public
            </ExternalLink>
          </span>
        </div>

        <IndexContent className="space-y-3" items={items} />

        <hr />
      </>
    ) : null}

    <TailwindTypography className="max-w-full">
      <ul>
        Useful references:
        <ul>
          <li>
            <ExternalLink href="https://help.tableau.com/current/api/embedding_api/en-us/tutorial/tutorial.htm">
              Tableau Embedding API v3 Tutorial
            </ExternalLink>
          </li>

          <li>
            <ExternalLink href="https://github.com/tableau/embedding-api-v3-samples#embedding-api-v3-samples">
              [GitHub] tableau / embedding-api-v3-samples
            </ExternalLink>{' '}
            - This repository contains samples for the Tableau Embedding API V3.
          </li>

          <li>
            <ExternalLink href="https://github.com/andre347/tableau-react-jsapi">
              [GitHub] andre347 / tableau-react-jsapi
            </ExternalLink>{' '}
            - Playground for React & Tableau JS API
          </li>
        </ul>
      </ul>
    </TailwindTypography>
  </div>
);

export default EmbeddedTableauPublicPageIndex;
