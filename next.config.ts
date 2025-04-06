import type { NextConfig } from "next";
import { start } from "repl";

const nextConfig: NextConfig = {
  // output: "export",
  next: start,
  trailingSlash: true,
  images: {
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
};

export default nextConfig;
