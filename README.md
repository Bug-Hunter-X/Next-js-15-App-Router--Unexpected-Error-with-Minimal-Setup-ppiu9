# Next.js 15 App Router Unexpected Error

This repository demonstrates a seemingly simple Next.js 15 application that can throw unexpected errors if the `next.config.js` file isn't correctly configured, especially when using experimental features like the App Router. 

## Issue
A minimal Next.js app, designed to simply display 'Hello', might unexpectedly fail due to configuration issues.  The exact error may vary depending on the specific misconfiguration.

## Solution
The solution involves careful review and correction of the `next.config.js` file.  Common mistakes include improper settings for `experimental` features.  Ensure that these settings are consistent with your application's needs and the official Next.js documentation.