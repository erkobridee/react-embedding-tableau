import cn from 'clsx';

import { ExternalLink } from 'app/components/ui/ExternalLink';

import { appName, appNameMeaning, techStack } from 'app/definitions';

export const HomePage = () => (
  <div className="home flex flex-col space-y-5 py-20 text-center md:h-full md:justify-center lg:py-0">
    <h1 className="mb-5 border-b-2 pb-5 text-5xl">
      <b>
        <i>{appName}</i>
      </b>{' '}
      - {appNameMeaning}
    </h1>

    <p>Tech Stack</p>

    <div className="flex justify-center space-x-5">
      {techStack.map(({ href, src, className, alt }) => (
        <ExternalLink key={alt} href={href}>
          <img
            src={src}
            className={cn('logo h-16 p-2 lg:h-24 lg:p-6', className, {
              'hover:drop-shadow-[0_0_1rem_#61dafbaa] motion-safe:animate-spin-slow':
                className === 'react',
              'hover:drop-shadow-[0_0_1rem_#646cffaa]':
                className === 'typescript',
              'hover:drop-shadow-[0_0_1rem_#ffffffaa]': ![
                'react',
                'typescript',
              ].includes(className ?? ''),
            })}
            alt={`logo ${alt}`}
          />
        </ExternalLink>
      ))}
    </div>

    <p>Click on the logos to learn more</p>
  </div>
);

export default HomePage;
