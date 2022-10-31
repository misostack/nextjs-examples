import type {
  GetServerSideProps,
  InferGetServerSidePropsType,
  NextPage,
} from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import Image from "next/image";
import ImageNext from "next/future/image";
import HomeImage from "@/public/assets/images/now-or-never.jpg";
import Script from "next/script";
import Link from "next/link";
import { getCookie } from "cookies-next";

import {
  signedIn,
  signedOut,
  useIonAuthDispatch,
  useSession,
} from "@/shared/libs/ion-auth";
import { withIonAuthSsr } from "@/shared/libs/ion-auth/next";

interface HomePageProps {
  title: string;
  description: string;
}

const Home: NextPage<InferGetServerSidePropsType<typeof getServerSideProps>> = (
  props: InferGetServerSidePropsType<typeof getServerSideProps>
) => {
  const router = useRouter();
  console.log("[COMPONENT RENDER]", props);
  const session = useSession();
  const dispatch = useIonAuthDispatch();
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <meta name="description" content={props.description} />
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <h1 className="heading">Example {props.title}</h1>
      <Link href={"/products/category-1"}>Test 1</Link>
      <ul className="flex">
        {Array.from(new Array(5)).map((_, index) => (
          <li className="p-2" key={index + 1}>
            <Link href={`/products/category-${index + 1}`}>{`Category ${
              index + 1
            }`}</Link>
          </li>
        ))}
      </ul>
      <p>{props.description}</p>
      <button
        className="bg-green-600"
        onClick={() => {
          session?.uid
            ? signedOut(dispatch)
            : signedIn(dispatch, {
                uid: 1,
                accessToken: "",
                refreshToken: "",
                permissions: [],
              });
        }}
      >
        {session?.uid ? "LOGOUT" : "LOGIN"}
      </button>
      {JSON.stringify(session)}
      <p>BasePath: {router.basePath}</p>
      <ImageNext
        alt="Now or never"
        src={HomeImage}
        width={HomeImage.width / 2}
        height={(HomeImage.height * (HomeImage.width / HomeImage.height)) / 2}
        style={{
          maxWidth: "50%",
          height: "auto",
        }}
      />
      <Image
        alt="now or never"
        src={HomeImage}
        placeholder="blur"
        quality={70}
        width={HomeImage.width / 2}
        height={(HomeImage.height * (HomeImage.width / HomeImage.height)) / 2}
        style={{}}
      />
      <img
        src="/assets/images/now-or-never.jpg"
        alt="Now or never"
        className="w-1/3 h-auto"
      />
      <div
        className="fb-like"
        data-href="https://developers.facebook.com/docs/plugins/"
        data-width=""
        data-layout="standard"
        data-action="like"
        data-size="small"
        data-share="true"
      ></div>
      <Script id="website-is-ready" strategy="lazyOnload">
        {`console.log('website is ready!')`}
      </Script>
    </>
  );
};
// const getServerSidePropsDefault: GetServerSideProps<HomePageProps> = ;
// export const getServerSideProps = withIonAuthSsr<HomePageProps>(
//   async (context) => {
//     return {
//       props: {
//         title: "Home page",
//         description: "NestJS Headfirst",
//       },
//     };
//   }
// );
export const getServerSideProps: GetServerSideProps<HomePageProps> = async (
  context
) => {
  return {
    props: {
      title: "Home page",
      description: "NestJS Headfirst",
    },
  };
};

export default Home;
