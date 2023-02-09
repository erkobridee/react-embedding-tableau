import * as React from 'react';

export const useDidUpdate = (fn: () => void, deps?: React.DependencyList) => {
  const firstRunRef = React.useRef(true);

  React.useEffect(
    () => {
      if (firstRunRef.current) {
        firstRunRef.current = false;
      } else {
        fn();
      }
    },
    /* eslint-disable-next-line react-hooks/exhaustive-deps */
    deps
  );
};

export default useDidUpdate;
