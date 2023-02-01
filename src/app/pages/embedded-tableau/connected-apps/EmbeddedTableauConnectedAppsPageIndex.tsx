import * as React from 'react';

import cn from 'clsx';

import IndexContent from 'app/components/content/IndexContent';
import type { ComponentIndexPage } from 'app/components/content/RoutesContent';
import ExternalLink from 'app/components/ui/ExternalLink';
import TailwindTypography from 'app/components/ui/TailwindTypography';

export const EmbeddedTableauConnectedAppsPageIndex: React.FunctionComponent<
  ComponentIndexPage
> = ({ className, items }) => (
  <div className={cn('flex flex-col', className)}>
    {items ? (
      <>
        <div>Available examples</div>

        <IndexContent className="space-y-3" items={items} />

        <hr />
      </>
    ) : null}

    <TailwindTypography className="max-w-full">
      <ul>
        Useful references:
        <ul>
          <li>
            <ExternalLink href="https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_auth.html">
              Authentication and Embedded Views | Tableau Embedding API
            </ExternalLink>
          </li>
          <li>
            <ExternalLink href="https://help.tableau.com/current/api/embedding_api/en-us/docs/embedding_api_site.html">
              Tableau Site Settings for Embedding | Tableau Embedding API
            </ExternalLink>
          </li>
        </ul>
      </ul>
    </TailwindTypography>
  </div>
);

export default EmbeddedTableauConnectedAppsPageIndex;
