/*
  check the following layout to implement something similar for the header structure

  https://preline.co/examples/navigations-mega-menu.html
  https://preline.co/examples/navigations-navbars.html
*/
import * as React from 'react';
import { Link } from 'react-router-dom';

import { LayoutProps, PageLayoutType } from 'app/components/layout/definitions';

import { DarkModeToggler } from 'app/components/ui/DarkModeToggler';

import { appName } from 'app/definitions';

export const HeaderLayout: React.FunctionComponent<LayoutProps> = ({
  type = PageLayoutType.CONTENT,
}) => {
  return (
    <header className="flex items-center space-x-3 py-6 px-6 lg:space-x-6 lg:py-8 xl:px-0">
      <div className="flex-1">
        {type !== PageLayoutType.HOME ? (
          <Link to="/">
            <span className="font-bold">{appName}</span>
          </Link>
        ) : null}
      </div>

      <div className="hidden lg:block">menu items</div>

      <DarkModeToggler />

      <div className="block lg:hidden">navbar</div>
    </header>
  );
};

export default HeaderLayout;
