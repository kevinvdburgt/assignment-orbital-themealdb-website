import classNames from 'classnames';
import { FunctionComponent, ReactNode } from 'react';

export interface TitleProps {
  type: 'h1' | 'h2';
  children: ReactNode;
  className?: string;
}

export const Title: FunctionComponent<TitleProps> = (props) => {
  const { type, className, children } = props;

  switch (type) {
    case 'h1':
      return (
        <h1 className={classNames('text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate', className)}>
          {children}
        </h1>
      );

    case 'h2':
      return (
        <h2 className={classNames('text-1xl font-bold leading-7 sm:text-2xl sm:truncate', className)}>{children}</h2>
      );
  }
};
