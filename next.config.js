/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack5: true,
    webpack: config => {
      config.resolve.fallback = {
        fs: false,
      };
  
      return config;
    },
    eslint: {
      ignoreDuringBuilds: true,
    },
}

module.exports = nextConfig
