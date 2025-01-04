```javascript
// next.config.js

/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    // Ensure this is correctly configured based on your project needs.
    // For example, if using App Router (next/app-dir), you might need:
    // appDir: true,
    // Other experimental features should be reviewed for consistency
  },
};

module.exports = nextConfig;
```

Make sure the `next.config.js` file is configured correctly,  especially the `experimental` object to support any experimental features you might be using in your Next.js application.