import { clsx } from "clsx";
import { useMemo } from "react";

export const Section = ({ text }: { text: string }) => {
	return (
		<div className="text-center text-white border-2 border-white p-0.5">
			<div className="w-full bg-white px-4 py-1">
				<p className="text-primary text-lg font-bold">{text}</p>
			</div>
		</div>
	);
};

const _SubSection = ({
	text,
	classNames,
}: {
	text: string;
	classNames?: string;
}) => {
	return (
		<div className={clsx("w-full", classNames)}>
			{/* message wrapper */}
			<div className="w-full flex flex-row gap-0 items-center justify-center px-8">
				<p className="text-white text-lg shrink-0">{text}</p>
			</div>
			{/* object wrapper */}
			<div className="flex w-full flex-row items-center justify-between gap-0 px-8">
				{/* rotated square */}
				<div className="h-1 w-1 bg-white transform rotate-45"></div>
				{/* linear line */}
				<div className="h-px w-full bg-white"></div>
				{/* rotated square */}
				<div className="h-1 w-1 bg-white transform rotate-45"></div>
			</div>
		</div>
	);
};

export const Day = ({ day }: { day: string }) => {
	return (
		<div className="text-center text-white border-2 border-white p-0.5 shrink-0">
			<div className="w-full bg-white px-1">
				<p className="text-primary text-sm font-bold">{day}</p>
			</div>
		</div>
	);
};

export const Row = ({ children }: { children: React.ReactNode }) => {
	return (
		<div className="flex items-center gap-2">
			<span className="h-1.5 w-1.5 shrink-0 rounded-full bg-white" />
			{children}
		</div>
	);
};
export const IndentRow = ({
	children,
	tabs,
}: {
	children: React.ReactNode;
	tabs: number;
}) => {
	const indexes = useMemo(() => {
		return Array.from({ length: tabs }, (_, i) => i);
	}, [tabs]);
	return (
		<div className="flex items-center gap-2">
			{indexes.map((i) => (
				<span
					key={i}
					className="h-1.5 w-1.5 shrink-0 rounded-full bg-transparent"
				/>
			))}
			{children}
		</div>
	);
};
