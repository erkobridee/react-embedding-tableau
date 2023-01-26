import cn from 'clsx';

import { ExternalLink } from 'app/components/ui/ExternalLink';

import { appName, appNameMeaning, techStack } from 'app/definitions';

import './HomePage.css';

export const HomePage = () => (
  <div className="home flex flex-col space-y-5 py-20 text-center lg:h-full lg:justify-center lg:py-0">
    <h1 className="mb-5 border-b-2 pb-5">
      <b>
        <i>{appName}</i>
      </b>{' '}
      - {appNameMeaning}
    </h1>

    <p className="text-gray-600 dark:text-gray-400">Tech Stack</p>

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

    <p className="text-gray-600 dark:text-gray-400">
      Click on the logos to learn more
    </p>
  </div>
);

export default HomePage;
