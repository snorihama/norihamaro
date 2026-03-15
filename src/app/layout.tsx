import type { Metadata } from "next";
import { Hina_Mincho, Zen_Old_Mincho } from "next/font/google";
import "./globals.css";

const hinaMincho = Hina_Mincho({
	variable: "--fonts-hina-mincho",
	subsets: ["latin"],
	weight: ["400"],
});

const zenOldMincho = Zen_Old_Mincho({
	variable: "--fonts-zen-old-mincho",
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="scroll-smooth bg-black">
			<body className={`${hinaMincho.variable} ${zenOldMincho.variable}`}>
				<main className={zenOldMincho.className}>
					<div className="w-full min-h-screen">{children}</div>
				</main>
			</body>
		</html>
	);
}
