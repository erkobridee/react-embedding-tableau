//---===---//

import * as React from 'react';

import type { IBreadcrumbItem } from './BreadcrumbItem';

//----------------------------------------------------------------------------//

interface BreadcrumbsContextProps {
  items: IBreadcrumbItem[];
}

const BreadcrumbsContext = React.createContext<BreadcrumbsContextProps>({
  items: [],
});

interface BreadcrumbsProviderProps {
  items?: IBreadcrumbItem[];
  children: React.ReactNode;
}

export const BreadcrumbsProvider: React.FunctionComponent<
  BreadcrumbsProviderProps
> = ({ items = [], children }) => (
  <BreadcrumbsContext.Provider value={{ items }}>
    {children}
  </BreadcrumbsContext.Provider>
);

export const useBreadcrumbs = (fallbackItems: IBreadcrumbItem[] = []) => {
  const { items } = React.useContext(BreadcrumbsContext);
  return items.length > 0 ? items : fallbackItems;
};
