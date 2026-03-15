import { RiExternalLinkLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { VerticalText } from "../ui/vertical-text";
import { Day, IndentRow, Row, Section } from "./section";

const Hero = () => {
	return (
		<div className="w-full h-[100lvh] min-h-[100lvh] bg-primary flex flex-col relative">
			{/* メインエリア: 小画面では重ね、lg以上では横並び */}
			<div className="flex-1 relative flex flex-col lg:flex-row lg:items-center lg:justify-center lg:gap-12 lg:px-12">
				{/* 縦書きテキスト */}
				<div className="absolute lg:relative lg:top-auto lg:left-auto inset-x-0 top-1/16 flex flex-row justify-center items-start gap-3 z-10 text-2xl text-white lg:flex-shrink-0">
					<VerticalText text="あなたはまだ知らない。" className="lg:text-4xl" />
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

			<div className="w-full bottom-[12.5lvh] lg:bottom-[8.33lvh] absolute transform translate-y-1/2">
				{/* message wrapper */}
				<div className="w-full flex flex-row gap-0 items-center justify-center px-8">
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
					<div className="h-1 w-1 bg-white transform rotate-45"></div>
					<div className="h-px w-full bg-white"></div>
					<div className="h-1 w-1 bg-white transform rotate-45"></div>
				</div>
			</div>
		</div>
	);
};

export const Home = () => {
	return (
		<div className="bg-primary">
			<Hero />

			{/* Detailed Information */}
			<div className="h-[100lvh] min-h-[100lvh] flex flex-col items-center justify-start bg-primary p-12 gap-4">
				<Section text="試食会" />
				<div className="w-full lg:w-1/3 flex flex-col items-start justify-start gap-1">
					<p className="text-white text-lg">日程</p>
					<Row>
						<div className="flex items-end gap-2">
							<p className="text-white text-2xl">4/11</p>
							<Day day="土" />
						</div>
					</Row>
					<Row>
						<div className="flex items-end gap-2">
							<p className="text-white text-2xl">4/18</p>
							<Day day="土" />
						</div>
					</Row>
					<Row>
						<div className="flex items-end gap-2">
							<p className="text-white text-2xl">4/26</p>
							<Day day="日" />
						</div>
					</Row>
					<Row>
						<div className="flex items-end gap-2">
							<p className="text-white text-2xl">4/29</p>
							<Day day="水祝" />
						</div>
					</Row>
				</div>

				<div className="w-full lg:w-1/3 flex items-center gap-2">
					<p className="text-white text-lg">開催場所</p>
					<p className="text-white text-2xl">江戸川橋</p>
				</div>

				<div className="w-full lg:w-1/3 flex items-center gap-2">
					<p className="text-white text-lg">参加費</p>
					<p className="text-white text-2xl">500円</p>
				</div>

				<Section text="出店イベント" />
				<div className="text-white w-full lg:w-1/3 space-y-3">
					<Row>
						<Link href="/events/2025" className="group flex items-center gap-1">
							<span className="text-xl underline decoration-white/50 group-hover:decoration-white">
								2025年五月祭
							</span>
							<RiExternalLinkLine className="h-4 w-4" />
						</Link>
					</Row>
					<IndentRow tabs={1}>
						<span className="text-base">🏆 五月祭総選挙模擬店部門第一位</span>
					</IndentRow>
				</div>

				<Section text="参加方法" />
				<div className="w-full flex items-start gap-2 lg:w-1/3">
					<p className="text-white">
						試食会の詳細・申し込みは
						{/* 乘濱楼公式LINE */}
						<span className="bg-yellow-300/50 px-1 rounded-lg">
							乘濱楼公式LINE
						</span>
						から！
						<span className="underline decoration-yellow-300/75">
							オンライン説明会
						</span>
						の告知などの最新情報も順次発信中。まずは友達登録！
					</p>
					<Link
						href="https://lin.ee/5czYTnI"
						target="_blank"
						rel="noopener noreferrer"
						className="shrink-0 w-1/3 h-fit"
					>
						<Image
							src="/line-qr-white.png"
							width={360}
							height={360}
							alt="line qr code"
							className="bg-transparent"
						/>
					</Link>
				</div>
			</div>
		</div>
	);
};
