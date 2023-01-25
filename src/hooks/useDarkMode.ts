import * as React from 'react';

import { usePrefersDarkMode } from './usePrefersDarkMode';
import { useSafeLocalStorage } from './useSafeLocalStorage';

export const useDarkMode = (): [
  boolean | undefined,
  (value?: boolean) => void
] => {
  const [isEnabled, setIsEnabled] = useSafeLocalStorage<boolean | undefined>(
    'dark-mode',
    undefined
  );

  const prefersDarkMode = usePrefersDarkMode();

  const enabled = isEnabled === undefined ? prefersDarkMode : isEnabled;

  React.useEffect(() => {
    if (window === undefined) return;

    const root = window.document.documentElement;

    root.classList.remove(enabled ? 'light' : 'dark');
    root.classList.add(enabled ? 'dark' : 'light');
  }, [enabled]);

  return [enabled, setIsEnabled];
};

export default useDarkMode;
