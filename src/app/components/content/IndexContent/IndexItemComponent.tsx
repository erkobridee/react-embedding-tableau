import * as React from 'react';

import { Link } from 'react-router-dom';

export interface IndexItem {
  to: string;
  label: React.ReactNode;
  icon?: React.ReactNode;
  description?: React.ReactNode;
  image?: string;
}

export const IndexItemComponent: React.FunctionComponent<IndexItem> = ({
  to,
  label,
}) => (
  <Link key={to} className="text-lg hover:underline" to={to}>
    {label}
  </Link>
);

export default IndexItem;
