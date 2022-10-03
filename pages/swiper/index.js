import Head from 'next/head';
import Image from 'next/image';

import Header from '/components/header';
import Section from '/components/section';

// import styles from '../styles/page/home.module.scss';
import 'swiper/css';


export default function Home() {
  const pagename = 'swiper';
  return (
    <>
      <Head>
        <title>This is NextJs Demo Site</title>
        <meta name="description" content="Hello World this site is demo Site" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header pagename={pagename} />
      <main>

        <h2>Swiper</h2>

      </main>

      <footer>
      </footer>
    </>
  )
}
