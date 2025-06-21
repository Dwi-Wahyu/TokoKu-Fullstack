import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "5mb",
    },
  },
  images: {
    domains: ["rci0or1xhomc6pxu.public.blob.vercel-storage.com"],
  },
};

export default nextConfig;
