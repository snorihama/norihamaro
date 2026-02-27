export const RightBottomDecoration = () => {
	return (
		// pair: relative && absolute
		<div className="w-full relative">
			<div className="absolute right-0 -bottom-16 mr-1 mb-1">
				{/* 1st row */}
				<div className="flex justify-end">
					<div className="w-[0.25rem] h-[0.5rem] border-r border-beige"></div>
				</div>
				{/* 2nd row */}
				<div className="flex justify-end">
					<div className="w-[0.3rem] h-[0.3rem] border-r border-b border-beige"></div>
					<div className="w-[0.25rem] h-[0.3rem] border-y border-r border-beige"></div>
					<div className="w-[0.25rem] h-[0.3rem] border-b border-r border-beige"></div>
				</div>
				{/* 3rd row */}
				<div className="flex justify-end">
					<div className="w-[0.3rem] h-[0.25rem] border-x border-b border-beige"></div>
					<div className="w-[0.25rem] h-[0.25rem] border-b border-r border-beige"></div>
					<div className="w-[0.25rem] h-[0.25rem] border-b border-beige"></div>
				</div>
				{/* 4nd row */}
				<div className="flex justify-end">
					<div className="w-[1.5rem] h-[0.25rem] border-b border-beige"></div>
					<div className="w-[0.25rem] h-[0.25rem] border-b border-r border-beige"></div>
					<div className="w-[0.25rem] h-[0.25rem] border-r border-beige"></div>
					<div className="w-[0.25rem] h-[0.25rem] border-b border-r border-beige"></div>
				</div>
			</div>
		</div>
	);
};
