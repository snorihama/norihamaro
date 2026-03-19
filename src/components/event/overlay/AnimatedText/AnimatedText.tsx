import { useEffect, useState } from "react";
import { textLineStyle } from "./AnimatedText.recipe";

type TextNode = {
	id: number;
	text: string;
};
export const AnimatedText = ({
	texts,
	delay,
	span = 1000,
}: {
	texts: TextNode[];
	delay: number;
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
				>
					{text.text}
				</div>
			))}
		</div>
	);
};
