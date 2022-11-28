/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  env: {
    NEXT_PUBLIC_PRIVATE_API_KEY: 'f0a85775813b56663b41ab843ff139c218862002',
    NEXT_PUBLIC_API_KEY: 'bb4ff62ae36790ef6bc4bee9ec3fa24b',
  }
}

module.exports = nextConfig
