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
			className="w-screen min-h-[100lvh] h-[100lvh] bg-black flex flex-col md:flex-row relative"
		>
			{/* Left (Logo & Text) */}
			<div className="h-[100lvh] flex flex-col gap-10 justify-center items-center w-screen md:w-[50vw] flex-1 z-10 px-20 max-w-screen md:max-w-[48vw]">
				{/* Logo */}
				<div className="flex items-center justify-center w-1/2 h-fit z-[2]">
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
				<div className="w-[90vw] md:w-[32rem] max-w-full flex flex-col gap-4 items-center md:items-start relative">
					{/* Date with red vertical line */}
					<div className="flex w-full justify-center items-center">
						<span className="text-beige text-center text-[1.1rem] tracking-[0.1em] font-[zenOldMincho,serif]">
							2026年度五月祭
						</span>
					</div>
					{/* Main Title */}
					<Image
						src="/header.png"
						alt="Norihama-lou icon"
						width={1000}
						height={1000}
						className="w-full object-contain object-left"
					/>
					{/* Description */}
					<p className="text-[#f1ebd7] text-base md:text-[1.15rem] leading-8 max-w-[90vw] md:max-w-[32rem] pt-6 font-[zenOldMincho,serif] [text-shadow:0_2px_8px_rgba(0,0,0,0.3)] text-left md:text-left">
						{"都内の麻婆豆腐を100軒以上食べめぐり、たどり着いた究極の麻婆。"}
						<br />
						{"高級中華にも引けをとらない本気の味をご賞味あれ。"}
					</p>
				</div>
			</div>
			{/* Right (Image) */}
			<div className="absolute md:relative top-0 left-0 h-screen w-screen md:w-[60vw] flex-1 [clip-path:polygon(15%_0,100%_0,100%_100%,8%_100%,0%_50%)]">
				<Image
					src="/mapo-in-pan-square.jpg"
					alt="麻婆豆腐"
					height={1000}
					width={1000}
					className="object-cover object-center w-full h-full"
				/>
				{/* Red border glow on left edge */}
				<div className="absolute left-0 top-0 bottom-0 w-full bg-[linear-gradient(to_right,rgba(0,0,0,0.7),rgba(0,0,0,0.3),transparent)]" />
				{/* Overlay for darkening image */}
				<div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(21,15,15,0.7)_0%,rgba(0,0,0,0.2)_100%)]" />
			</div>
		</section>
	);
};
