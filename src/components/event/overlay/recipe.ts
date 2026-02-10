import { css } from "@panda/css";

export const overlayStyles = css({
	width: "full",
	height: "100lvh",
	display: "flex",
	alignItems: "center",
	justifyContent: "center",
	position: "fixed",
	inset: 0,
	background: "black",
	opacity: 1,
	zIndex: 1000,
	animationName: "fadeOut",
	animationDuration: "500ms",
	animationTimingFunction: "ease",
	animationFillMode: "forwards",
});
