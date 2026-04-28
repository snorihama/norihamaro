import type { NextConfig } from "next";

const nextConfig: NextConfig = {
	async redirects() {
		return [
			{
				source: "/",
				destination: "/events/2026",
				permanent: true,
			},
		];
	},
};

export default nextConfig;
