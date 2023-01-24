import '../styles/globals.scss'
import type { AppProps } from 'next/app'
import Header from 'common/components/Header'
import Footer from 'common/components/Footer'
import MobileHeader from '../common/components/MobileHeader/MobileHeader'
import Head from 'next/head'

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <div style={{ position: 'relative' }}>
      <Head>
        <title>Simparts</title>
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="manifest" href="/site.webmanifest" />
        <link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff"></meta>
      </Head>
      <Header />
      <MobileHeader />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}
