import React, { FC, PropsWithChildren } from 'react';

interface ContainerProps extends PropsWithChildren {}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-screen-2xl">{children}</div>;
};

export default Container;
