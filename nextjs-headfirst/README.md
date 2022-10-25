# NextJS Headfirst

Things you can learn in this solution

- [x] Setup, Debug
- [x] Styles & Assets (images, fonts, ...)
- [x] Main Concepts

## Setup & Debug

### Setup

```bash
npx create-next-app@latest --ts nextjsvietnam-app
```

### Debug

Create a file named .vscode/launch.json at the root of your project with the following content:

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next.js: debug server-side",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev"
    },
    {
      "name": "Next.js: debug client-side",
      "type": "pwa-chrome",
      "request": "launch",
      "url": "http://localhost:3000"
    },
    {
      "name": "Next.js: debug full stack",
      "type": "node-terminal",
      "request": "launch",
      "command": "npm run dev",
      "console": "integratedTerminal",
      "serverReadyAction": {
        "pattern": "started server on .+, url: (https?://.+)",
        "uriFormat": "%s",
        "action": "debugWithChrome"
      }
    }
  ]
}
```

## Styles and Assets

### 1. How to add sass support to NextJS Application?

```bash
npm i sass --save-dev
```

### 2. How to add tailwindcss to NextJS Application?

```bash
npm -D tailwindcss postcss autoprefixer
npx tailwindcss init
npm install -D @tailwindcss/forms
```

```js
// postcss.config.js
module.exports = {
  plugins: {
    tailwindcss: {},
    autoprefixer: {},
  },
};
```

[Tailwind Form](https://github.com/tailwindlabs/tailwindcss-forms)

### 3. Public assets

There are more than 2 ways to use image in nextjs

1. Use img tag and put the relative path

- Your image should be stored in **public** folder
- Use relative path
- Pros: easy and simple
- Cons: you have to optimized image by yourself. Eg: size, lazy load, adaptive images (different images on different device sizes)

2. Use Image component of next/image

- Source can be static or path string
- You can custom image loader
- You can custom image's properties: size, quality
- Support placeholder
- Config remote patterns to protect your application users from external images.
- [NextJS Image Component](https://nextjs.org/docs/api-reference/next/image)
- [NextJS Image Component Examples](https://github.com/vercel/next.js/tree/canary/examples/image-component)

```tsx
import type { NextPage } from "next";
import { useRouter } from "next/router";
import Image from "next/image";
import ImageNext from "next/future/image";
import HomeImage from "../public/assets/images/now-or-never.jpg";

const Home: NextPage = () => {
  const router = useRouter();
  return (
    <>
      <h1 className="heading">Example</h1>
      <p>BasePath: {router.basePath}</p>
      <ImageNext
        alt="Now or never"
        src={HomeImage}
        style={{
          maxWidth: "50%",
          height: "auto",
        }}
      />
      <Image
        alt="now or never"
        src={HomeImage}
        placeholder="blur"
        quality={100}
        style={{}}
      />
      <img
        src="/assets/images/now-or-never.jpg"
        alt="Now or never"
        className="w-1/3 h-auto"
      />
    </>
  );
};

export default Home;
```

3. Optimize Fonts

```tsx
// pages/_document.tsx
import { Html, Head, Main, NextScript } from "next/document";

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
      </body>
    </Html>
  );
}
```

4. Scripts

- Internal scripts
- External scripts

One of the most important things if time to interaction of user. It means user should be able to interact with your website ASAP.
Sometimes if your scripts are too large, this criteria will be increased.
So that NextJS provide us "Script" component which is optimized for loading script automatically.

```tsx
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
```

```tsx
<Script id="website-is-ready" strategy="lazyOnload">
  {`console.log('website is ready!')`}
</Script>
```

### Custom Head

```tsx
import Head from "next/head";
<Head>
  <title>Home Page</title>
  <meta charSet="utf-8" />
  <meta name="viewport" content="initial-scale=1.0, width=device-width" />
</Head>;
```

## Main concepts

### 1. Server Side Render

- The entire website will be rendered on server for every request. Includes: html pages, JSON Data and JS instructions to make component interact

## References

- [NextJS Full Examples](https://github.com/vercel/next.js/tree/canary/examples)
