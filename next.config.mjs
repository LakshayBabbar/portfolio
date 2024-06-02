/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
        pathname: "/dfl8r2ylz/image/upload/**",
      },
    ],
  },
};
export default nextConfig;
