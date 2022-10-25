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
<img
  src="/assets/images/now-or-never.jpg"
  alt="Now or never"
  className="w-1/3 h-auto"
/>
```

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

## Main concepts

### 1. Server Side Render

- The entire website will be rendered on server for every request. Includes: html pages, JSON Data and JS instructions to make component interact