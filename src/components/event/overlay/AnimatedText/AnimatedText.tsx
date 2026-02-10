import { css } from "@panda/css";
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
		texts.forEach((_, index) => {
			const timer = setTimeout(
				() => {
					setVisibleIndices((prev) => {
						const newState = [...prev];
						newState[index] = true;
						return newState;
					});
				},
				delay + index * span,
			);

			return () => clearTimeout(timer);
		});
	}, [texts, delay, span]);

	return (
		<div
			className={css({
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				alignItems: "center",
				minHeight: "320px",
			})}
		>
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
