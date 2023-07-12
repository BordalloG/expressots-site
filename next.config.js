/** @type {import('next').NextConfig} */

const { PHASE_PRODUCTION_BUILD } = require('next/dist/shared/lib/constants')

const nextConfig = (phase) => {
  const isProduction = phase === PHASE_PRODUCTION_BUILD

  return {
    output: 'export',
    // basePath: '/expressots-site',
    images: { unoptimized: true },
    assetPrefix: isProduction ? 'https://expressots.github.io/expressots-site' : '',
  }
}

module.exports = nextConfig
