import "../styles/globals.scss";
import type { AppProps } from "next/app";
import { IonAuthProvider } from "@/shared/libs/ion-auth";
import { getCookie } from "cookies-next";
import { GetServerSidePropsContext, NextPageContext } from "next";

function MyApp({
  Component,
  pageProps,
}: AppProps & { pageProps: { session: any } }) {
  console.log("[APP]", pageProps);
  // you can attach page props here
  const { session, ...props } = pageProps;
  return (
    <IonAuthProvider initialSession={session}>
      <Component {...props} />
    </IonAuthProvider>
  );
}

MyApp.getInitialProps = async ({
  Component,
  ctx,
}: {
  Component: any;
  ctx: NextPageContext;
}) => {
  const { req, res } = ctx;
  // create session here
  const sessionCookie = getCookie("session", { req, res });
  // exchange sessionCookie to retrieve session
  const session: any | null = sessionCookie
    ? {
        uid: 1,
        accessToken: "access_token",
        refreshToken: "refresh_token",
        permissions: [],
      }
    : { uid: 1 };

  return {
    pageProps: {
      session,
    },
  };
};

export default MyApp;
