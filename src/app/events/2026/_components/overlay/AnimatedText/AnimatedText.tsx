import clsx from "clsx";
import { useEffect, useState } from "react";
import "./AnimatedText.css";

const textLineStyle = ({ visible }: { visible: boolean }) =>
	clsx(
		"text-lg leading-relaxed mb-[1.2rem] opacity-0",
		"bg-[linear-gradient(90deg,#A0A0A0_0%,#E0E0E0_50%,#A0A0A0_100%)]",
		"text-transparent bg-clip-text [-webkit-text-fill-color:transparent]",
		"translate-y-[30px] scale-95",
		"text-line-transition",
		"relative px-4",
		"[text-shadow:0_2px_4px_rgba(0,0,0,0.1)]",
		"after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px",
		"after:bg-[linear-gradient(90deg,rgba(229,75,75,0)_0%,#e54b4b_50%,rgba(229,75,75,0)_100%)]",
		visible && "opacity-100 translate-y-0 scale-100 after:w-[80px]",
	);

type TextNode = {
	id: number;
	text: string;
};

/**
 * AnimatedText component
 * @param props
 * @param props.texts - Array of text nodes to be animated
 * @param props.delay - Delay before the animation starts (in milliseconds)
 * @param props.transition - Duration of the transition (in seconds)
 * @param props.span - Time span between each text animation (in milliseconds, default is 1000ms)
 * @returns
 */
export const AnimatedText = ({
	texts,
	delay,
	transition,
	span = 1000,
}: {
	texts: TextNode[];
	delay: number;
	transition: number;
	span?: number;
}) => {
	const [visibleIndices, setVisibleIndices] = useState<boolean[]>(
		Array(texts.length).fill(false),
	);

	useEffect(() => {
		const timers = texts.map((_, index) =>
			setTimeout(
				() => {
					setVisibleIndices((prev) => {
						const newState = [...prev];
						newState[index] = true;
						return newState;
					});
				},
				delay + index * span,
			),
		);

		return () => {
			for (const timer of timers) {
				clearTimeout(timer);
			}
		};
	}, [texts, delay, span]);

	return (
		<div className="flex flex-col justify-center items-center min-h-80">
			{texts.map((text) => (
				<div
					key={text.id}
					className={textLineStyle({ visible: visibleIndices[text.id] })}
					style={
						{
							"--text-transition-duration": `${transition}s`,
						} as React.CSSProperties
					}
				>
					{text.text}
				</div>
			))}
		</div>
	);
};
