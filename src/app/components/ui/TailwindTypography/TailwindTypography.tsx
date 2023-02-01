import * as React from 'react';

import cn from 'clsx';

interface TailwindTypographyProps {
  className?: string;
  children: React.ReactNode;
}

export const DEFAULT_CLASSNAME =
  'prose prose-sm prose-slate prose-a:no-underline hover:prose-a:underline dark:prose-invert lg:prose-base';

export const TailwindTypography: React.FunctionComponent<
  TailwindTypographyProps
> = ({ className, children }) => (
  <article className={cn(DEFAULT_CLASSNAME, className)}>{children}</article>
);

export default TailwindTypography;
