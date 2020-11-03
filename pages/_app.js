/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import { Provider as ReduxProvider } from 'react-redux'
import { useStore } from '../src/redux/store'
import '../scss/globals.scss'

function MyApp({ Component, pageProps }) {
  const store = useStore()

  return (
    <ReduxProvider store={store}>
      <Component {...pageProps} />
    </ReduxProvider>
  )
}

export default MyApp
