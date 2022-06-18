import { FunctionComponent, ReactNode } from 'react';

export interface HeaderContainerProps {
  children: ReactNode;
}

export const HeaderContainer: FunctionComponent<HeaderContainerProps> = (props) => {
  const { children } = props;

  return <div className="mt-8 lg:flex lg:items-center lg:justify-between">{children}</div>;
};
