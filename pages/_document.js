import Document, { Html, Head, Main, NextScript } from 'next/document';
import {useRouter} from 'next/router';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head>
          <link
            href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;700&family=Noto+Sans+JP:wght@400;500;700&display=optional"
            rel="stylesheet"
          />
        </Head>
        <body className='l-body'>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument;
