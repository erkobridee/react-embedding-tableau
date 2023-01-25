import React from 'react';
import ReactDOM from 'react-dom/client';

import 'assets/styles/global.css';

import Providers from 'providers';
import App from 'app';

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Providers>
      <App />
    </Providers>
  </React.StrictMode>
);
