import type { Metadata } from "next";
import { getFaviconIcons, ogImages } from "@/lib/site-assets";
import { Main } from "./_components";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.norihamaro.com/"),
	title: "本格麻婆豆腐 乘濵楼",
	description:
		"都内の麻婆豆腐を100軒以上食べめぐり、たどり着いた究極の麻婆。高級中華にも引けをとらない本気の味をご賞味あれ。",
	icons: {
		icon: getFaviconIcons("norihamaro"),
	},
	openGraph: {
		title: "本格麻婆豆腐 乘濵楼",
		description:
			"都内の麻婆豆腐を100軒以上食べめぐり、たどり着いた究極の麻婆。高級中華にも引けをとらない本気の味をご賞味あれ。",
		url: "https://www.norihamaro.com/",
		images: [
			{
				url: ogImages.events,
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
		images: [ogImages.events],
	},
};

export default Main;
