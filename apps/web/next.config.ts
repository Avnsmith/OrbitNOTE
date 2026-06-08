import type { NextConfig } from "next";

console.log("BUILD_TIME_ENV_DB:", process.env.DATABASE_URL);
console.log("BUILD_TIME_ENV_SRK:", process.env.SUPABASE_SERVICE_ROLE_KEY);

const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
