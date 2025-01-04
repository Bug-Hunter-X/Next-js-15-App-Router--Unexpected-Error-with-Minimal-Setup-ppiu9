```javascript
// pages/index.js

export default function Home() {
  return (
    <div>Hello</div>
  );
}
```

This simple Next.js app might surprisingly throw an error if you have a specific configuration issue related to the `experimental` features or if you have incorrectly configured the `next.config.js` file.  The error might be related to incorrect usage of features like `appDir`, `serverComponents`, or other experimental settings that are not correctly configured.