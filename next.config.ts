import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  i18n: {
    locales: ['en', 'fr', 'es', 'de'],
    defaultLocale: 'en',
  },
};

export default nextConfig;
