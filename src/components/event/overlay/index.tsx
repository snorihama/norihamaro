"use client";
import { type FC, useEffect, useState } from "react";
import { AnimatedText } from "./AnimatedText/AnimatedText";
import { ParticleBackground } from "./ParticleBackground/ParticleBackground";

const delay = 0.4;
const span = 1.5;
const texts = [
	{ id: 0, text: "都内の麻婆豆腐を100軒以上食べめぐり、" },
	{ id: 1, text: "たどり着いた究極の麻婆。" },
	{ id: 2, text: "高級中華にも引けをとらない本気の味を" },
	{ id: 3, text: "ご賞味あれ。" },
];

const totalAnimationDuration = `calc(
	${delay}s
	+ var(--transition-slow)
	+ ${span * (texts.length - 1)}s
	+ 1s
)`;

const fadeOutDuration = 0.5;
const fadeOutFinished =
	(delay + 3.0 + span * (texts.length - 1) + 1 + fadeOutDuration) * 1000;

const ForwardIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className="w-6 h-6 text-[#808080]"
			aria-label="Forward"
			role="img"
		>
			<title>Forward</title>
			<path d="M5.055 7.06C3.805 6.347 2.25 7.25 2.25 8.69v8.122c0 1.44 1.555 2.343 2.805 1.628L12 14.471v2.34c0 1.44 1.555 2.343 2.805 1.628l7.108-4.061c1.26-.72 1.26-2.536 0-3.256l-7.108-4.061C13.555 6.346 12 7.249 12 8.689v2.34L5.055 7.061Z" />
		</svg>
	);
};

export const Overlay: FC = () => {
	const [visible, setVisible] = useState(true);
	const [showSkip, setShowSkip] = useState(false);

	useEffect(() => {
		const timer = setTimeout(() => {
			setVisible(false);
		}, fadeOutFinished);
		return () => clearTimeout(timer);
	}, []);

	const handleSkip = () => {
		setVisible(false);
	};

	const handleOverlayClick = () => {
		setShowSkip(true);
	};

	if (!visible) return null;

	return (
		// biome-ignore lint/a11y/useSemanticElements: Need to wrap the child button with clickable div.
		// biome-ignore lint/a11y/useKeyWithClickEvents: Does not expect keyboard input in this overlay content.
		<div
			role="button"
			tabIndex={0}
			className="w-full h-screen flex items-center justify-center fixed inset-0 bg-black z-[1000] animate-fade-out [animation-fill-mode:forwards]"
			style={{
				animationDelay: totalAnimationDuration,
			}}
			onClick={handleOverlayClick}
		>
			<ParticleBackground />
			<AnimatedText texts={texts} delay={delay * 1000} span={span * 1000} />
			{showSkip && (
				<button
					type="button"
					onClick={handleSkip}
					className="absolute top-4 right-4 flex items-center gap-2 px-4 py-2 text-[#808080] cursor-pointer"
				>
					<span>SKIP</span>
					<ForwardIcon />
				</button>
			)}
		</div>
	);
};
