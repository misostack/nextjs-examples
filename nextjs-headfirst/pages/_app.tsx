import "../styles/globals.scss";
import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  console.log("[APP]", pageProps);
  // you can attach page props here
  return <Component {...pageProps} />;
}

export default MyApp;
