/** @type {import('next').NextConfig} */
const protectedRoute = ["/"]
const nextConfig = {
    env:{
        API_KEY: process.env.API_KEY
    },
    distDir: 'out'
}

module.exports = nextConfig
