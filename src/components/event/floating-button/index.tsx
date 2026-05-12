import { RiExternalLinkLine } from "@remixicon/react";
import Link from "next/link";
import { useHeroAreaContext } from "@/context/provider";

export const FloatingButton = () => {
	const { inView: isHeroAreaInView } = useHeroAreaContext();
	if (isHeroAreaInView) return null;
	return (
		<div className="w-fit fixed top-2 right-2 rounded-full flex gap-4 items-end justify-center">
			<Link
				href="https://visitor.gogatsusai.jp/99/project/057/"
				className="w-fit h-full flex items-center justify-center bg-black text-beige p-2 gap-1 rounded-lg animate-breathing"
			>
				{"投票はこちら"}
				<RiExternalLinkLine className="inline h-4 w-4 text-white" />
			</Link>
		</div>
	);
};
