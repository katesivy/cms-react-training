/** @type {import('next').NextConfig} */
const nextConfig = 
{
  reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: "http",
        hostname: '**i.annihil.us',
        pathname: 'u/prod/marvel/i/mg**'
      },
    ],
  }
}

module.exports = nextConfig


// public key: bb4ff62ae36790ef6bc4bee9ec3fa24b
// private key: f0a85775813b56663b41ab843ff139c218862002