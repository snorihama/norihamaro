import type { Metadata } from "next";
import { Home } from "@/app/welcome/_components";
import { getFaviconIcons, ogImages } from "@/lib/site-assets";

export const metadata: Metadata = {
	metadataBase: new URL("https://www.norihamaro.com/"),
	title: "東大麻婆愛好会",
	description: "本当に美味しい麻婆豆腐をあなたはまだ知らない。",
	icons: {
		icon: getFaviconIcons("clubIcon"),
	},
	openGraph: {
		title: "東大麻婆愛好会",
		description: "本当に美味しい麻婆豆腐をあなたはまだ知らない。",
		url: "https://www.norihamaro.com/",
		images: [
			{
				url: ogImages.default,
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
		images: [ogImages.default],
	},
};

export default Home;
