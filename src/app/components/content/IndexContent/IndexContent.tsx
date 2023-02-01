import * as React from 'react';

import cn from 'clsx';

import { IndexItem, IndexItemComponent } from './IndexItemComponent';

interface IndexContentProps {
  className?: string;
  items: IndexItem[];
}

export const IndexContent: React.FunctionComponent<IndexContentProps> = ({
  className,
  items,
}) => (
  <div className={cn('flex flex-col', className)}>
    {items.map((item, index) => (
      <IndexItemComponent key={index} {...item} />
    ))}
  </div>
);

export default IndexContent;
