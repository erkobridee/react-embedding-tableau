/*
  check the following layout to implement something similar for the page structure
  https://preline.co/examples/layouts-basic.html
*/
import * as React from 'react';
import { useLocation } from 'react-router-dom';

import { ContentLayout } from 'app/components/layout/ContentLayout';
import { LayoutProps, PageLayoutType } from 'app/components/layout/definitions';
import { FooterLayout } from 'app/components/layout/FooterLayout';
import { HeaderLayout } from 'app/components/layout/HeaderLayout';

export const PageLayout: React.FunctionComponent<LayoutProps> = ({
  type = PageLayoutType.CONTENT,
}) => {
  const { pathname } = useLocation();

  type = pathname === '/' ? PageLayoutType.HOME : type;

  return (
    <div className="flex h-full w-full flex-col">
      <HeaderLayout type={type} />
      <ContentLayout />
      <FooterLayout type={type} />
    </div>
  );
};

export default PageLayout;
