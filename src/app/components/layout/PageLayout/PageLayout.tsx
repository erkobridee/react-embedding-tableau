/*
  check the following layout to implement something similar for the page structure
  https://preline.co/examples/layouts-basic.html
*/
import * as React from 'react';

import { LayoutProps, PageLayoutType } from 'app/components/layout/definitions';

import { HeaderLayout } from 'app/components/layout/HeaderLayout';
import { ContentLayout } from 'app/components/layout/ContentLayout';
import { FooterLayout } from 'app/components/layout/FooterLayout';

export const PageLayout: React.FunctionComponent<LayoutProps> = ({
  type = PageLayoutType.CONTENT,
}) => (
  <div className="flex h-full w-full flex-col">
    <HeaderLayout type={type} />
    <ContentLayout />
    <FooterLayout type={type} />
  </div>
);

export default PageLayout;
