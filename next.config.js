/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp', 'image/avif'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.pravatar.cc',
            },
            {
                protocol: 'https',
                hostname: 'backoffice.poble.com.au',
            },
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
        ],
    },
    compress: true,
    poweredByHeader: false,
    reactStrictMode: true,
    // Support pages are the approved standalone HTML documents in public/legal.
    async rewrites() {
        return [
            { source: '/manual', destination: '/legal/manual.html' },
            { source: '/terms', destination: '/legal/terms.html' },
            { source: '/privacy', destination: '/legal/privacy.html' },
            { source: '/cookies', destination: '/legal/cookies.html' },
        ];
    },
};

module.exports = nextConfig;
