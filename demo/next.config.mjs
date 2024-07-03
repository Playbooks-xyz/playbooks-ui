/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async redirects() {
		return [];
	},
	async rewrites() {
		return {};
	},
};

export default nextConfig;
