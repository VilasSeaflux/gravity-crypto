/** @type {import('next').NextConfig} */
const nextConfig = {
	images: {
		remotePatterns: [
			{
				protocol: "https",
				hostname: "gravityteam.co",
			},
		],
	},
};

export default nextConfig;
