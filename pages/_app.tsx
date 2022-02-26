import '../styles/global.css';

import { AppProps } from 'next/app';
import Head from 'next/head';
import { Toaster } from 'react-hot-toast';

export default function App({
  Component,
  pageProps,
  router,
  err,
}: AppProps | any) {
  return (
    <>
      <Head>
        <meta
          name='viewport'
          content='width=device-width, initial-scale=1, viewport-fit=cover'
        ></meta>
      </Head>

      <Component {...pageProps} err={err} />

      <Toaster
        toastOptions={{
          style: {},
        }}
      />
    </>
  );
}
