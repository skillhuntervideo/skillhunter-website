import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  // No basePath needed — deploying to root of hotels.skillhunter.jp
};

export default nextConfig;
