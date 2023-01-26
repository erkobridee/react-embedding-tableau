/*
  check the following footer layout to implement something similar
  https://flowbite.com/blocks/marketing/footer/
*/
import * as React from 'react';

import { LayoutProps, PageLayoutType } from 'app/components/layout/definitions';

export const FooterLayout: React.FunctionComponent<LayoutProps> = ({
  type = PageLayoutType.CONTENT,
}) => {
  // TODO: remove
  console.log(`FooterLayout type = ${type}`);

  // TODO: define the code
  return <footer>Footer</footer>;
};

export default FooterLayout;
