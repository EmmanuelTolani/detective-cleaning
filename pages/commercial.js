import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Commercial() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Commercial Cleaning</title>
        <meta name="description" content="Detective Cleaning Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     Commercial Clean
    </div>
  )
}