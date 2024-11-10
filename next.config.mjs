import { withSentryConfig } from "@sentry/nextjs";
/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

// Simplify the Sentry configuration to use only one org/project
export default withSentryConfig(nextConfig, {
  org: "care-pulse-7w", // Use only one org value
  project: "javascript-nextjs",

  silent: !process.env.CI,
  widenClientFileUpload: true,
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
});

// Am adding only care pulse information here
