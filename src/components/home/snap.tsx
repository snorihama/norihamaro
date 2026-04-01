"use client";
import { motion } from "framer-motion";
import type { ReactNode } from "react";

const ScrollExperience = ({
	heroArea,
	contentArea,
}: {
	heroArea: ReactNode;
	contentArea: ReactNode;
}) => {
	return (
		<div className="relative h-screen overflow-y-scroll snap-y snap-mandatory scroll-smooth">
			{/* Section 1: Red */}
			<section
				id="red-section"
				className="h-screen w-full snap-start flex flex-col items-center justify-center bg-primary transition-colors duration-700"
			>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					className="w-full text-center text-white"
				>
					{heroArea}
				</motion.div>
			</section>

			{/* Gradient Transition */}
			<section className="h-screen w-full snap-start flex flex-col items-center justify-center bg-linear-to-b from-primary to-zinc-950" />

			{/* Section 2: Black */}
			<section
				id="black-section"
				className="min-h-screen w-full snap-start flex flex-col items-center justify-center bg-zinc-950 transition-colors duration-700"
			>
				<motion.div
					initial={{ opacity: 0, scale: 0.9 }}
					whileInView={{ opacity: 1, scale: 1 }}
					className="text-center text-white"
				>
					{contentArea}
				</motion.div>
			</section>
		</div>
	);
};

export default ScrollExperience;
