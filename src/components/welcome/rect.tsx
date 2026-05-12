export const Rect = ({
	title,
	content,
}: {
	title: React.ReactNode;
	content: React.ReactNode;
}) => {
	return (
		<div className="w-full lg:w-1/3 text-gray-200">
			<div className="w-full flex gap-2 justify-center items-center text-beige">
				{title}
			</div>
			<div className="w-full p-4">
				<div className="border-2 border-solid border-primary p-0.5">
					<div className="border border-solid border-primary p-4 space-y-1 text-left">
						{content}
					</div>
				</div>
			</div>
		</div>
	);
};
