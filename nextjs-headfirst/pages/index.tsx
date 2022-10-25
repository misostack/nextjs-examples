import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import ImageNext from "next/future/image";
import HomeImage from "../public/assets/images/now-or-never.jpg";
import Script from "next/script";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="heading">Example</h1>
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
      {/* <img
        src="/assets/images/now-or-never.jpg"
        alt="Now or never"
        className="w-1/3 h-auto"
      /> */}
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

export default Home;
