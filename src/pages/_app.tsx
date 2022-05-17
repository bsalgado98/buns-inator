import { Provider } from 'react-redux'
import type { AppProps } from 'next/app'
import '../index.css'

import { store } from '../app/store'

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <Component {...pageProps} />
    </Provider>
  )
}