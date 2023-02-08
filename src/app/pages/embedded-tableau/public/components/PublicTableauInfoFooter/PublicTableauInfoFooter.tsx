import * as React from 'react';

import { ExternalLink } from 'app/components/ui/ExternalLink';

interface PublicTableauInfoFooterProps {
  tableauUrl: string;
  label?: string;
  url?: string;
  code?: string;
}

export const PublicTableauInfoFooter: React.FunctionComponent<
  PublicTableauInfoFooterProps
> = ({ tableauUrl, label, url, code }) => (
  <>
    {' '}
    <div className="flex space-x-3">
      <div className="font-bold">Public Tableau:</div>

      <ExternalLink className="hover:underline" href={tableauUrl} />
    </div>
    <div className="flex space-x-1">
      <ExternalLink
        className="hover:underline"
        href="https://github.com/tableau"
      >
        [GitHub] tableau
      </ExternalLink>
      <span>/</span>
      <ExternalLink
        className="hover:underline"
        href="https://github.com/tableau/embedding-api-v3-samples"
      >
        embedding-api-v3-samples
      </ExternalLink>
      {url ? (
        <>
          <span>/</span>
          <ExternalLink className="hover:underline" href={url}>
            {label || url}
          </ExternalLink>
          {code ? (
            <>
              <span>-</span>
              <ExternalLink className="hover:underline" href={code}>
                code
              </ExternalLink>
            </>
          ) : null}
        </>
      ) : null}
    </div>
  </>
);

export default PublicTableauInfoFooter;
