/*
  check the following layout to implement something similar for the header structure

  https://preline.co/examples/navigations-mega-menu.html
  https://preline.co/examples/navigations-navbars.html
*/
import * as React from 'react';

import { LayoutProps, PageLayoutType } from 'app/components/layout/definitions';

export const HeaderLayout: React.FunctionComponent<LayoutProps> = ({
  type = PageLayoutType.CONTENT,
}) => {
  // TODO: remove
  console.log(`HeaderLayout type = ${type}`);

  // TODO: define the code
  return <header>header</header>;
};

export default HeaderLayout;
