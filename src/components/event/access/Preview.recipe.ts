import { sva } from "@panda/css";

export const previewStyles = sva({
	slots: ["image", "background"],
	base: {
		background: {
			position: "fixed",
			inset: 0,
			zIndex: 50,
			display: "flex",
			alignItems: "center",
			justifyContent: "center",
			backgroundColor: "black",
			paddingY: "2rem",
		},
		image: {
			width: "full",
			height: "full",
			objectFit: "contain",
			objectPosition: "center",
		},
	},
});
