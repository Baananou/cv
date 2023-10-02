/** @type {import('next').NextConfig} */
const { i18n } = require("./i18n/next-i18next.config");

const nextConfig = {
	i18n: {
		...i18n,
		localeDetection: false,
	},
	reactStrictMode: true,
	trailingSlash: true,
	output: "standalone",
	images: {
		domains: ["res.cloudinary.com"],
	},
};

module.exports = nextConfig;
