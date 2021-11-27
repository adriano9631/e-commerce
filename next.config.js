/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  images: {
    domains: [
      "www.datocms-assets.com",
      "res.cloudinary.com",
      "lh3.googleusercontent.com",
    ],
  },
};
