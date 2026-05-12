import type { Metadata } from "next";
import { Main } from "@/components/event";

const title = "本格麻婆豆腐 乘濵楼 五月祭特設サイト | 東大麻婆愛好会 乘濵楼";
const description =
	"東京大学の五月祭に出店する「本格麻婆豆腐 乘濵楼」の特設サイトです。都内の麻婆豆腐を 100軒以上食べめぐった東大生が、本気で届ける究極の麻婆豆腐 。メニュー詳細や出店場所、こだわりをご紹介します。";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.norihamaro.com/"),
	title: title,
	description: description,
	keywords: [
		"東大麻婆愛好会",
		"乘濵楼",
		"麻婆豆腐",
		"五月祭",
		"東京大学",
		"本郷",
		"学園祭",
		"四川料理",
		"本格麻婆豆腐",
	],
	icons: {
		icon: [
			{
				url: "https://www.norihamaro.com/icons/norihamaro_16x16.ico",
				sizes: "16x16",
				type: "image/x-icon",
			},
			{
				url: "https://www.norihamaro.com/icons/norihamaro_32x32.ico",
				sizes: "32x32",
				type: "image/x-icon",
			},
			{
				url: "https://www.norihamaro.com/icons/norihamaro_48x48.ico",
				sizes: "48x48",
				type: "image/x-icon",
			},
			{
				url: "https://www.norihamaro.com/icons/norihamaro_64x64.ico",
				sizes: "64x64",
				type: "image/x-icon",
			},
			{
				url: "https://www.norihamaro.com/icons/norihamaro_128x128.ico",
				sizes: "128x128",
				type: "image/x-icon",
			},
			{
				url: "https://www.norihamaro.com/icons/norihamaro_256x256.ico",
				sizes: "256x256",
				type: "image/x-icon",
			},
		],
	},
	openGraph: {
		title: title,
		description: description,
		url: "https://www.norihamaro.com/",
		images: [
			{
				url: "https://www.norihamaro.com/og/og_compressed.png",
				width: 1200,
				height: 630,
				alt: title,
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: title,
		description: description,
		images: ["https://www.norihamaro.com/og/og_compressed.png"],
	},
};

export default Main;
