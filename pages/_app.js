import '../styles/globals.css'
import AppLayout from '../components/app-layout'
import { Fragment } from 'react'

function MyApp({ Component, pageProps }) {
  return (
    <Fragment>
      <AppLayout>
        <Component {...pageProps} />
      </AppLayout>
    </Fragment>
  )
}

export default MyApp
