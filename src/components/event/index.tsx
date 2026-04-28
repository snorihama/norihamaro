"use client";
import type { FC } from "react";
import { HeroAreaProvider } from "@/context/provider";
import { Devider } from "../ui/devider";
import { AboutUs } from "./about-us";
import { Access } from "./access";
import { Blog } from "./blog";
import { FloatingButton } from "./floating-button";
import { Hero } from "./hero";
import { Info } from "./Info";
import { FoodDrinkMenu } from "./menu";
import { Overlay } from "./overlay";
import { InitScrollPlugin } from "./scroll-plugin";
import { Tips } from "./tips";

export const Main: FC = () => {
	return (
		<HeroAreaProvider>
			<div className="w-full bg-black">
				<div className="w-full flex flex-col items-center gap-8 pb-[10vh]">
					<Hero />
					<Devider />
					<Info />
					<Devider />
					<FoodDrinkMenu />
					<Devider />
					<Access />
					<Devider />
					<AboutUs />
					<Devider />
					<Blog />
					<Devider />
					<Tips />
				</div>
				<FloatingButton />
				<InitScrollPlugin />
				<Overlay />
			</div>
		</HeroAreaProvider>
	);
};
