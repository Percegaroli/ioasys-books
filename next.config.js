/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
            titleProp: true,
            replaceAttrValues: { '#000': 'currentColor' },
          },
        },
      ],
    });
    return config;
  },
  images: ['d2drtqy2ezsot0.cloudfront.net'],
};

module.exports = nextConfig;
