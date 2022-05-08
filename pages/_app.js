import 'styles/globals.scss'
import Head from 'next/head'
function MyApp({ Component, pageProps }) {
  return (
    <>
    <Head>
      <title>我的博客——darkTi</title>
    </Head>
    <Component {...pageProps} />
    </>
  )
  
  
  
}

export default MyApp
