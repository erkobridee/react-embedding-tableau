import * as React from 'react';

export const lazyDelayed = (
  importFn: () => Promise<{ default: React.ComponentType }>,
  delay = 500
) =>
  React.lazy(() =>
    Promise.all([
      importFn(),
      new Promise((resolve) => setTimeout(resolve, delay)),
    ]).then(([module]) => module)
  );

export default lazyDelayed;
