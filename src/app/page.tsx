import type { Metadata } from "next";
import { Home } from "@/components/home";

export const metadata: Metadata = {
	metadataBase: new URL("https://norihamaro.vercel.app/"),
	title: "東大麻婆愛好会",
	description: "本当に美味しい麻婆豆腐をあなたはまだ知らない。",
	icons: {
		icon: "https://norihamaro.vercel.app/icons/club-icon.png",
	},
	openGraph: {
		title: "東大麻婆愛好会",
		description: "本当に美味しい麻婆豆腐をあなたはまだ知らない。",
		url: "https://norihamaro.vercel.app/",
		images: [
			{
				url: "https://norihamaro.vercel.app/og/og-newcomer_compressed.png",
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
		images: ["https://norihamaro.vercel.app/og/og-newcomer_compressed.png"],
	},
};

export default Home;
