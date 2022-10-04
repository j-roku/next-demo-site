import Head from 'next/head';
import Header from '/components/header';
import 'swiper/css';


export default function Home() {
  const pagename = 'home';
  return (
    <>
      <Head>
        <title>This is NextJs Demo Site</title>
        <meta name="description" content="Hello World this site is demo Site" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header pagename={pagename} />
      <main>

        <h2>gsap animation</h2>


      </main>

      <footer>
      </footer>
    </>
  )
}
