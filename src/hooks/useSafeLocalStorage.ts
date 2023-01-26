import * as React from 'react';

export const useSafeLocalStorage = <T>(
  key: string,
  initialValue?: T
): [T | undefined, (value?: T) => void] => {
  const [valueProxy, setValueProxy] = React.useState<T | undefined>(() => {
    try {
      const value = window.localStorage.getItem(key);

      return value ? JSON.parse(value) : initialValue;
    } catch {
      return initialValue;
    }
  });

  const setValue = (value?: T): void => {
    if (value === undefined) return;

    try {
      window.localStorage.setItem(key, JSON.stringify(value));
      setValueProxy(value);
    } catch {
      setValueProxy(value);
    }
  };

  return [valueProxy, setValue];
};

export default useSafeLocalStorage;
