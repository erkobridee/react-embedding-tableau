import * as React from 'react';
import cn from 'clsx';

import { useDarkMode } from 'hooks/useDarkMode';

import { ReactComponent as SunIcon } from 'assets/icons/sun.svg';
import { ReactComponent as MoonIcon } from 'assets/icons/moon.svg';

interface DarkModeTogglerProps {
  className?: string;
}

export const DarkModeToggler: React.FunctionComponent<DarkModeTogglerProps> = ({
  className = 'hidden mt-1 mb-1 transition-transform ease-in-out focus:outline-none sm:block hover:text-accent hover:-translate-y-1 focus-visible:outline-accent',
}) => {
  const [isDark, setIsDark] = useDarkMode();

  return (
    <button
      aria-label={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      title={isDark ? 'Activate Light Mode' : 'Activate Dark Mode'}
      onClick={() => {
        setIsDark(!isDark);
      }}
      className={cn(className)}
    >
      {isDark ? <SunIcon /> : <MoonIcon />}
    </button>
  );
};

export default DarkModeToggler;
