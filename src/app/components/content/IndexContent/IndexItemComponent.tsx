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
  icon,
  description,
}) => (
  <div className="flex items-start space-x-2">
    {icon}

    <Link key={to} className="text-lg font-medium hover:underline" to={to}>
      {label}
    </Link>
    {description ? (
      <>
        <span>-</span> <span>{description}</span>
      </>
    ) : null}
  </div>
);

export default IndexItem;
