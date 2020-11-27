## Getting Started

First, insert your userguiding container code to `pages/_app.js`.

```js
// pages/_app.js
const createUserGuidingScript = () => `
  (function(g,u,i,d,e,s){g[e]=g[e]||[];var f=...
`;
```

Starting development server.

```bash
yarn install
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
