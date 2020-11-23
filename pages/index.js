import Controller from '../components/controller'
import Main from '../components/main'
import { ToastContainer } from 'react-toastify'
import styles from './index.module.css'
import Head from 'next/head'

export default function Home () {
  return (
    <div>
      <Head>
        <title>visualize-8-queen-next.js</title>
        <link rel="icon" href="favicon.ico" />
      </Head>

      <nav className="navbar is-light">
        <div className="container">
          <div className="navbar-brand">
            <div className="navbar-item title is-3">
              Visualize 8-queen
            </div>
          </div>
        </div>
      </nav>

      <div className="container">
        <div className="columns my-0">
          <div className={`column pt-5 ${styles['column-controller']}`}>
            <Controller/>
          </div>
          <div className={`column is-9 pt-5 ${styles['column-main']}`}>
            <Main/>
          </div>
        </div>
      </div>
      <div>
        <ToastContainer />
      </div>
    </div>
  )
}
