import { cva } from "@panda/css";

export const textLineStyle = cva({
	base: {
		fontSize: "xl",
		lineHeight: "tall",
		mb: "1.2rem",
		opacity: 0,

		/** ダークシルバー　→ ライトシルバー　→ ダークシルバー */
		backgroundImage: `linear-gradient(90deg,#A0A0A0 0%,#E0E0E0 50%,#A0A0A0 100%)`,

		// グラデーションを文字にクリップ
		color: "transparent",
		backgroundClip: "text",
		WebkitTextFillColor: "transparent",

		transform: "translateY(30px) scale(0.95)",
		transition:
			"opacity var(--transition-slow) cubic-bezier(0.4, 0, 0.2, 1), " +
			"transform var(--transition-slow) cubic-bezier(0.4, 0, 0.2, 1)",

		position: "relative",
		px: "4",
		textShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",

		_after: {
			content: '""',
			position: "absolute",
			bottom: "-0.5rem",
			left: "50%",
			transform: "translateX(-50%)",
			width: 0,
			height: "1px",
			background: `linear-gradient(90deg,rgba(229, 75, 75, 0) 0%,token(colors.accent) 50%,rgba(229, 75, 75, 0) 100%)`,
			transition: "width var(--transition-slow) cubic-bezier(0.4, 0, 0.2, 1)",
			transitionDelay: "0.5s",
		},
	},
	variants: {
		visible: {
			true: {
				opacity: 1,
				transform: "translateY(0) scale(1)",
				_after: {
					width: "80px",
				},
			},
		},
	},
});
