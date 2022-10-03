import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

import Header from '/components/header';
import Section from '/components/section';

import {getPosts,getPost} from '/libs/client';

// import styles from '../styles/page/home.module.scss';
import 'swiper/css';


export default function NewsId({post}) {
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
        <Section>
          <h3>{post.title.rendered}</h3>
          <article dangerouslySetInnerHTML={{
            __html: `${post.content.rendered}`
          }}>
          </article>
        </Section>
      </main>

      <footer>
      </footer>
    </>
  )
}

// 全ての記事を指定して
export const getStaticPaths = async () => {
  const posts = await getPosts({
    postType:'news',
    fields: 'id',
    // postsPerPage: 100, // 全記事取得のクエリが欲しい(WPRestPIの上限が100)
  });
  const paths = posts.map((post) => `/news/${post.id}`);
  return { paths, fallback: false };
};


export async function getStaticProps(context) {

  const postId = context.params.id;

  const post = await getPost({
    postType:'news',
    id: postId,
    // fields: 'id,title,link'
  });
  return {
    props: {
      post: post[0],
    }
  }
}
