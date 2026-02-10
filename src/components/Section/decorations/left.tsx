export const LeftDecoration = () => {
	return (
		// pair: relative && absolute
		<div className="w-full relative">
			<div className="absolute ml-1 mt-1">
				{/* 1st row */}
				<div className="flex">
					<div className="w-[0.25rem] h-[0.25rem] border-t border-l border-beige"></div>
					<div className="w-[0.25rem] h-[0.25rem] border-l border-beige"></div>
					<div className="w-[0.25rem] h-[0.25rem] border-t border-l border-beige"></div>
					<div className="w-[1.5rem] h-[0.25rem] border-t border-beige"></div>
				</div>
				{/* 2nd row */}
				<div className="flex">
					<div className="w-[0.25rem] h-[0.25rem] border-t border-beige"></div>
					<div className="w-[0.25rem] h-[0.25rem] border-t border-l border-beige"></div>
					<div className="w-[0.3rem] h-[0.25rem] border-x border-t border-beige"></div>
				</div>
				{/* 3rd row */}
				<div className="flex">
					<div className="w-[0.25rem] h-[0.3rem] border-t border-l border-beige"></div>
					<div className="w-[0.25rem] h-[0.3rem] border-y border-l border-beige"></div>
					<div className="w-[0.3rem] h-[0.3rem] border-t border-l border-beige"></div>
				</div>
				{/* 4th row */}
				<div className="flex">
					<div className="w-[0.25rem] h-[0.5rem] border-l border-beige"></div>
				</div>
			</div>
		</div>
	);
};
