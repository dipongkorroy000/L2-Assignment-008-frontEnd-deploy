import type {NextConfig} from "next";

const config: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "iili.io",
      },
      {
        protocol: "https",
        hostname: "i.ibb.co.com",
      },
    ],
  },
};

export default config;
