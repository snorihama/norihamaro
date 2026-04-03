"use client";
import { RiExternalLinkLine } from "@remixicon/react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { VerticalText } from "../ui/vertical-text";
import { Calendar } from "./calendar";
import { Rect } from "./rect";

const Hero = () => {
	return (
		<div className="w-full h-dvh min-h-dvh bg-primary flex flex-col relative">
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

			<div className="w-full bottom-[12.5dvh] lg:bottom-[8.33dvh] absolute transform translate-y-1/2">
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

const Main = () => {
	return (
		<div className="w-full flex flex-col items-center gap-4 pt-4">
			<Rect
				title={
					<>
						<p>東大麻婆愛好会</p>
						<Image
							src="/header-mini.png"
							height={428}
							width={1655}
							className="h-4 w-fit"
							alt={"Norihamarou"}
						/>
						<p>とは？</p>
					</>
				}
				content={
					<>
						<div className="text-gray-200">
							<span>東大麻婆愛好会</span>
							{/* これのフォント欲しい */}
							<span>乘濵楼</span>
							<span>は、本格的な麻婆豆腐を探求し、一人でも多くの人に「</span>
							<span className="text-white font-bold bg-primary/60 px-1 rounded-lg">
								衝撃の麻婆体験
							</span>
							<span>」を届けることを目指している団体です。</span>
						</div>
						<div className="text-gray-200">
							<span>
								2024年の五月祭に向けて創設され、2025年の五月祭では
								2000食以上を販売し、
							</span>
							<span className="bg-primary/60 px-1 rounded-lg">
								<span>五月祭総選挙でも</span>
								<span className="text-white font-bold">模擬店部門1位</span>
								<span>を獲得</span>
							</span>
							<span>。</span>
						</div>
						<div className="text-gray-200">
							さらに多くの人に届けるために、駒場祭への出店や、間借り営業・外部イベントへの出店も目指して新たな仲間を募集しています！
						</div>
					</>
				}
			/>

			<Rect
				title={<span>こんなあなたにおすすめ</span>}
				content={
					<>
						{[
							"麻婆豆腐が好き/中華料理が好き/おいしいものが好き",
							"辛すぎない本格麻婆豆腐が気になる",
							"中華鍋を振ってみたい",
							"学園祭を楽しみたい",
							"たまに集まれるコミュニティが欲しい",
							"上の世代の先輩と話してみたい",
							"もう一つサークルに入っておきたい",
							"デザインをしてみたい",
						].map((label) => {
							return (
								<div className="w-full flex justify-start" key={label}>
									<div className="pt-2 pe-5">
										<div className="border-2 border-primary w-3 h-3"></div>
									</div>
									<span>{label}</span>
								</div>
							);
						})}

						<div>などなど、どんな方でも大歓迎です。</div>
						<div>あなたの居場所であり挑戦の場所になれます。</div>
					</>
				}
			/>

			<Rect
				title={<span>活動内容・頻度</span>}
				content={
					<>
						<div className="w-full flex gap-4">
							<div className="pt-2 ps-1">
								<div className="bg-primary w-3 h-3 transform rotate-45"></div>
							</div>
							<span>五月祭・駒場祭に向けて</span>
						</div>
						<div>本番の約2ヶ月前から、みんなで協力して準備を進めます！</div>
						{["麻婆豆腐の試作会", "チームごとのミーティング&作業"].map(
							(label) => {
								return (
									<div className="w-full flex justify-start gap-4" key={label}>
										<div className="pt-2 pe-1">
											<div className="w-3 h-3 flex justify-center items-center">
												<div className="h-1 w-1 rounded-full bg-beige"></div>
											</div>
										</div>
										<span>
											<span className="me-2 bg-primary text-beige px-4">
												週1
											</span>
											<span>{label}</span>
										</span>
									</div>
								);
							},
						)}

						<div className="w-full flex gap-4 mt-4">
							<div className="pt-2 ps-1">
								<div className="bg-primary w-3 h-3 transform rotate-45"></div>
							</div>
							<span>その他の時期</span>
						</div>
						{[
							"麻婆豆腐や本格四川料理の試作会",
							"麻婆豆腐の美味しい名店巡り・ご飯会",
							"間借り営業や外部イベント出店などの新プロジェクトに向けたミーティング&作業",
						].map((label) => {
							return (
								<div className="w-full flex justify-start gap-4" key={label}>
									<div className="pt-2 pe-1">
										<div className="w-3 h-3 flex justify-center items-center">
											<div className="h-1 w-1 rounded-full bg-beige"></div>
										</div>
									</div>
									<span>
										<span className="me-2 bg-primary text-beige px-4">
											不定期
										</span>
										<span>{label}</span>
									</span>
								</div>
							);
						})}
					</>
				}
			/>

			<Rect
				title={<span>過去の出店情報</span>}
				content={
					<div className="text-gray-200 w-full space-y-2">
						<div className="w-full flex justify-start gap-4">
							<div className="pt-2 pe-1">
								<div className="w-3 h-3 flex justify-center items-center">
									<div className="h-1 w-1 rounded-full bg-beige"></div>
								</div>
							</div>
							<Link
								href="/events/2025"
								className="group flex items-center gap-1"
							>
								<span className="text-lg underline decoration-white/50 group-hover:decoration-white">
									2025年五月祭
								</span>
								<RiExternalLinkLine className="h-4 w-4" />
							</Link>
						</div>
						<div className="ps-8">
							<span className="text-base">🏆 五月祭総選挙模擬店部門第一位</span>
						</div>
					</div>
				}
			/>

			<Calendar />

			<Rect
				title={<span>連絡先</span>}
				content={
					<div className="w-full flex justify-start gap-2">
						<div>
							乘濵楼が少しでも気になってきたら、まずは新歓公式LINEを友だち登録！
							新歓イベントの詳細や最新情報を順次発信中です。
						</div>
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
				}
			/>
		</div>
	);
};

const FadingScroll = () => {
	const [progress, setProgress] = useState(0);
	const [_contentHeight, setContentHeight] = useState(0);
	const contentRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const onScroll = () => {
			const p = Math.min(Math.max(window.scrollY / window.innerHeight, 0), 1);
			setProgress(p);
		};

		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		window.addEventListener("resize", onScroll);
		return () => {
			window.removeEventListener("scroll", onScroll);
			window.removeEventListener("resize", onScroll);
		};
	}, []);

	useEffect(() => {
		const el = contentRef.current;
		if (!el) return;

		const update = () => {
			const h = Math.round(el.getBoundingClientRect().height);
			setContentHeight(h);
		};

		update();
		const ro = new ResizeObserver(update);
		ro.observe(el);

		return () => ro.disconnect();
	}, []);

	return (
		<>
			<div
				className="fixed inset-0 h-screen w-full z-0"
				style={{
					filter: `blur(${progress * 20}px)`,
				}}
			>
				<Hero />
			</div>

			{/* overlay to darken the heroarea on scroll */}
			<div
				className="fixed inset-0 z-5 bg-black"
				style={{
					opacity: progress,
				}}
			/>

			<main className="relative z-10 mt-[100vh] bg-primary">
				<div
					className="min-h-screen w-full text-white"
					style={{
						backgroundColor: `color-mix(in oklab, var(--color-black) ${progress * 100}%, transparent)`,
					}}
				>
					<Main />
				</div>
			</main>
		</>
	);
};

export const Home = () => {
	return <FadingScroll />;
};
