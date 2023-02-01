/*
  check the following layout to implement something similar for the header structure

  https://preline.co/examples/navigations-mega-menu.html
  https://preline.co/examples/navigations-navbars.html
*/
import * as React from 'react';
import { Link } from 'react-router-dom';

import { LayoutProps, PageLayoutType } from 'app/components/layout/definitions';
import { DarkModeToggler } from 'app/components/ui/DarkModeToggler';
import { appName, headerMenuItems } from 'app/definitions';

import { NavBar } from './NavBar';

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

      <div className="hidden lg:flex lg:space-x-6">
        {headerMenuItems.map(({ to, label }, index) => (
          <Link key={index} to={to}>
            {label}
          </Link>
        ))}
      </div>

      <DarkModeToggler />

      <div className="block lg:hidden">
        <NavBar />
      </div>
    </header>
  );
};

export default HeaderLayout;
