"use client";
import Image from "next/image";
// import PillNav from "@/components/ui/pill-nav";
import { VerticalText } from "../ui/vertical-text";

export const Home = () => {
	return (
		<div className="pt-4 bg-primary">
			{/* fixed overlay */}
			<div className="fixed inset-0 w-full h-full bg-primary">
				<div className="bg-transparent fixed inset-0 w-full flex flex-row justify-center items-start gap-3 z-50 top-1/16 text-2xl text-white">
					<VerticalText text="あなたはまだ知らない。" />
					<div className="flex flex-col w-fit justify-center items-center gap-0">
						<VerticalText text="麻婆豆腐" className="text-5xl" />
						<VerticalText text="を" />
					</div>
					<VerticalText text="本当に美味しい" />
				</div>

				<div className="w-full px-8 bottom-2/5 absolute flex flex-row justify-end transform translate-y-1/2">
					<Image
						height={1429}
						width={1429}
						src="/club-icon-square.png"
						alt="club icon"
						className="rounded-full w-full"
					/>
				</div>

				{/* 1655 428 */}

				<div className="w-full bottom-1/8 absolute transform translate-y-1/2">
					{/* message wrapper */}
					<div className="w-full flex flex-row gap-0 items-center justify-center px-8">
						{/* <Image height={1655} width={428} src="/header-mini-white.png" alt="header mini" className="h-4 w-fit shrink-0"/> */}
						{/* use bold-styled image if we use logo image */}
						<p className="text-white text-lg shrink-0">乘濱楼</p>
						<p className="text-white text-sm shrink-0">
							<span>が磨いた</span>
							<span className="text-lg">究極</span>
							<span>の</span>
							<span className="text-lg">麻婆豆腐</span>
							<span>を体感せよ。</span>
						</p>
					</div>
					{/* object wrapper */}
					<div className="flex w-full flex-row items-center justify-between gap-0 px-8">
						{/* rotated square */}
						<div className="h-1 w-1 bg-white transform rotate-45"></div>
						{/* linear line */}
						<div className="h-px w-full bg-white"></div>
						{/* rotated square */}
						<div className="h-1 w-1 bg-white transform rotate-45"></div>
					</div>
				</div>
			</div>

			{/* floating object */}
			{/* <PillNav
				logo="/header.png"
				logoAlt="Company Logo"
				items={[
					{ label: "ホーム", href: "/" },
					{ label: "体験会日程", href: "/schedule" },
					{ label: "出店イベント", href: "/events" },
					{ label: "お問い合わせ", href: "/contact" },
				]}
				activeHref="/"
				className="custom-nav"
				ease="power2.easeOut"
				baseColor="#000000"
				pillColor="#ffffff"
				hoveredPillTextColor="#ffffff"
				pillTextColor="#000000"
				initialLoadAnimation={false}
			/> */}
		</div>
	);
};
