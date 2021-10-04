import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <script
            async
            type="application/javascript"
            src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`}
          />
          {/* eslint-disable-next-line @next/next/no-sync-scripts */}
          <script
            type="application/javascript"
            src="/scripts/ga.js"
            data-ga={process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
