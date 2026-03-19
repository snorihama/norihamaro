import "./style.css";
import clsx from "clsx";
export const VerticalText = ({
	text,
	className,
}: {
	text: string;
	className?: string;
}) => {
	return (
		<div className={clsx("vertical-text", className)}>
			{text.split("").map((char, index) => (
				// biome-ignore lint/suspicious/noArrayIndexKey: chars are static and never reordered
				<span key={`${char}-${index}`}>{char}</span>
			))}
		</div>
	);
};
