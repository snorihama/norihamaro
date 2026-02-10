import { css } from "@panda/css";
import Image from "next/image";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { useHeroAreaContext } from "@/context/provider";

export const Hero = () => {
	const { ref, inView } = useInView({
		/* Optional options */
		threshold: 0.5,
	});
	const { setInView } = useHeroAreaContext();
	useEffect(() => {
		setInView(inView);
	}, [inView, setInView]);
	return (
		<section
			ref={ref}
			className={css({
				width: "100vw",
				minHeight: "100lvh",
				height: "100lvh",
				background: "black",
				display: "flex",
				flexDirection: { base: "column", md: "row" },
				position: "relative",
			})}
		>
			{/* Left (Logo & Text) */}
			<div
				className={css({
					height: "100lvh",
					display: "flex",
					flexDirection: "column",
					gap: "2.5rem",
					justifyContent: "center",
					alignItems: "center",
					width: { base: "100vw", md: "50vw" },
					flex: 1,
					zIndex: 10,
					paddingX: "5rem",
					maxWidth: { base: "100vw", md: "48vw" },
				})}
			>
				{/* Logo */}
				<div
					className={css({
						display: "flex",
						alignItems: "center",
						justifyContent: "center",
						width: "50%",
						height: "fit-content",
						zIndex: 2,
					})}
				>
					<Image
						src="/icon.svg"
						alt="logo"
						width={88}
						height={88}
						style={{ width: "100%", height: "auto" }}
						priority
					/>
				</div>
				{/* Main Text Block */}
				<div
					className={css({
						width: { base: "90vw", md: "32rem" },
						maxWidth: "100%",
						display: "flex",
						flexDirection: "column",
						gap: "1rem",
						alignItems: { base: "center", md: "flex-start" },
						position: "relative",
					})}
				>
					{/* Date with red vertical line */}
					<div
						className={css({
							display: "flex",
							width: "full",
							justifyContent: "center",
							alignItems: "center",
						})}
					>
						<span
							className={css({
								color: "beige",
								textAlign: "center",
								fontSize: "1.1rem",
								letterSpacing: "0.1em",
								fontFamily: "zenOldMincho, serif",
							})}
						>
							2025年度五月祭
						</span>
					</div>
					{/* Main Title */}
					<Image
						src="/header.png"
						alt="Norihama-lou icon"
						width={1000}
						height={1000}
						className={css({
							width: "full",
							objectFit: "contain",
							objectPosition: "left",
						})}
					/>
					{/* Description */}
					<p
						className={css({
							color: "#f1ebd7",
							fontSize: { base: "1rem", md: "1.15rem" },
							lineHeight: 2,
							maxWidth: { base: "90vw", md: "32rem" },
							paddingTop: "1.5rem",
							fontFamily: "zenOldMincho, serif",
							textShadow: "0 2px 8px rgba(0,0,0,0.3)",
							textAlign: { base: "center", md: "left" },
						})}
					>
						{"都内の麻婆豆腐を100軒以上食べめぐり、たどり着いた究極の麻婆。"}
						<br />
						{"高級中華にも引けをとらない本気の味をご賞味あれ。"}
					</p>
				</div>
			</div>
			{/* Right (Image) */}
			<div
				className={css({
					position: { base: "absolute", md: "relative" },
					top: 0,
					left: 0,
					height: { base: "100vh", md: "100vh" },
					width: { base: "100vw", md: "60vw" },
					flex: 1,
					clipPath: "polygon(15% 0, 100% 0, 100% 100%, 8% 100%, 0% 50%)",
				})}
			>
				<Image
					src="/mapo-in-pan-square.jpg"
					alt="麻婆豆腐"
					height={1000}
					width={1000}
					className={css({
						objectFit: "cover",
						objectPosition: "center",
						width: "100%",
						height: "100%",
					})}
				/>
				{/* Red border glow on left edge */}
				<div
					className={css({
						position: "absolute",
						left: 0,
						top: 0,
						bottom: 0,
						width: "100%",
						background:
							"linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.3), transparent)",
					})}
				/>
				{/* Overlay for darkening image */}
				<div
					className={css({
						position: "absolute",
						inset: 0,
						background:
							"linear-gradient(90deg, rgba(21, 15, 15, 0.7) 0%, rgba(0,0,0,0.2) 100%)",
					})}
				/>
			</div>
		</section>
	);
};
