import {Swiper,SwiperSlide} from 'swiper/react';

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


        <Section>
          <h2>Swiper</h2>

          <Swiper
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
          >
            <SwiperSlide>Slide 1</SwiperSlide>
            <SwiperSlide>Slide 2</SwiperSlide>
            <SwiperSlide>Slide 3</SwiperSlide>
            <SwiperSlide>Slide 4</SwiperSlide>
          </Swiper>

        </Section>

      </main>

      <footer>
      </footer>
    </>
  )
}
