import { type FC, useEffect, useRef } from "react";
import { ParticleSystem } from "./particle";

export const ParticleBackground: FC = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const particleSystemRef = useRef<ParticleSystem | null>(null);

	useEffect(() => {
		if (!canvasRef.current) return;

		// Give the canvas an id
		canvasRef.current.id = "particle-canvas";

		// Create particle system
		particleSystemRef.current = new ParticleSystem("particle-canvas");

		// Clean up
		return () => {
			if (particleSystemRef.current) {
				particleSystemRef.current.stop();
			}
		};
	}, []);

	return (
		<canvas
			ref={canvasRef}
			className="particle-canvas"
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				width: "100%",
				height: "100%",
				pointerEvents: "none",
				zIndex: 0,
			}}
		/>
	);
};
