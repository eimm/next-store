import React, { FC, PropsWithChildren } from "react";

interface ContainerProps extends PropsWithChildren {}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className="mx-auto max-w-7xl">{children}</div>;
};

export default Container;
