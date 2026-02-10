import { css } from "@panda/css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Section } from "@/components/section";

export const AboutUs = () => {
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	return (
		<Section id="about-us">
			<div
				className={css({
					width: "full",
					color: "white",
					spaceY: "1rem",
				})}
			>
				<div
					className={css({
						width: "full",
						display: "flex",
						flexDirection: "column",
						alignItems: "center",
						justifyContent: "center",
						gap: "1rem",
					})}
				>
					<div
						className={css({
							width: "full",
							display: "flex",
							justifyContent: "center",
							alignItems: "center",
							position: "relative",
						})}
					>
						<Image
							src="/self.png"
							alt="self"
							height={500}
							width={500}
							className={css({
								width: "1/2",
							})}
						/>
						<div
							className={css({
								width: "1/2",
								height: "inherit",
								display: "flex",
								flexDirection: "column",
								alignItems: "center",
								justifyContent: "center",
								borderLeft: "solid 1px",
								borderColor: "white",
								paddingY: "2rem",
								fontSize: "sm",
							})}
						>
							<div
								ref={ref}
								className={css({
									width: "full",
									display: "flex",
									flexDirection: "column",
									alignItems: "center",
									justifyContent: "center",
								})}
							>
								<div
									className={css({
										animationName: inView ? "scaleFadeIn" : "none",
										animationDuration: "0.5s",
										animationFillMode: "forwards",
									})}
								>
									{"本格麻婆豆腐 乘濵楼"}
								</div>
								<div
									ref={ref}
									className={css({
										animationName: inView ? "scaleFadeIn" : "none",
										animationDuration: "0.5s",
										animationFillMode: "forwards",
									})}
								>
									{"料理長 乘濵 駿平"}
								</div>
							</div>
						</div>
					</div>
					<div
						className={css({
							whiteSpace: "pre-wrap",
						})}
					>
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
