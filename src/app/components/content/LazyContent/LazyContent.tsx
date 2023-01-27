import * as React from 'react';

export interface LazyContentProps {
  loading?: React.ReactNode;
  children: React.ReactNode;
}

export const LazyContent: React.FunctionComponent<LazyContentProps> = ({
  loading = <>Loading...</>,
  children,
}) => <React.Suspense fallback={loading}>{children}</React.Suspense>;

export default LazyContent;
