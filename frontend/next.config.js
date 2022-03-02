/**
 * @type {import('next').NextConfig}
 */
const path = require("path");

const nextConfig = {
  images: {
    loader: "default",
    domains: ["localhost"],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  i18n: {
    // providing the locales supported by your application
    locales: ["en", "fr", "es", "de", "pa"],
    //  default locale used when the non-locale paths are visited
    defaultLocale: "en",
    localePath: path.resolve('./public/static/locales')
  }

}

module.exports = nextConfig
