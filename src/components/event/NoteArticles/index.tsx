import Script from "next/script";
import type { CSSProperties } from "react";
import { Section } from "@/components/ui/section";

/* 元noteの埋め込みタグ例: iframe + https://note.com/scripts/embed.js */

const NOTE_EMBED_URLS = [
	"https://note.com/embed/notes/n74fc0a9e6a0e",
	"https://note.com/embed/notes/n54a18d1104f0",
	"https://note.com/embed/notes/n7504c9407b28",
	"https://note.com/embed/notes/n5a949da2f929",
] as const;

const NOTE_EMBED_IFRAME_HEIGHT = 350;

const noteEmbedFrameStyle: CSSProperties = {
	border: 0,
	display: "block",
	width: "100%",
	maxWidth: "min(594px, 99%)",
	margin: "0.75rem 0",
	padding: 0,
	position: "static",
	visibility: "visible",
	overflow: "hidden",
};

export const NoteArticles = () => {
	return (
		<Section id="note-articles">
			<div className="w-full space-y-4">
				<div className="w-full flex flex-col items-center justify-center gap-4">
					<div className="w-full flex flex-col justify-center items-center relative">
						{NOTE_EMBED_URLS.map((src) => (
							<iframe
								key={src}
								title="note 記事の埋め込み"
								className="note-embed"
								style={noteEmbedFrameStyle}
								src={src}
								height={NOTE_EMBED_IFRAME_HEIGHT}
								scrolling="no"
							/>
						))}
						<Script
							src="https://note.com/scripts/embed.js"
							strategy="lazyOnload"
						/>
					</div>
				</div>
			</div>
		</Section>
	);
};
