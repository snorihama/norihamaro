import type { Metadata } from "next";
import { Home } from "@/components/welcome";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.norihamaro.com/"),
	title: "東大麻婆愛好会",
	description: "本当に美味しい麻婆豆腐をあなたはまだ知らない。",
	icons: {
		icon: [
			{
				url: "https://www.norihamaro.com/icons/club-icon_16x16.ico",
				sizes: "16x16",
				type: "image/x-icon",
			},
			{
				url: "https://www.norihamaro.com/icons/club-icon_32x32.ico",
				sizes: "32x32",
				type: "image/x-icon",
			},
			{
				url: "https://www.norihamaro.com/icons/club-icon_48x48.ico",
				sizes: "48x48",
				type: "image/x-icon",
			},
			{
				url: "https://www.norihamaro.com/icons/club-icon_64x64.ico",
				sizes: "64x64",
				type: "image/x-icon",
			},
			{
				url: "https://www.norihamaro.com/icons/club-icon_128x128.ico",
				sizes: "128x128",
				type: "image/x-icon",
			},
			{
				url: "https://www.norihamaro.com/icons/club-icon_256x256.ico",
				sizes: "256x256",
				type: "image/x-icon",
			},
		],
	},
	openGraph: {
		title: "東大麻婆愛好会",
		description: "本当に美味しい麻婆豆腐をあなたはまだ知らない。",
		url: "https://www.norihamaro.com/",
		images: [
			{
				url: "https://www.norihamaro.com/og/og-newcomer_compressed.png",
				width: 1200,
				height: 630,
				alt: "東大麻婆愛好会",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "東大麻婆愛好会",
		description: "本当に美味しい麻婆豆腐をあなたはまだ知らない。",
		images: ["https://www.norihamaro.com/og/og-newcomer_compressed.png"],
	},
};

export default Home;
