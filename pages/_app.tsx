import '../styles/global.css';

import type { AppProps } from 'next/app';

function App(props: AppProps) {
  const { Component, pageProps } = props;

  return <Component {...pageProps} />;
}

export default App;