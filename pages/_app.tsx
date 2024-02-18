/* eslint-disable react/react-in-jsx-scope */
import { AppProps } from 'next/app';

import '../styles/index.css';

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}

export default MyApp;
