import { FunctionComponent } from 'react';

export interface ImageProps {
  src: string;
}

export const Image: FunctionComponent<ImageProps> = (props) => {
  const { src } = props;

  return <img src={src} className="rounded-lg" />;
};
