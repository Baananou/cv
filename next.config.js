/** @type {import('next').NextConfig} */
const { i18n } = require("./i18n/next-i18next.config");

const nextConfig = {
	i18n,
	reactStrictMode: true,
	swcMinify: true,
	images: {
		domains: ["res.cloudinary.com"],
	},
};

module.exports = nextConfig;


