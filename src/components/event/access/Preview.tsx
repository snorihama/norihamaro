import { css } from "@panda/css";
import Image from "next/image";
import type { FC } from "react";
import { previewStyles } from "./Preview.recipe";

const XCloseIcon = () => {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 24 24"
			fill="currentColor"
			className={css({
				width: "1.5rem",
				height: "1.5rem",
				color: "white",
			})}
		>
			<path
				fillRule="evenodd"
				d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
				clipRule="evenodd"
			/>
		</svg>
	);
};

export const Preview: FC<{ show: boolean; toggle: () => void }> = ({
	show,
	toggle,
}) => {
	const classes = previewStyles();

	if (!show) return null;

	return (
		<div className={classes.background}>
			<Image
				className={classes.image}
				src="/access-map-portrait.png"
				width={1000}
				height={1000}
				alt="Norihama-lou icon"
			/>
			<button
				type="button"
				onClick={toggle}
				className={css({
					position: "absolute",
					top: "1rem",
					right: "1rem",
					display: "flex",
					alignItems: "center",
					gap: "0.5rem",
					padding: "0.5rem 1rem",
					cursor: "pointer",
					color: "white",
				})}
			>
				CLOSE
				<XCloseIcon />
			</button>
		</div>
	);
};
