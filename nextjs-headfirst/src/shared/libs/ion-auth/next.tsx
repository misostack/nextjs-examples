import { GetServerSideProps, GetServerSidePropsContext } from "next";
import { getCookie } from "cookies-next";
import { IonAuthSession } from ".";
export function withIonAuthSsr<T>(gssp: GetServerSideProps) {
  return async (context: GetServerSidePropsContext) => {
    const { req, res } = context;
    // create session here
    const sessionCookie = getCookie("session", { req, res });
    console.error(sessionCookie);
    // exchange sessionCookie to retrieve session
    const session: IonAuthSession | null = sessionCookie
      ? {
          uid: 1,
          accessToken: "access_token",
          refreshToken: "refresh_token",
          permissions: [],
        }
      : null;
    const gsspData = (await gssp(context)) as T;
    return {
      props: {
        ...gsspData,
        session,
      },
    };
  };
}
