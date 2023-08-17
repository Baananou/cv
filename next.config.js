/** @type {import('next').NextConfig} */

const nextConfig = {
	output: "export",
	reactStrictMode: true,
	experimental: {
		optimizeImages: true,
	},
	swcMinify: true,
	images: {
		domains: ["res.cloudinary.com"],
	},
};

module.exports = nextConfig;
