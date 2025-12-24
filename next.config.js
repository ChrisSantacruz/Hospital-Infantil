/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'hila-sigma.vercel.app',
            },
        ],
        unoptimized: true,
    },
};

module.exports = nextConfig;
