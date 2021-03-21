import { AppProps } from 'next/app'

import '../asset/globa-style.scss'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

export default MyApp
