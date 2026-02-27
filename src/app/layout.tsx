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
	title: "本格麻婆豆腐 乘濵楼",
	description:
		"都内の麻婆豆腐を100軒以上食べめぐり、たどり着いた究極の麻婆。高級中華にも引けをとらない本気の味をご賞味あれ。",
	openGraph: {
		title: "本格麻婆豆腐 乘濵楼",
		description:
			"都内の麻婆豆腐を100軒以上食べめぐり、たどり着いた究極の麻婆。高級中華にも引けをとらない本気の味をご賞味あれ。",
		url: "https://norihamaro.vercel.app/",
		images: [
			{
				url: "https://norihamaro.vercel.app/ogp_compressed.png",
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
		images: ["https://norihamaro.vercel.app/ogp_compressed.png"],
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
