import '../styles/globals.css'
import {NextPage} from 'next'
import { ReactElement } from 'react';
import { AppProps } from '../node_modules/next/app';

type NextPageWithLayout = NextPage & {
  getLayout?: ( page: ReactElement ) => JSX.Element
}

type AppPropsWithLayout = AppProps & {
  Component: NextPageWithLayout
}

function MyApp({ Component, pageProps }: AppPropsWithLayout) {

  const getLayout = Component.getLayout || ((page) => page );

  // return (
  //   <>
  //     <Component {...pageProps} />
  //   </>
  // )
  return getLayout( <Component {...pageProps} /> )
}

export default MyApp
