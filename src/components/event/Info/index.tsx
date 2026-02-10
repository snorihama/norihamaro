import { css } from "@panda/css";
import { RiInstagramLine, RiLinksLine, RiTwitterXLine } from "@remixicon/react";
import Link from "next/link";
import type React from "react";
import type { FC } from "react";
import { useInView } from "react-intersection-observer";
import { Section } from "../../section";
import { scrollToSection } from "../scroll-plugin";

type SubSectionProps = {
	title: string;
	children: React.ReactNode;
};
const SubSection: FC<SubSectionProps> = ({ title, children }) => {
	return (
		<div
			className={css({
				width: "full",
				textAlign: "left",
			})}
		>
			<div
				className={css({
					width: "full",
					paddingX: "2rem",
					paddingBottom: "0.25rem",
				})}
			>
				<p
					className={css({
						fontWeight: "extrabold",
						fontSize: "lg",
						color: "primary",
						borderBottom: "solid 1px",
						borderColor: "primary",
						textAlign: "center",
						paddingBottom: "0.25rem",
					})}
				>
					{title}
				</p>
			</div>
			{children}
		</div>
	);
};

// AnimatedSection: animates children in when in view
const AnimatedSection = ({
	children,
	delay = 0,
}: {
	children: React.ReactNode;
	delay?: number;
}) => {
	const { ref, inView } = useInView({ threshold: 0.2 });
	return (
		<div
			ref={ref}
			className={css({
				opacity: inView ? 1 : 0,
				animationName: inView ? "fadeInUp" : "none",
				animationDuration: "0.7s",
				animationTimingFunction: "cubic-bezier(.4,0,.2,1)",
				animationDelay: `${delay}ms`,
				animationFillMode: "both",
				willChange: "opacity, transform",
			})}
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
			<div
				className={css({
					width: "full",
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
					color: "white",
					textAlign: "center",
				})}
			>
				<AnimatedSection delay={1000}>
					<p>
						{"昨年の五月祭で 1000 食超を提供し大きな反響を呼んだ"}
						<span
							className={css({
								fontWeight: "900",
							})}
						>
							{"「本格麻婆豆腐 乘濵楼」"}
						</span>
						{"が今年の五月祭に帰ってきます！！"}
						<br />
						{
							"都内の麻婆豆腐を100軒以上食べめぐった東大生が、本気で届ける究極の麻婆豆腐。試作と改良を重ね、去年よりも進化した味をお楽しみください。"
						}
					</p>
				</AnimatedSection>

				<AnimatedSection delay={1500}>
					<SubSection title="開催日程">
						<div
							className={css({
								width: "full",
								textAlign: "center",
								color: "white",
							})}
						>
							{"第98回五月祭"}
							<br />
							{"2025年5月24日(土) - 25日(日)"}
						</div>
					</SubSection>
				</AnimatedSection>

				<AnimatedSection delay={2500}>
					<SubSection title="開催場所">
						<button
							type="button"
							className={css({
								textAlign: "center",
								width: "full",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								color: "white",
							})}
							onClick={() => scrollToSection("access")}
						>
							<div>{"東京大学本郷キャンパス"}</div>
							<div>
								<span
									className={css({
										color: "white",
										textDecoration: "underline",
										textDecorationColor: "white",
										textDecorationThickness: "0.05rem",
									})}
								>
									<RiLinksLine
										className={css({
											display: "inline-block",
											height: "1rem",
											width: "1rem",
											margin: "0 auto",
											color: "white",
											textAlign: "center",
										})}
									/>
									{"工学部広場 B3, 4 (スターバックス 東京大学工学部店前)"}
								</span>
							</div>
						</button>
					</SubSection>
				</AnimatedSection>

				<AnimatedSection delay={3500}>
					<SubSection title="推定待ち時間">
						<div
							className={css({
								width: "full",
								textAlign: "center",
								color: "white",
							})}
						>
							約
							<span
								className={css({
									fontWeight: "900",
									color: "primary",
									fontSize: "xl",
									paddingX: "0.25rem",
								})}
							>
								{wait ? `${wait}` : "..."}
							</span>
							分
						</div>
					</SubSection>
				</AnimatedSection>

				<AnimatedSection delay={4500}>
					<SubSection title="五月祭総選挙">
						<div
							className={css({
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								gap: "0.5rem",
								width: "full",
								textAlign: "center",
							})}
						>
							乘濵楼へのご投票よろしくお願いいたします。
							<Link href="https://gogatsusai.jp/98/visitor/project/165">
								<span
									className={css({
										position: "relative",
										display: "inline-flex",
										alignItems: "center",
										color: "white",
										cursor: "pointer",
										transition: "color 0.2s",
										textDecoration: "underline",
										textDecorationColor: "white",
										textDecorationThickness: "0.05rem",
									})}
								>
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

				<AnimatedSection delay={5500}>
					<SubSection title="アンケート">
						<Link href="https://forms.gle/4P2rEoSPLqjzYC4y5">
							<div
								className={css({
									width: "full",
									textAlign: "center",
								})}
							>
								<span
									className={css({
										color: "white",
										textDecoration: "underline",
										textDecorationColor: "white",
										textDecorationThickness: "0.05rem",
									})}
								>
									<RiLinksLine
										className={css({
											display: "inline-block",
											height: "1rem",
											width: "1rem",
											margin: "0 auto",
											color: "white",
										})}
									/>
									{"ご意見・ご感想をお聞かせください"}
								</span>
							</div>
						</Link>
					</SubSection>
				</AnimatedSection>

				<AnimatedSection delay={6500}>
					<SubSection title="SNS">
						<div
							className={css({
								width: "full",
								textAlign: "center",
								display: "flex",
								flexDirection: "row",
								alignItems: "center",
								justifyContent: "center",
								gap: "1rem",
							})}
						>
							<Link href="https://www.instagram.com/norihamaro">
								<RiInstagramLine
									className={css({
										width: "1.5rem",
										height: "1.5rem",
									})}
								/>
							</Link>
							<Link href="https://x.com/Norihamaro">
								<RiTwitterXLine
									className={css({
										width: "1.5rem",
										height: "1.5rem",
									})}
								/>
							</Link>
						</div>
					</SubSection>
				</AnimatedSection>
			</div>
		</Section>
	);
};
