"use client";
import { css } from "@panda/css";
import type { FC } from "react";
import { useWaitTime } from "@/hooks/waitTime";
import { Devider } from "../devider";
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
	const { wait, error } = useWaitTime();
	return (
		<div
			className={css({
				width: "full",
				backgroundColor: "black",
			})}
		>
			<div
				className={css({
					width: "full",
					display: "flex",
					flexDirection: "column",
					alignItems: "center",
					gap: "2rem",
					paddingBottom: "calc(10vh)", // for floating area
				})}
			>
				<Hero />
				<Devider />
				<Info wait={wait} error={error} />
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
			<FloatingButton wait={wait} error={error} />
			<InitScrollPlugin />
			<Overlay />
		</div>
	);
};
