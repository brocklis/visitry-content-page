import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from "next/head"

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/static/favicon.ico" />
        <link href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans:wght@400;700;800&display=swap" rel="stylesheet" />
      </Head>
      <Component {...pageProps} />
    </div>
  )
}

export default MyApp
