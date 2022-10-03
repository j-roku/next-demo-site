import Image from 'next/image';
import Head from 'next/head';
import Link from 'next/link';

import { Swiper, SwiperSlide } from 'swiper/react';

import Header from '../components/header';
import Section from '../components/section';

import styles from '../styles/page/home.module.scss';
import 'swiper/css';




const caseList = [
  {
    id: 1,
    url: '/about/',
    title: 'About',
  },
  {
    id: 2,
    url: '/gsap-animation/',
    title: 'GSAP Animation',
  },
  {
    id: 3,
    url: '/swiper/',
    title: 'Swiper',
  },
  {
    id: 4,
    url: '',
    title: 'JAMSTACK',
  },
  {
    id: 5,
    url: '',
    title: 'ThreeJS Animation',
  },
  {
    id: 6,
    url: '',
    title: 'Form',
  },
]

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

        <Section name="fv" id="section-1">
          <div className={styles.homeFv}>
            <h2 className="font-en">Hello World!!<br/> This site is a demo using NextJS.</h2>
            <p>このサイトはNextJSを利用してウェブサイトを構築する為のノウハウを得るために実験的に構築されました。<br/>なので、サイト内の文章や写真に意味はありません。</p>
          </div>
        </Section>

        <Section name="lead" id="section-2" wrapperSize="s">
          <div className={styles.homeLead}>
            <h3 className='font-en'>Hello World</h3>
            <figure>
              <Image src="/images/pic-1.webp" width="1280" height="960" loading="lazy"/>
            </figure>
            <p>今日はひるすぎ、うっかりしてこうしの柵をまわってあそんでいるだろうか、ああぼくはその中をどこまでもどこまでもいっしょに行けない。けれども昔はそれを水銀と塩でできていると、そこらじゅうきいんと鳴るように思いました。ルビーよりも赤くすきとおり、リチウムよりもうつくしく酔ったようにまっ黒な上着を着た巡査も出ていました。線路のへりになったのです。河原のいちばん下流の方の窓を見ると、その白い岩の上を走って下りました。</p>
            <br/>
            <Link href="/about/">このサイトについて</Link>
          </div>
        </Section>

        <Section name="case" id="section-3" outer={true}>
          <div className={styles.homeCase}>
            <h3 className="font-en">Case</h3>
            <Swiper
              spaceBetween={50}
              slidesPerView={3}
              className={styles.homeCase__slider}
            >
              {
                caseList.map( (caseItem,i) => {
                  return (
                    <SwiperSlide className={styles.homeCase__slideItem} key={`${caseItem.id}-${i}`}>
                      <>
                      <Link href={caseItem.url}>
                        <a>
                        <div className={styles.homeCase__slideItemTitle}>
                          {caseItem.title}
                        </div>
                        </a>
                      </Link>
                      </>
                    </SwiperSlide>
                  )

                })
              }
            </Swiper>
          </div>
        </Section>

      </main>

      <footer>
      </footer>
    </>
  )
}
