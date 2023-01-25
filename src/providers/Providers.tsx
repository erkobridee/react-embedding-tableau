import * as React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { AppHelmet } from './AppHelmet';

export interface ProviderProps {
  children: React.ReactNode;
}

export const Providers: React.FunctionComponent<ProviderProps> = ({
  children,
}) => (
  <AppHelmet>
    <BrowserRouter>{children}</BrowserRouter>
  </AppHelmet>
);

export default Providers;
