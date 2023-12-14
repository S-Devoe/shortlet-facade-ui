/** @type {import('next').NextConfig} */
const nextConfig = {
    redirects: async () => {
        return [
            {
                source: '/s',
                destination: '/coming-soon',
                permanent: false,
            },
        ]
    },
    output: 'standalone',
}

module.exports = nextConfig;
