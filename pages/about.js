import Head from 'next/head';
import Image from 'next/image';

import Header from '../components/header';
import Section from '../components/section';

// import styles from '../styles/page/home.module.scss';
import 'swiper/css';
import { useEffect } from 'react';


export default function Home() {
  const pagename = 'about';
  useEffect(() => {

  })
  return (
    <>
      <Head>
        <title>This is NextJs Demo Site</title>
        <meta name="description" content="Hello World this site is demo Site" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header pagename={pagename} />
      <main>
        <h2>About</h2>
      </main>
      <footer>
      </footer>
    </>
  )
}
