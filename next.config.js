module.exports = (phase, { defaultConfig }) => {
	/**
	 * @type {import('next').NextConfig}
	 */
	const { i18n } = require("./i18n/next-i18next.config");

	const nextConfig = {
		i18n: {
			...i18n,
			localeDetection: false,
		},
		reactStrictMode: true,
		trailingSlash: true,
		output: "export",
		images: {
			domains: ["res.cloudinary.com"],
		},
	};
	return nextConfig;
};
