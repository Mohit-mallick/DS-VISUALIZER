import type { NextConfig } from "next";
const withMDX = require('@next/mdx')()


const nextConfig: NextConfig = {
  /* config options here */
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  basePath: '',
  distDir: '.next',
};

export default nextConfig;
module.exports = withMDX(nextConfig)
