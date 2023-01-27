/*
  useful references

  https://www.pluralsight.com/guides/how-to-use-static-html-with-react

  https://medium.com/the-thinkmill/how-to-safely-inject-html-in-react-using-an-iframe-adc775d458bc
*/

import * as React from 'react';
import cn from 'clsx';

import { DEFAULT_CLASSNAME } from 'app/components/ui/TailwindTypography';

interface RenderHtmlProps {
  className?: string;
  content: string;
}

export const RenderHtml: React.FunctionComponent<RenderHtmlProps> = ({
  className,
  content,
}) => (
  <article
    className={cn(DEFAULT_CLASSNAME, className)}
    dangerouslySetInnerHTML={{ __html: content }}
  />
);

export default RenderHtml;
