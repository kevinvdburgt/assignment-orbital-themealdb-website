import { FunctionComponent, ReactNode } from 'react';

export interface TagContainerProps {
  children: ReactNode;
}

export const TagContainer: FunctionComponent<TagContainerProps> = (props) => {
  const { children } = props;

  return <div className="mt-1 flex flex-col sm:flex-row sm:flex-wrap sm:mt-0 sm:space-x-6">{children}</div>;
};
