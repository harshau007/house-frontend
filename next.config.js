/** @type {import('next').NextConfig} */
const protectedRoute = ["/"]
const nextConfig = {
    async redirects() {
        return [
          ... protectedRoute.map(source => ({
            source,
            missing: [
              {
                type: "cookie",
                key: "Authorization",
              },
            ],
            permanent: false,
            destination: "/login",
          }))
        ];
    },
    env:{
        API_KEY: process.env.API_KEY
    },
    distDir: 'out'
}

module.exports = nextConfig
