import { NextComponentType } from 'next';
import { AppContext, AppInitialProps, AppProps } from 'next/app';
import { Fragment } from 'react';
import 'tailwindcss/tailwind.css';

const App: NextComponentType<AppContext, AppInitialProps, AppProps> = (props) => {
  const { Component, pageProps } = props;

  return (
    <Fragment>
      <Component {...pageProps} />
    </Fragment>
  );
};

export default App;
