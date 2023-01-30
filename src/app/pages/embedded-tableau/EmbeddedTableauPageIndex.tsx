/* eslint-disable react/no-unescaped-entities */

import type { ComponentIndexPage } from 'app/components/content/RoutesContent';

import * as React from 'react';
import cn from 'clsx';

import IndexContent from 'app/components/content/IndexContent';
import TailwindTypography from 'app/components/ui/TailwindTypography';
import ExternalLink from 'app/components/ui/ExternalLink';

export const EmbeddedTableauPageIndex: React.FunctionComponent<
  ComponentIndexPage
> = ({ className, items }) => (
  <div className={cn('flex flex-col', className)}>
    {items ? (
      <>
        <div>
          Examples of how to embedded{' '}
          <ExternalLink
            className="font-medium hover:underline"
            href="https://www.tableau.com/"
          >
            Tableau
          </ExternalLink>{' '}
          into a{' '}
          <ExternalLink
            className="font-medium hover:underline"
            href="https://reactjs.org/"
          >
            React
          </ExternalLink>{' '}
          application
        </div>
        <br />

        <IndexContent className="space-y-3" items={items} />

        <hr />
      </>
    ) : null}

    <TailwindTypography className="max-w-full">
      <ul>
        Useful references:
        <ul>
          <li>
            <ExternalLink href="https://www.tableau.com/products/embedded-analytics">
              Tableau Product - Embedded Analytics
            </ExternalLink>
            <ul>
              <li>
                <ExternalLink href="https://tableau.github.io/embedding-playbook/">
                  Tableau Embedded Analytics Playbook
                </ExternalLink>
              </li>
            </ul>
          </li>
          <li>
            <ExternalLink href="https://www.tableau.com/developer">
              Tableau Developer Program
            </ExternalLink>{' '}
            - Innovate, create, and make Tableau work perfectly for your
            organization
            <ul>
              <li>
                <ExternalLink href="https://www.tableau.com/developer/tools/embedding-api">
                  Embedding API
                </ExternalLink>{' '}
                - Use the Tableau Embedding API to integrate Tableau
                visualizations into your own web applications.
                <ul>
                  <li>
                    <ExternalLink href="https://help.tableau.com/current/api/embedding_api/en-us/index.html">
                      Tableau Embedding API v3
                    </ExternalLink>{' '}
                    - Use the Tableau Embedding API v3 to integrate Tableau
                    visualizations into your own web applications. Harness the
                    power of the Embedding API to add custom controls, and take
                    advantage of modern, secure methods of authentication that
                    allow users to interact with the visualization from your web
                    application.
                  </li>

                  <li>
                    <ExternalLink href="https://www.tableau.com/events/tc/2021/new-era-tableau-embedding-introducing-embedding-api-v3">
                      A New Era in Tableau Embedding: Introducing the Embedding
                      API v3 | Tableau Conference 2021
                    </ExternalLink>{' '}
                    - It's a new era in Tableau Embedding. Introducing the
                    Embedding API v3! In 2022, we'll release version 3 of the
                    Tableau Embedding API, which helps you embed Tableau
                    visualizations in web applications and build rich
                    integrations. The Embedding API v3 replaces and improves
                    upon the JavaScript API v2. It's currently in Developer
                    Preview, which means it is available to you to explore
                    today. In this episode, we'll explain the benefits of the
                    new Embedding API v3 and show you how to get started
                    building your next Embedded Analytics solution with it.
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <ExternalLink href="https://www.tableau.com/support/help">
              Tableau Help
            </ExternalLink>{' '}
            /{' '}
            <ExternalLink href="https://help.tableau.com/current/online/en-us/tableau-online-home.htm">
              Tableau Cloud Help
            </ExternalLink>
            <ul>
              <li>
                <ExternalLink href="https://help.tableau.com/current/online/en-us/web_author.htm">
                  Create, Interact with, and Embed Views on the Web
                </ExternalLink>
              </li>
              <li>
                <ExternalLink href="https://help.tableau.com/current/online/en-us/to_site_startup.htm">
                  Administer a Site
                </ExternalLink>{' '}
                /{' '}
                <ExternalLink href="https://help.tableau.com/current/online/en-us/security_auth.htm">
                  Site Authentication
                </ExternalLink>{' '}
                /{' '}
                <ExternalLink href="https://help.tableau.com/current/online/en-us/connected_apps.htm">
                  Use Tableau Connected Apps for Application Integration
                </ExternalLink>
              </li>
            </ul>
          </li>
        </ul>
      </ul>
    </TailwindTypography>
  </div>
);

export default EmbeddedTableauPageIndex;
