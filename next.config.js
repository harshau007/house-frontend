/** @type {import('next').NextConfig} */
const nextConfig = {
    env:{
        API_KEY: process.env.API_KEY
    },
    distDir: 'out',
    output: 'export'
}

module.exports = nextConfig
