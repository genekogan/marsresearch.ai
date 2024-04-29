/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "edenartlab-prod-data.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "edenartlab-stage-data.s3.us-east-1.amazonaws.com",
      },
      {
        protocol: "https",
        hostname: "d14i3advvh2bvd.cloudfront.net",  
      }
    ],
  },
};

module.exports = nextConfig;
