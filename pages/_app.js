import '../styles/globals.css'
import 'bulma/bulma.sass'
import 'react-toastify/dist/ReactToastify.css'
import '../styles/toastr.css'

import App from 'next/app'
import withReduxStore from '../lib/redux-store'
import { Provider } from 'react-redux'

class _App extends App {
  render () {
    const { Component, pageProps, reduxStore } = this.props
    return (
        <Provider store={reduxStore}>
          <Component {...pageProps} />
        </Provider>
    )
  }
}

export default withReduxStore(_App)
