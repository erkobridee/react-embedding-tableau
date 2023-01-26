import * as React from 'react';
import cn from 'clsx';

import { LayoutProps, PageLayoutType } from 'app/components/layout/definitions';

import { ExternalLink } from 'app/components/ui/ExternalLink';

import { currentYear, author, socialLinks } from 'app/definitions';

export const FooterLayout: React.FunctionComponent<LayoutProps> = ({
  type = PageLayoutType.CONTENT,
}) => {
  // TODO: define the footer items when it's not the home page
  return (
    <footer className="py-6 lg:py-8">
      {type !== PageLayoutType.HOME ? (
        <div className="px-3 md:px-6 lg:px-0">footer - general app info</div>
      ) : null}

      <hr className="my-6 border-gray-200 dark:border-gray-700 sm:mx-auto lg:my-8" />

      <div className="flex flex-col justify-between space-y-6 px-6 md:flex-row md:space-y-0 lg:px-0">
        <div className="flex-1 text-center text-sm text-gray-500 dark:text-gray-400 md:text-left">
          © {currentYear} {author}. All Rights Reserved.
        </div>

        <div className="flex justify-center space-x-6 lg:space-x-3">
          {socialLinks.map(({ href, IconComponent, className, alt }) => (
            <ExternalLink
              key={alt}
              href={href}
              className={cn(
                'h-5 w-5 text-gray-400 hover:text-gray-500 sm:h-6 sm:w-6',
                className
              )}
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
