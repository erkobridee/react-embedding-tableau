import * as React from 'react';

import { AppHelmet } from './AppHelmet';

export interface ProviderProps {
  children: React.ReactNode;
}

export const Providers: React.FunctionComponent<ProviderProps> = ({
  children,
}) => <AppHelmet>{children}</AppHelmet>;

export default Providers;
