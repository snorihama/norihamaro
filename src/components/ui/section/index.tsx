import Image from "next/image";
import type { FC } from "react";
import { LeftDecoration } from "./decorations/left";
import { LeftBottomDecoration } from "./decorations/leftBottom";
import { RightDecoration } from "./decorations/right";
import { RightBottomDecoration } from "./decorations/rightBottom";
export type Tags = "info" | "menu" | "access" | "about-us" | "blog" | "tips";

export const isTag = (id: string): id is Tags => {
	try {
		const _ = id as Tags;
		return true;
	} catch (_error) {
		return false;
	}
};

type Props = {
	id: Tags;
	className?: string;
	children?: React.ReactNode;
};

const HeaderImg = null;
const idToLabel = (id: Tags): string | typeof HeaderImg => {
	switch (id) {
		case "info":
			return null;
		case "menu":
			return "メニュー";
		case "access":
			return "アクセス";
		case "about-us":
			return "ご挨拶";
		case "blog":
			return "こだわり";
		case "tips":
			return "制作秘話";
		default:
			return id as never; // exhaustive matching guard
	}
};

export const Section: FC<Props> = ({ id, children }) => {
	const label = idToLabel(id);
	return (
		<div id={id} className="w-full px-8 flex flex-col items-center">
			<div className="w-2/3 mx-auto lg:w-1/3">
				<LeftDecoration />
				<LeftBottomDecoration />
				<RightDecoration />
				<RightBottomDecoration />
				<div className="w-full h-16 p-2 bg-black flex items-center justify-center font-bold text-2xl text-beige text-center">
					{label === HeaderImg ? (
						<div className="w-full h-full flex items-center justify-center">
							<Image
								src="/header-mini.png"
								alt="Norihama-lou icon"
								width={1000}
								height={1000}
								className="h-8 w-auto object-contain object-center"
							/>
						</div>
					) : (
						label
					)}
				</div>
			</div>

			<div className="w-full p-4 bg-black rounded-b-lg lg:w-1/2">
				{children}
			</div>
		</div>
	);
};
