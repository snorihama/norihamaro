import { css } from "@panda/css";
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
		<div
			className={css({
				width: "fit-content",
				position: "fixed",
				top: "0.5rem",
				right: "0.5rem",
				rounded: "full",
				display: "flex",
				gap: "1rem",
				alignItems: "flex-end",
				justifyContent: "center",
			})}
		>
			<Link
				href="https://gogatsusai.jp/98/visitor/project/165"
				className={css({
					width: "fit-content",
					height: "full",
					display: "flex",
					alignItems: "center",
					justifyContent: "center",
					background: "black",
					color: "beige",
					padding: "0.5rem",
					gap: "0.25rem",
					rounded: "lg",
					animationName: "breathing",
					animationDuration: "2s",
					animationIterationCount: "infinite",
					animationTimingFunction: "ease-in-out",
					animationFillMode: "forwards",
				})}
			>
				{"投票はこちら"}
				<RiExternalLinkLine
					className={css({
						display: "inline",
						height: "1rem",
						width: "1rem",
						color: "white",
					})}
				/>
			</Link>
			<div
				className={css({
					width: "fit-content",
					position: "fixed",
					bottom: "0.5rem",
					left: "0.5rem",
					rounded: "full",
					display: "flex",
					gap: "1rem",
					alignItems: "flex-end",
					justifyContent: "center",
				})}
			>
				<section
					className={css({
						display: "flex",
						flexDirection: "column",
						gap: "0.25rem",
						alignItems: "center",
						justifyContent: "center",
						position: "relative",
						backgroundColor: "black",
						borderRadius: "lg",
						fontWeight: "bold",
						color: "beige",
						padding: "0.25rem",
						animationName: "pop",
						animationDuration: "2s",
						animationIterationCount: "infinite",
						animationTimingFunction: "ease-in-out",
						animationFillMode: "forwards",
					})}
				>
					<p>{"待ち時間"}</p>
					{wait !== null ? (
						<p
							className={css({
								display: "flex",
								alignItems: "center",
								gap: "0.25rem",
							})}
						>
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
