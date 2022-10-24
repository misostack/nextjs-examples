# NextJS Headfirst

## Install

```bash
npx create-next-app@latest --ts nextjsvietnam-app
```

## Debug

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

## Main concepts

### 1. Server Side Render

- The entire website will be rendered on server for every request. Includes: html pages, JSON Data and JS instructions to make component interact

## Styles and Assets

### 1. How to add sass support to NextJS Application?

```bash
npm i sass --save-dev
```

### 2. How ta add tailwindcss to NextJS Application?

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
