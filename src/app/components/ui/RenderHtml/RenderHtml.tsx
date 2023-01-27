/*
  useful references

  https://www.pluralsight.com/guides/how-to-use-static-html-with-react

  https://medium.com/the-thinkmill/how-to-safely-inject-html-in-react-using-an-iframe-adc775d458bc
*/

import * as React from 'react';
import cn from 'clsx';

interface RenderHtmlProps {
  className?: string;
  content: string;
}

export const RenderHtml: React.FunctionComponent<RenderHtmlProps> = ({
  className,
  content,
}) => (
  <article
    className={cn(
      'prose prose-sm prose-slate prose-a:no-underline hover:prose-a:underline dark:prose-invert lg:prose-base',
      className
    )}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export default RenderHtml;
