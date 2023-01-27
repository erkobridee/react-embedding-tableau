import * as React from 'react';
import cn from 'clsx';

import { LayoutProps, PageLayoutType } from 'app/components/layout/definitions';

import { ExternalLink } from 'app/components/ui/ExternalLink';
import { TechStack, IconSize } from 'app/components/TechStack';

import {
  currentYear,
  author,
  socialLinks,
  appName,
  appNameMeaning,
} from 'app/definitions';

export const FooterLayout: React.FunctionComponent<LayoutProps> = ({
  type = PageLayoutType.CONTENT,
}) => {
  return (
    <footer className="py-6 lg:py-8">
      {type !== PageLayoutType.HOME ? (
        <div className="flex flex-col space-y-6 px-3 md:flex-row md:justify-between md:px-6 lg:space-y-0 xl:px-0">
          <div className="flex flex-col justify-center space-y-2 px-6  xl:px-0">
            <div className="text-sm font-bold">{appName}</div>
            <div className="max-w-[300px] text-sm italic lg:max-w-none">
              {appNameMeaning}
            </div>
          </div>

          <div className="flex flex-col justify-center space-y-2 lg:items-end lg:justify-end lg:space-y-2">
            <div className="text-center text-sm lg:text-right">Tech Stack</div>
            <div className="flex justify-center space-x-5">
              <TechStack iconSize={IconSize.SMALL} />
            </div>
          </div>
        </div>
      ) : null}

      <hr className="border-divider my-4 sm:mx-auto lg:my-6" />

      <div className="flex flex-col justify-between space-y-6 px-6 md:flex-row md:space-y-0 xl:px-0">
        <div className="text-secondary flex-1 text-center text-sm md:text-left">
          © {currentYear} {author}. All Rights Reserved.
        </div>

        <div className="flex justify-center space-x-6 lg:space-x-3">
          {socialLinks.map(({ href, IconComponent, className, alt }) => (
            <ExternalLink
              key={alt}
              href={href}
              className={cn('icon-social h-5 w-5 sm:h-6 sm:w-6', className)}
            >
              <IconComponent />
            </ExternalLink>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default FooterLayout;
