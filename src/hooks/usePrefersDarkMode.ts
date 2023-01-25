import * as React from 'react';

export const usePrefersDarkMode = () => {
  const [value, setValue] = React.useState(true);

  React.useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    setValue(mediaQuery.matches);

    const handler = () => setValue(mediaQuery.matches);

    mediaQuery.addEventListener('change', handler);

    return () => mediaQuery.removeEventListener('change', handler);
  }, []);

  return value;
};

export default usePrefersDarkMode;
