import { Html, Head, Main, NextScript } from "next/document";
import Script from "next/script";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
        <Script
          async
          defer
          crossOrigin="anonymous"
          nonce="mFAfERTS"
          src="https://connect.facebook.net/vi_VN/sdk.js#xfbml=1&version=v15.0&appId=1778717048805106&autoLogAppEvents=1"
          strategy="lazyOnload"
        />
        <div id="fb-root"></div>
      </body>
    </Html>
  );
}
