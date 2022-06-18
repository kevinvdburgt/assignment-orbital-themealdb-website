import { FunctionComponent, ReactNode } from 'react';

export interface ContainerProps {
  children: ReactNode;
}

export const Container: FunctionComponent<ContainerProps> = (props) => {
  const { children } = props;

  return <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">{children}</div>;
};
