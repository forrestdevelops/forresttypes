import Head from 'next/head'
import '/styles/globals.css'
import Layout from 'components/Layout'

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Head>
        <title>Forrest Types</title>
        <meta name="description" content="Forrest's thoughts, stories, and ideas." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Component {...pageProps} />
    </Layout>)
}
