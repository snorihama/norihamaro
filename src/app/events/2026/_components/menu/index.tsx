import Image from "next/image";
import { AnimatedSection } from "@/components/ui/fade-in-up";
import { Section } from "@/components/ui/section";

export const FoodDrinkMenu = () => {
	return (
		<Section id="menu">
			<div className="w-full flex justify-start items-center pt-4">
				<AnimatedSection>
					<Image
						height={500}
						width={500}
						className="object-contain object-center w-full rounded-[3rem]"
						src="/mapo-in-dish.jpg"
						alt="Mapo Tofu Dish"
					/>
				</AnimatedSection>
			</div>
			<AnimatedSection>
				<div className="w-full flex justify-center items-center text-white px-4 pt-4">
					<div className="w-1/2 border-r flex flex-col text-right pr-4">
						<div>{"本格麻婆豆腐"}</div>
						<div>{"塩にぎり"}</div>
						<div>{"ステッカー"}</div>
					</div>
					<div className="w-1/2 flex flex-col pl-4">
						<div>
							<span className="text-lg font-extrabold text-primary pr-2">
								{"600"}
							</span>
							<span>{"円"}</span>
						</div>
						<div>
							<span className="text-lg font-extrabold text-primary pr-2">
								{"300"}
							</span>
							<span>{"円"}</span>
						</div>
						<div>
							<span className="text-lg font-extrabold text-primary pr-2">
								{"200"}
							</span>
							<span>{"円"}</span>
						</div>
					</div>
				</div>
			</AnimatedSection>
		</Section>
	);
};
