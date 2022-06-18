import classNames from 'classnames';
import { FunctionComponent, HTMLAttributes, ReactNode } from 'react';

export interface ButtonProps {
  children: ReactNode;
}

export const Button: FunctionComponent<ButtonProps & HTMLAttributes<HTMLButtonElement>> = (props) => {
  const { children, className, ...rest } = props;

  return (
    <button
      className={classNames(
        'inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500',
        className,
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
