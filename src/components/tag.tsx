import { FunctionComponent, ReactNode } from 'react';

export interface TagProps {
  icon?: ReactNode;
  children: ReactNode;
}

export const Tag: FunctionComponent<TagProps> = (props) => {
  const { icon, children } = props;

  return (
    <div className="mt-2 flex items-center text-sm text-gray-500">
      {icon}
      {children}
    </div>
  );
};
