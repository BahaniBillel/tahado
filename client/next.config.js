/** @type {import('next').NextConfig} */
const nextConfig = {
  domains: ["new-image-url.com"],
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "tahadobucket.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/gifts-images/**",
      },
      {
        protocol: "https",
        hostname: "tahadobucket.s3.eu-central-1.amazonaws.com",
        port: "",
        pathname: "/gifts_photos/**",
      },
    ],
  },
};

module.exports = nextConfig;
