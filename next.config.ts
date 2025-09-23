// import type { NextConfig } from "next";

// const nextConfig: NextConfig = {
//   images:{
// remotePatterns:[new URL ('https://ecommerce.routemisr.com/**/**')]
//   }
// };

// export default nextConfig;

import type { NextConfig } from "next";
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

const nextConfig: NextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "ecommerce.routemisr.com",
        pathname: "/**",
      },
    ],
  },
});

export default nextConfig;

