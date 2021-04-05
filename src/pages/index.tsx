import Head from 'next/head'

import styles from '../styles/pages/Home.module.css'

import { Login } from '../components/Login'

export default function Home() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <div className={styles.container}>
        <div className={styles.center}>
          <h1>Login</h1>
          <Login />
        </div>
      </div>
    </>
  )
}
