import type { Metadata } from "next";
import { Main } from "@/components/event";

export const metadata: Metadata = {
	metadataBase: new URL("https://norihamaro.vercel.app/"),
	title: "本格麻婆豆腐 乘濵楼",
	description:
		"都内の麻婆豆腐を100軒以上食べめぐり、たどり着いた究極の麻婆。高級中華にも引けをとらない本気の味をご賞味あれ。",
	icons: {
		icon: "https://norihamaro.vercel.app/icons/icon.png",
	},
	openGraph: {
		title: "本格麻婆豆腐 乘濵楼",
		description:
			"都内の麻婆豆腐を100軒以上食べめぐり、たどり着いた究極の麻婆。高級中華にも引けをとらない本気の味をご賞味あれ。",
		url: "https://norihamaro.vercel.app/",
		images: [
			{
				url: "https://norihamaro.vercel.app/og/og_compressed.png",
				width: 1200,
				height: 630,
				alt: "本格麻婆豆腐 乘濵楼",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "本格麻婆豆腐 乘濵楼",
		description:
			"都内の麻婆豆腐を100軒以上食べめぐり、たどり着いた究極の麻婆。高級中華にも引けをとらない本気の味をご賞味あれ。",
		images: ["https://norihamaro.vercel.app/og/og_compressed.png"],
	},
};

export default Main;
