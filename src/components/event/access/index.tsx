"use client";
import { RiErrorWarningFill } from "@remixicon/react";
import Image from "next/image";
import { useState } from "react";
import { Section } from "@/components/ui/section";
import { Preview } from "./Preview";

export const Access = () => {
	const [showPreview, setShowPreview] = useState(false);
	const toggle = () => setShowPreview((prev) => !prev);

	return (
		<Section id="access">
			<div className="w-full flex flex-col gap-4">
				<div className="w-full p-2">
					<RiErrorWarningFill className="h-6 w-6 shrink-0 mr-1 text-red-500 inline" />
					<span className="text-amber-200">
						{
							"ビールのご購入にはアルコールパスポートが必要です。お近くの案内所にて無料で発行できますので着用してお越しください。"
						}
					</span>
				</div>

				<div className="w-full p-4 rounded-2xl">
					<Image
						className="w-full rounded-2xl"
						alt="Mapo Tofu Stand"
						height={500}
						width={500}
						src="/access-map.png"
						onClick={toggle}
					/>
				</div>
				<span className="text-white text-sm text-center">
					{"画像をタップすると拡大表示できます"}
				</span>
			</div>
			<Preview show={showPreview} toggle={toggle} />
		</Section>
	);
};
