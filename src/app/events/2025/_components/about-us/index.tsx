import Image from "next/image";
import self from "@/assets/photos/self.png";
import { AnimatedSection } from "@/components/ui/fade-in-up";
import { Section } from "@/components/ui/section";

export const AboutUs = () => {
	return (
		<Section id="about-us">
			<div className="w-full text-white space-y-4">
				<div className="w-full flex flex-col items-center justify-center gap-4">
					<AnimatedSection>
						<div className="w-full flex justify-center items-center relative">
							<Image
								src={self}
								alt="self"
								height={500}
								width={500}
								className="w-1/2"
							/>
							<div className="w-1/2 h-[inherit] flex flex-col items-center justify-center border-l border-white py-8 text-sm">
								<div className="w-full flex flex-col items-center justify-center">
									<div>{"本格麻婆豆腐 乘濵楼"}</div>
									<div>{"料理長 乘濵 駿平"}</div>
								</div>
							</div>
						</div>
					</AnimatedSection>
					<AnimatedSection>
						<div className="whitespace-pre-wrap">
							{`こんにちは、本格麻婆豆腐 乘濵楼です。
私たちは、「本当に美味しい麻婆豆腐を、一人でも多くの人に味わってもらいたい」という想いから、このお店を始めました。
責任者の乘濵は、友人に連れられ食べた本格的な四川麻婆豆腐に衝撃を受け、いつしか自分もその衝撃を届けたいと強く思うようになりました。そこから6年——研究と試作を重ね、ようやくたどり着いた"自分たちの味"。 辛さの中に幾重にも旨みと香りが広がる。そんな一皿を、心を込めてご提供します。
`}
						</div>
					</AnimatedSection>
				</div>
			</div>
		</Section>
	);
};
