import * as React from 'react';
import { HelmetProvider, Helmet as HelmetAsync } from 'react-helmet-async';

import { author, appName, appNameMeaning, keywords } from 'app/definitions';

//----------------------------------------------------------------------------//

const helmetContext = {};

export interface AppHelmetProps {
  children: React.ReactNode;
}

export const AppHelmet: React.FunctionComponent<AppHelmetProps> = ({
  children,
}) => (
  <HelmetProvider context={helmetContext}>
    <HelmetAsync>
      <meta name="description" content={appNameMeaning} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content={author} />

      <title>{appName}</title>
    </HelmetAsync>
    {children}
  </HelmetProvider>
);

export default AppHelmet;
