import clsx from "clsx";

export const textLineStyle = ({ visible }: { visible: boolean }) =>
	clsx(
		"text-xl leading-relaxed mb-[1.2rem] opacity-0",
		"bg-[linear-gradient(90deg,#A0A0A0_0%,#E0E0E0_50%,#A0A0A0_100%)]",
		"text-transparent bg-clip-text [-webkit-text-fill-color:transparent]",
		"translate-y-[30px] scale-95",
		"[transition:opacity_var(--transition-slow)_cubic-bezier(0.4,0,0.2,1),transform_var(--transition-slow)_cubic-bezier(0.4,0,0.2,1)]",
		"relative px-4",
		"[text-shadow:0_2px_4px_rgba(0,0,0,0.1)]",
		"after:content-[''] after:absolute after:-bottom-2 after:left-1/2 after:-translate-x-1/2 after:w-0 after:h-px",
		"after:bg-[linear-gradient(90deg,rgba(229,75,75,0)_0%,#e54b4b_50%,rgba(229,75,75,0)_100%)]",
		"after:[transition:width_var(--transition-slow)_cubic-bezier(0.4,0,0.2,1)] after:[transition-delay:0.5s]",
		visible && "opacity-100 translate-y-0 scale-100 after:w-[80px]",
	);
