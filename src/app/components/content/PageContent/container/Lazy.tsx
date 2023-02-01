import * as React from 'react';

import {
  LazyContent,
  LazyContentProps,
} from 'app/components/content/LazyContent';

export interface LazyProps extends LazyContentProps {
  lazy?: boolean;
}

export const Lazy: React.FunctionComponent<LazyProps> = ({
  lazy = false,
  loading,
  children,
}) => (
  <>
    {lazy ? <LazyContent loading={loading}>{children}</LazyContent> : children}
  </>
);

export default Lazy;
