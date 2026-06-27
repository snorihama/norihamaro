import clsx from "clsx";
import type React from "react";
import { useInView } from "react-intersection-observer";

export const AnimatedSection = ({
	children,
	className,
}: {
	children: React.ReactNode;
	className?: string;
}) => {
	const { ref, inView } = useInView({ threshold: 0.2 });
	return (
		<div
			ref={ref}
			className={clsx(
				className,
				"will-change-[opacity,transform]",
				inView ? "animate-fade-in-up" : "opacity-0",
			)}
		>
			{children}
		</div>
	);
};
