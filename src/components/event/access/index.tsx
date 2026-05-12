"use client";
import Image from "next/image";
import { Section } from "@/components/ui/section";

export const Access = () => {
	return (
		<Section id="access">
			<div className="w-full flex flex-col gap-4">
				{/* <div className="w-full p-2">
					<RiErrorWarningFill className="h-6 w-6 shrink-0 mr-1 text-red-500 inline" />
					<span className="text-amber-200">
						{
							"ビールのご購入にはアルコールパスポートが必要です。お近くの案内所にて無料で発行できますので着用してお越しください。"
						}
					</span>
				</div> */}

				<div className="w-full p-4 rounded-2xl">
					<Image
						className="w-full rounded-2xl"
						alt="Mapo Tofu Stand"
						height={500}
						width={500}
						src="/map/map2026_vertical.png"
					/>
				</div>
			</div>
		</Section>
	);
};
