import clsx from "clsx";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Section } from "@/components/section";

export const AboutUs = () => {
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	return (
		<Section id="about-us">
			<div className="w-full text-white space-y-4">
				<div className="w-full flex flex-col items-center justify-center gap-4">
					<div className="w-full flex justify-center items-center relative">
						<Image
							src="/self.png"
							alt="self"
							height={500}
							width={500}
							className="w-1/2"
						/>
						<div className="w-1/2 h-[inherit] flex flex-col items-center justify-center border-l border-white py-8 text-sm">
							<div
								ref={ref}
								className="w-full flex flex-col items-center justify-center"
							>
								<div className={clsx(inView && "animate-scale-fade-in")}>
									{"本格麻婆豆腐 乘濵楼"}
								</div>
								<div
									ref={ref}
									className={clsx(inView && "animate-scale-fade-in")}
								>
									{"料理長 乘濵 駿平"}
								</div>
							</div>
						</div>
					</div>
					<div className="whitespace-pre-wrap">
						{`こんにちは、本格麻婆豆腐 乘濵楼です。
私たちは、「本当に美味しい麻婆豆腐を、一人でも多くの人に味わってもらいたい」という想いから、このお店を始めました。
責任者の乘濵は、友人に連れられ食べた本格的な四川麻婆豆腐に衝撃を受け、いつしか自分もその衝撃を届けたいと強く思うようになりました。そこから6年——研究と試作を重ね、ようやくたどり着いた"自分たちの味"。 辛さの中に幾重にも旨みと香りが広がる。そんな一皿を、心を込めてご提供します。
`}
					</div>
				</div>
			</div>
		</Section>
	);
};
