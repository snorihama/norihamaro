interface Particle {
	x: number;
	y: number;
	size: number;
	speedX: number;
	speedY: number;
	opacity: number;
	life: number;
	maxLife: number;
	wiggle: number;
	wiggleSpeed: number;
}

export class ParticleSystem {
	private canvas: HTMLCanvasElement | null = null;
	private ctx: CanvasRenderingContext2D | null = null;
	private particles: Particle[] = [];
	private animationFrameId: number | null = null;

	constructor(
		canvasId: string,
		private maxParticles = 100,
	) {
		this.setup(canvasId);
	}

	private setup(canvasId: string): void {
		this.canvas = document.getElementById(canvasId) as HTMLCanvasElement;
		if (!this.canvas) return;

		this.ctx = this.canvas.getContext("2d");
		if (!this.ctx) return;

		this.resizeCanvas();
		window.addEventListener("resize", () => this.resizeCanvas());

		// document.addEventListener("mousemove", (e) => {
		// 	this.mouseX = e.clientX;
		// 	this.mouseY = e.clientY;
		// 	this.isMouseMoving = true;

		// 	if (this.mouseTimer) clearTimeout(this.mouseTimer);
		// 	this.mouseTimer = setTimeout(() => {
		// 		this.isMouseMoving = false;
		// 	}, 100);

		// 	if (Math.random() > 0.7) {
		// 		this.addParticle(this.mouseX, this.mouseY);
		// 	}
		// });

		// Start with some initial particles
		for (let i = 0; i < 20; i++) {
			this.addParticle(
				Math.random() * window.innerWidth,
				window.innerHeight + Math.random() * 100,
			);
		}

		this.start();
	}

	private resizeCanvas(): void {
		if (!this.canvas) return;
		this.canvas.width = window.innerWidth;
		this.canvas.height = window.innerHeight;
	}

	public addParticle(x: number, y: number): void {
		if (this.particles.length >= this.maxParticles) return;

		const particle: Particle = {
			x,
			y,
			size: Math.random() * 100 + 50, // Larger particles for smoke effect
			speedX: (Math.random() - 0.5) * 0.5, // Slower horizontal movement
			speedY: Math.random() * -1 - 0.75, // Gentle upward movement
			opacity: Math.random() * 0.3 + 0.1, // Lower opacity for smoke effect
			life: 0,
			maxLife: Math.random() * 200 + 500, // Longer life for sustained effect
			wiggle: 0,
			wiggleSpeed: (Math.random() - 0.5) * 0.05, // Subtle wiggle movement
		};

		this.particles.push(particle);
	}

	private update(): void {
		if (!this.canvas || !this.ctx) return;

		this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

		// Regularly add new particles from the bottom
		if (Math.random() > 0.85) {
			this.addParticle(
				Math.random() * this.canvas.width,
				this.canvas.height + 50,
			);
		}

		// Update and draw particles
		for (let i = 0; i < this.particles.length; i++) {
			const p = this.particles[i];
			p.life++;

			// Remove dead particles
			if (p.life > p.maxLife) {
				this.particles.splice(i, 1);
				i--;
				continue;
			}

			// Calculate opacity based on life
			const opacity = p.opacity * (1 - p.life / p.maxLife);

			// Update position with wiggle movement
			p.wiggle += p.wiggleSpeed;
			p.x += Math.sin(p.wiggle) * 0.3 + p.speedX;
			p.y += p.speedY;

			// Draw smoke particle
			this.ctx.beginPath();
			const gradient = this.ctx.createRadialGradient(
				p.x,
				p.y,
				0,
				p.x,
				p.y,
				p.size,
			);
			gradient.addColorStop(0, `rgba(255, 255, 255, ${opacity})`);
			gradient.addColorStop(1, "rgba(255, 255, 255, 0)");
			this.ctx.fillStyle = gradient;
			this.ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
			this.ctx.fill();
		}

		this.animationFrameId = requestAnimationFrame(() => this.update());
	}

	public start(): void {
		if (this.animationFrameId) return;
		this.update();
	}

	public stop(): void {
		if (this.animationFrameId) {
			cancelAnimationFrame(this.animationFrameId);
			this.animationFrameId = null;
		}
	}
}
