 
/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        GOOGLE_MAPS_API_KEY: process.env.GOOGLE_MAPS_API_KEY,
        MAP_ID: process.env.MAP_ID,
      },
};

export default nextConfig;
