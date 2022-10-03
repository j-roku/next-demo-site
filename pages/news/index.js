import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Header from '/components/header';
import Section from '/components/section';

import {getPosts} from '/libs/client';

// import styles from '../styles/page/home.module.scss';
import 'swiper/css';


export default function News({posts}) {
  const pagename = 'news';
  return (
    <>
      <Head>
        <title>This is NextJs Demo Site</title>
        <meta name="description" content="Hello World this site is demo Site" />
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>
      <Header pagename={pagename} />
      <main>
        <h2>News</h2>
        <Section>
          <ul>
            {
              posts.map(({id,title}) => {
                return (
                  <li key={id}>
                    <>
                      <Link href={`/news/${id}`}>
                        <a>
                        <h3>{title.rendered}</h3>
                        </a>
                      </Link>
                    </>
                  </li>
                )
              })
            }
          </ul>
        </Section>
      </main>

      <footer>
      </footer>
    </>
  )
}


export async function getStaticProps() {
  const posts = await getPosts({
    postType:'news',
    // fields: 'id,title,link'
  });
  console.log(posts);
  return {
    props: {
      posts: posts,
    }
  }
}
