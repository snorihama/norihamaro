"use client";
import { css } from "@panda/css";
import { RiErrorWarningFill } from "@remixicon/react";
import Image from "next/image";
import { useState } from "react";
import { Section } from "@/components/section";
import { Preview } from "./Preview";

export const Access = () => {
	const [showPreview, setShowPreview] = useState(false);
	const toggle = () => setShowPreview((prev) => !prev);

	return (
		<Section id="access">
			<div
				className={css({
					width: "full",
					display: "flex",
					flexDirection: "column",
					gap: "1rem",
				})}
			>
				<div
					className={css({
						width: "full",
						padding: "0.5rem",
					})}
				>
					<RiErrorWarningFill
						className={css({
							height: "1.5rem",
							width: "1.5rem",
							flexShrink: 0,
							marginRight: "0.25rem",
							color: "red.500",
							display: "inline",
						})}
					/>
					<span
						className={css({
							color: "amber.200",
						})}
					>
						{
							"ビールのご購入にはアルコールパスポートが必要です。お近くの案内所にて無料で発行できますので着用してお越しください。"
						}
					</span>
				</div>

				<div
					className={css({
						width: "full",
						padding: "1rem",
						rounded: "2xl",
					})}
				>
					<Image
						className={css({
							width: "full",
							borderRadius: "2xl",
						})}
						alt="Mapo Tofu Stand"
						height={500}
						width={500}
						src="/access-map.png"
						onClick={toggle}
					/>
				</div>
				<span
					className={css({
						color: "white",
						fontSize: "sm",
						textAlign: "center",
					})}
				>
					{"画像をタップすると拡大表示できます"}
				</span>
			</div>
			<Preview show={showPreview} toggle={toggle} />
		</Section>
	);
};
