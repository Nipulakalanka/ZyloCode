/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        port: "", // Optional; specify if the external domain uses a non-standard port.
        pathname: "/**", // Match all paths on the domain.
      },
    ],
  },
};

export default nextConfig;
