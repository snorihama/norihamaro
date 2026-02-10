import clsx from "clsx";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Section } from "@/components/section";

export const FoodDrinkMenu = () => {
	const { ref, inView } = useInView({
		threshold: 0,
	});
	return (
		<Section id="menu">
			<div className="w-full flex justify-start items-center pt-4">
				<Image
					height={500}
					width={500}
					className="object-contain object-center w-full rounded-[3rem]"
					src="/mapo-in-dish.jpg"
					alt="Mapo Tofu Dish"
				/>
			</div>
			<div className="w-full flex justify-center items-center text-white px-4 pt-4">
				<div className="w-1/2 border-r flex flex-col text-right pr-4">
					<div className={clsx(inView && "animate-slide-in-right")}>
						{"本格麻婆豆腐"}
					</div>
					<div className={clsx(inView && "animate-slide-in-right")}>
						{"塩にぎり"}
					</div>
					<div className={clsx(inView && "animate-slide-in-right")}>
						{"ビール"}
					</div>
				</div>
				<div className="w-1/2 flex flex-col pl-4">
					<div ref={ref} className={clsx(inView && "animate-slide-in-left")}>
						<span className="text-lg font-extrabold text-primary pr-2">
							{"500"}
						</span>
						<span>{"円"}</span>
					</div>
					<div ref={ref} className={clsx(inView && "animate-slide-in-left")}>
						<span className="text-lg font-extrabold text-primary pr-2">
							{"200"}
						</span>
						<span>{"円"}</span>
					</div>
					<div ref={ref} className={clsx(inView && "animate-slide-in-left")}>
						<span className="text-lg font-extrabold text-primary pr-2">
							{"500"}
						</span>
						<span>{"円"}</span>
					</div>
				</div>
			</div>
		</Section>
	);
};
