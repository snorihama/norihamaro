import { RiExternalLinkLine } from "@remixicon/react";
import Link from "next/link";
import CountUp from "@/components/blocks/TextAnimations/CountUp/CountUp";
import { useHeroAreaContext } from "@/context/provider";

export const FloatingButton = ({
	wait,
}: {
	wait: number | null;
	error: string | null;
}) => {
	const { inView: isHeroAreaInView } = useHeroAreaContext();
	if (isHeroAreaInView) return null;
	return (
		<div className="w-fit fixed top-2 right-2 rounded-full flex gap-4 items-end justify-center">
			<Link
				href="https://gogatsusai.jp/98/visitor/project/165"
				className="w-fit h-full flex items-center justify-center bg-black text-beige p-2 gap-1 rounded-lg animate-breathing"
			>
				{"投票はこちら"}
				<RiExternalLinkLine className="inline h-4 w-4 text-white" />
			</Link>
			<div className="w-fit fixed bottom-2 left-2 rounded-full flex gap-4 items-end justify-center">
				<section className="flex flex-col gap-1 items-center justify-center relative bg-black rounded-lg font-bold text-beige p-1 animate-pop">
					<p>{"待ち時間"}</p>
					{wait !== null ? (
						<p className="flex items-center gap-1">
							<CountUp from={0} to={isHeroAreaInView ? 0 : wait} />分
						</p>
					) : (
						<p>...</p>
					)}
				</section>
			</div>
		</div>
	);
};
