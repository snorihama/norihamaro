"use client";
import Image from "next/image";
// import PillNav from "@/components/ui/pill-nav";
import { VerticalText } from "../ui/vertical-text";

export const Home = () => {
	return (
		<div className="pt-4 bg-primary">
			{/* fixed overlay */}
			<div className="fixed inset-0 w-full h-full bg-primary flex flex-col">
				{/* メインエリア: 小画面では重ね、lg以上では横並び */}
				<div className="flex-1 relative flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:px-12">
					{/* 縦書きテキスト */}
					<div className="absolute lg:relative lg:top-auto lg:left-auto inset-x-0 top-1/16 flex flex-row justify-center items-start gap-3 z-10 text-2xl text-white lg:flex-shrink-0">
						<VerticalText text="あなたはまだ知らない。"  className="lg:text-4xl"/>
						<div className="flex flex-col w-fit justify-center items-center gap-0">
							<VerticalText text="麻婆豆腐" className="text-5xl lg:text-7xl" />
							<VerticalText text="を" className="lg:text-4xl" />
						</div>
						<VerticalText text="本当に美味しい" className="lg:text-4xl" />
					</div>

					{/* アイコン画像 */}
					<div className="absolute lg:relative lg:bottom-auto lg:right-auto lg:translate-y-0 lg:w-3/4 lg:max-w-[800px] inset-x-0 bottom-2/5 flex flex-row justify-end px-8 transform translate-y-1/2 lg:flex-shrink-0">
						<Image
							height={1429}
							width={1429}
							src="/club-icon-square.png"
							alt="club icon"
							className="rounded-full w-full lg:w-full"
						/>
					</div>
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
