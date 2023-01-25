import cn from 'clsx';

import { ExternalLink } from 'app/components/ui/ExternalLink';

import {
  appName,
  appNameMeaning,
  techStack,
  socialLinks,
} from 'app/definitions';

import './HomePage.css';

export const HomePage = () => (
  <div className="flex flex-col space-y-5">
    <h1 className="mb-5 border-b-2 pb-5">
      <b>
        <i>{appName}</i>
      </b>{' '}
      - {appNameMeaning}
    </h1>

    <p className="text-gray-400">Tech Stack</p>

    <div className="flex justify-center space-x-5">
      {techStack.map(({ href, src, className, alt }) => (
        <ExternalLink key={alt} href={href}>
          <img
            src={src}
            className={cn('logo', className)}
            alt={`logo ${alt}`}
          />
        </ExternalLink>
      ))}
    </div>

    <p className="text-gray-400">Click on the logos to learn more</p>

    <div className="flex justify-center space-x-5">
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
);

export default HomePage;