import { RiInstagramLine, RiLinksLine, RiTwitterXLine } from "@remixicon/react";
import clsx from "clsx";
import Link from "next/link";
import type React from "react";
import type { FC } from "react";
import { useInView } from "react-intersection-observer";
import { Section } from "../../ui/section";
import { scrollToSection } from "../scroll-plugin";

type SubSectionProps = {
	title: string;
	children: React.ReactNode;
};
const SubSection: FC<SubSectionProps> = ({ title, children }) => {
	return (
		<div className="w-full text-left">
			<div className="w-full px-8 pb-1">
				<p className="font-extrabold text-lg text-primary border-b border-primary text-center pb-1">
					{title}
				</p>
			</div>
			{children}
		</div>
	);
};

const AnimatedSection = ({ children }: { children: React.ReactNode }) => {
	const { ref, inView } = useInView({ threshold: 0.2 });
	return (
		<div
			ref={ref}
			className={clsx(
				"will-change-[opacity,transform]",
				inView ? "animate-fade-in-up" : "opacity-0",
			)}
		>
			{children}
		</div>
	);
};

export const Info = ({
	wait,
}: {
	wait: number | null;
	error: string | null;
}) => {
	return (
		<Section id="info">
			<div className="w-full flex flex-col gap-4 text-white text-center">
				<AnimatedSection>
					<p>
						{"昨年の五月祭で 1000 食超を提供し大きな反響を呼んだ"}
						<span className="font-black">{"「本格麻婆豆腐 乘濵楼」"}</span>
						{"が今年の五月祭に帰ってきます！！"}
						<br />
						{
							"都内の麻婆豆腐を100軒以上食べめぐった東大生が、本気で届ける究極の麻婆豆腐。試作と改良を重ね、去年よりも進化した味をお楽しみください。"
						}
					</p>
				</AnimatedSection>

				<AnimatedSection>
					<SubSection title="開催日程">
						<div className="w-full text-center text-white">
							{"第98回五月祭"}
							<br />
							{"2025年5月24日(土) - 25日(日)"}
						</div>
					</SubSection>
				</AnimatedSection>

				<AnimatedSection>
					<SubSection title="開催場所">
						<button
							type="button"
							className="text-center w-full flex flex-col items-center justify-center text-white"
							onClick={() => scrollToSection("access")}
						>
							<div>{"東京大学本郷キャンパス"}</div>
							<div>
								<span className="text-white underline decoration-white decoration-[0.05rem]">
									<RiLinksLine className="inline-block h-4 w-4 mx-auto text-white text-center" />
									{"工学部広場 B3, 4 (スターバックス 東京大学工学部店前)"}
								</span>
							</div>
						</button>
					</SubSection>
				</AnimatedSection>

				<AnimatedSection>
					<SubSection title="推定待ち時間">
						<div className="w-full text-center text-white">
							約
							<span className="font-black text-primary text-xl px-1">
								{wait ? `${wait}` : "..."}
							</span>
							分
						</div>
					</SubSection>
				</AnimatedSection>

				<AnimatedSection>
					<SubSection title="五月祭総選挙">
						<div className="flex flex-col items-center gap-2 w-full text-center">
							乘濵楼へのご投票よろしくお願いいたします。
							<Link href="https://gogatsusai.jp/98/visitor/project/165">
								<span className="relative inline-flex items-center text-white cursor-pointer transition-colors duration-200 underline decoration-white decoration-[0.05rem]">
									<RiLinksLine
										style={{
											display: "inline-block",
											height: "1rem",
											width: "1rem",
											marginRight: "0.3rem",
											color: "white",
										}}
									/>
									投票フォームはこちら
								</span>
							</Link>
						</div>
					</SubSection>
				</AnimatedSection>

				<AnimatedSection>
					<SubSection title="アンケート">
						<Link href="https://forms.gle/4P2rEoSPLqjzYC4y5">
							<div className="w-full text-center">
								<span className="text-white underline decoration-white decoration-[0.05rem]">
									<RiLinksLine className="inline-block h-4 w-4 mx-auto text-white" />
									{"ご意見・ご感想をお聞かせください"}
								</span>
							</div>
						</Link>
					</SubSection>
				</AnimatedSection>

				<AnimatedSection>
					<SubSection title="SNS">
						<div className="w-full text-center flex flex-row items-center justify-center gap-4">
							<Link href="https://www.instagram.com/norihamaro">
								<RiInstagramLine className="w-6 h-6" />
							</Link>
							<Link href="https://x.com/Norihamaro">
								<RiTwitterXLine className="w-6 h-6" />
							</Link>
						</div>
					</SubSection>
				</AnimatedSection>
			</div>
		</Section>
	);
};
