import * as React from 'react';

import { Lazy, LazyProps } from './Lazy';

export interface ContainerProps extends LazyProps {
  containerClassName?: string;
}

export const Container: React.FunctionComponent<ContainerProps> = ({
  containerClassName,
  ...props
}) => {
  const content = <Lazy {...props} />;
  return (
    <>
      {containerClassName ? (
        <div className={containerClassName}>{content}</div>
      ) : (
        content
      )}
    </>
  );
};

export default Container;
