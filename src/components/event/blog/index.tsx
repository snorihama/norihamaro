import { css } from "@panda/css";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { Section } from "@/components/section";

const SubSection = ({ str }: { str: string }) => {
	const { ref, inView } = useInView({
		threshold: 0.2,
	});
	return (
		<div ref={ref}>
			<div
				className={css({
					animationName: inView ? "slideInLeft" : "none",
					animationDuration: "1s",
					animationFillMode: "forwards",
					width: "fit",
					borderBottom: "solid 1px",
					borderColor: "primary",
					paddingRight: "1rem",
					fontWeight: "bold",
					fontSize: "xl",
				})}
			>
				{str}
			</div>
		</div>
	);
};

export const Blog = () => {
	return (
		<Section id="blog">
			<div
				className={css({
					width: "full",
					color: "white",
					spaceY: "1rem",
				})}
			>
				<SubSection str="食材へのこだわり" />
				<Image
					src="/material-1.jpg"
					alt="material-1"
					height={500}
					width={500}
					className={css({
						width: "full",
						rounded: "lg",
					})}
				/>
				<div
					className={css({
						whiteSpace: "pre-wrap",
					})}
				>
					{`乘濵楼の美味しさは、食材への徹底的なこだわりから来ています。すべての食材について、複数種類を試し、吟味した上で選んでいます。麻婆豆腐の核となる豆腐は、形が残りつつも口触り滑らかな、調味料と調和する、麻婆豆腐に合った豆腐を使用しています。旨みの元となるひき肉は国産のブランド豚を粗挽きにし、肉の旨みと食感を最大限に引き出しています。
さらに調味料は10種類以上使用し、それぞれに強いこだわりを持っています。特に豆板醤は本場四川省のものを2種類使用し、辛味と旨みのバランスが最適になるよう配合しています。他には豆豉など旨みの強い食材を入れ、立体的な味に仕上げています。
麻婆豆腐の味の仕上げに書かせないラー油・化粧油にもこだわり、複数種類を配合しています。また、花椒（ホワジャオ）も本場四川省の香り高い青花椒を使い、全体の味をまとめあげます（花椒の有無はお選びいただけますので苦手な方もご安心ください）。
`}
				</div>

				<SubSection str="中華鍋へのこだわり" />
				<Image
					src="/mapo-pan.jpg"
					alt="mapo-pan"
					height={500}
					width={500}
					className={css({
						width: "full",
						rounded: "lg",
					})}
				/>
				<div
					className={css({
						whiteSpace: "pre-wrap",
					})}
				>
					{`乘濱楼は五月祭当日も中華鍋を振るっています。
熱伝導率の高さと香り立ちが格別な中華鍋。一般的なフライパンでは決して出せない「wok hei（鍋気）」と呼ばれる風味を出すことができます。
五月祭当日も変わらず、この鉄製中華鍋で丁寧に調理して本格麻婆豆腐をご提供しますので、味とともに4台同時に進む調理の様子も見てお楽しみください。
`}
				</div>
			</div>
		</Section>
	);
};
