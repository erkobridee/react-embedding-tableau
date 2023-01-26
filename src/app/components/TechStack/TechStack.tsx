import * as React from 'react';
import cn from 'clsx';

import { ExternalLink } from 'app/components/ui/ExternalLink';

import { techStack } from 'app/definitions';

export const IconSize = {
  SMALL: 'small',
  LARGE: 'large',
} as const;

export type TIconSizeKeys = keyof typeof IconSize;

export type TIconSizeType = (typeof IconSize)[TIconSizeKeys];

interface TechStackProps {
  iconSize?: TIconSizeType;
}

export const TechStack: React.FunctionComponent<TechStackProps> = ({
  iconSize = IconSize.LARGE,
}) => (
  <>
    {' '}
    {techStack.map(({ href, src, className, alt }) => (
      <ExternalLink key={alt} href={href}>
        <img
          src={src}
          className={cn('logo', className, {
            'h-16 p-2 lg:h-24 lg:p-6': iconSize === IconSize.LARGE,
            'h-8 p-2 lg:h-10': iconSize === IconSize.SMALL,
            'hover:drop-shadow-[0_0_1rem_#61dafbaa] motion-safe:animate-spin-slow':
              className === 'react',
            'hover:drop-shadow-[0_0_1rem_#646cffaa]':
              className === 'typescript',
            'hover:drop-shadow-[0_0_1rem_#111827aa] dark:hover:drop-shadow-[0_0_1rem_#ffffffaa]':
              !['react', 'typescript'].includes(className ?? ''),
          })}
          alt={`logo ${alt}`}
        />
      </ExternalLink>
    ))}
  </>
);

export default TechStack;
