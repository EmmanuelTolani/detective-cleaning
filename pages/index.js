import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Detective Cleaning</title>
        <meta name="description" content="Detective Cleaning Service" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
     <div>
      <section className="hero">
        <div className='hero__container'>
          <div className='hero__left'>
            <h1>
            We will clean your stress away.
            </h1>
            <h2>
              The only Cleaners you can trust
            </h2>
          </div>
          <div className='hero__right'>
            
          </div>
        </div>
      </section>
     </div>
    </div>
  )
}
