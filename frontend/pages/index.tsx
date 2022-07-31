import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../common/styles/Home.module.scss'

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Everything Lists</title>
        <meta name="description" content="Everyone needs to have control about your life, so start with a list!" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Everything list
        </h1>

      </main>

      <footer className={styles.footer}>
        <a>
          Powered by{' '}
          <span className={styles.logo}>
            <Image src="/logo.png" alt="DevJES Logo" width={60} height={23.63} />
          </span>
        </a>
      </footer>
    </div>
  )
}

export default Home
