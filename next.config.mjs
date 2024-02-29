/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "cdn.sanity.io",
        },
      ],
    },
    experimental: {
      taint: true,
    },

    // reactStrictMode: true,
    // images: {
    //     domains: ['cdn.sanity.io'],
    // },
    // async headers() {
    //     return [
    //     {
    //         source: '/(.*)',
    //         headers: [
    //         {
    //             key: 'X-Frame-Options',
    //             value: 'DENY',
    //         },
    //         {
    //             key: 'X-Content-Type-Options',
    //             value: 'nosniff',
    //         },
    //         {
    //             key: 'X-XSS-Protection',
    //             value: '1; mode=block',
    //         },
    //         ],
    //     },
    //     ];
    // },
    // async redirects() {
    //     return [
    //     {
    //         source: '/members',
    //         destination: '/members',
    //         permanent: true,
    //     },
    //     {
    //         source: '/projects',
    //         destination: '/projects',
    //         permanent: true,
    //     },
    //     {
    //         source: '/events',
    //         destination: '/events',
    //         permanent: true,
    //     },
    //     {
    //         source: '/alumni',
    //         destination: '/alumni',
    //         permanent: true,
    //     },
    //     ];
    // },
};

export default nextConfig;

// const nextConfig = {
//     images: {
//       remotePatterns: [
//         {
//           protocol: "https",
//           hostname: "cdn.sanity.io",
//         },
//       ],
//     },
//     experimental: {
//       taint: true,
//     },
//   };