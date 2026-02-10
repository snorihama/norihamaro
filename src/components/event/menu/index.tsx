import { css } from "@panda/css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Section } from "@/components/section";

export const FoodDrinkMenu = () => {
	const { ref, inView } = useInView({
		threshold: 0,
	});
	return (
		<Section id="menu">
			<div
				className={css({
					width: "full",
					display: "flex",
					justifyContent: "start",
					alignItems: "center",
					paddingTop: "1rem",
				})}
			>
				<Image
					height={500}
					width={500}
					className={css({
						objectFit: "contain",
						objectPosition: "center",
						width: "full",
						rounded: "3rem",
					})}
					src="/mapo-in-dish.jpg"
					alt="Mapo Tofu Dish"
				/>
			</div>
			<div
				className={css({
					width: "full",
					display: "flex",
					justifyContent: "center",
					alignItems: "center",
					color: "white",
					paddingX: "1rem",
					paddingTop: "1rem",
				})}
			>
				<div
					className={css({
						width: "1/2",
						borderRight: "solid 1px",
						display: "flex",
						flexDirection: "column",
						textAlign: "right",
						paddingRight: "1rem",
					})}
				>
					<div
						className={css({
							animationName: inView ? "slideInRight" : "",
							animationDuration: "1s",
							animationDelay: "0s",
							animationFillMode: "forwards",
						})}
					>
						{"本格麻婆豆腐"}
					</div>
					<div
						className={css({
							animationName: inView ? "slideInRight" : "",
							animationDuration: "1s",
							animationDelay: "0s",
							animationFillMode: "forwards",
						})}
					>
						{"塩にぎり"}
					</div>
					<div
						className={css({
							animationName: inView ? "slideInRight" : "",
							animationDuration: "1s",
							animationDelay: "0s",
							animationFillMode: "forwards",
						})}
					>
						{"ビール"}
					</div>
				</div>
				<div
					className={css({
						width: "1/2",
						display: "flex",
						flexDirection: "column",
						paddingLeft: "1rem",
					})}
				>
					<div
						ref={ref}
						className={css({
							animationName: inView ? "slideInLeft" : "",
							animationDuration: "1s",
							animationDelay: "0s",
							animationFillMode: "forwards",
						})}
					>
						<span
							className={css({
								fontSize: "lg",
								fontWeight: "extrabold",
								color: "primary",
								paddingRight: "0.5rem",
							})}
						>
							{"500"}
						</span>
						<span>{"円"}</span>
					</div>
					<div
						ref={ref}
						className={css({
							animationName: inView ? "slideInLeft" : "",
							animationDuration: "1s",
							animationDelay: "0s",
							animationFillMode: "forwards",
						})}
					>
						<span
							className={css({
								fontSize: "lg",
								fontWeight: "extrabold",
								color: "primary",
								paddingRight: "0.5rem",
							})}
						>
							{"200"}
						</span>
						<span>{"円"}</span>
					</div>
					<div
						ref={ref}
						className={css({
							animationName: inView ? "slideInLeft" : "",
							animationDuration: "1s",
							animationDelay: "0s",
							animationFillMode: "forwards",
						})}
					>
						<span
							className={css({
								fontSize: "lg",
								fontWeight: "extrabold",
								color: "primary",
								paddingRight: "0.5rem",
							})}
						>
							{"500"}
						</span>
						<span>{"円"}</span>
					</div>
				</div>
			</div>
		</Section>
	);
};
