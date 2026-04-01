import {
	RiMapPinFill,
	RiMoneyCnyCircleFill,
	RiTimeFill,
} from "@remixicon/react";

export const Calendar = () => {
	const weekDays = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
	const aprilStartOffset = 3; // 4/1 starts on Wednesday
	const aprilDays = 30;
	const orientationDays = [3, 5];
	const guidanceDays = [9, 15, 21];
	const trialDays = [11, 18, 26, 29];
	const lastDay = 30;
	const calendarCells = [
		...Array.from({ length: aprilStartOffset }, () => null),
		...Array.from({ length: aprilDays }, (_, i) => i + 1),
	];

	return (
		<div className="w-full lg:w-1/3 text-gray-200 pb-4">
			<div className="w-full flex gap-2 justify-center items-center text-beige">
				<span>新歓スケジュール</span>
			</div>
			<div className="w-full p-4">
				<div className="rounded-lg border border-beige/40 bg-primary/30 p-3">
					<div className="mb-3 text-center text-white text-lg font-semibold">
						2026 / 04
					</div>
					<div className="grid grid-cols-7 gap-1 text-center text-xs text-beige/80">
						{weekDays.map((day) => (
							<div key={day} className="py-1">
								{day}
							</div>
						))}
					</div>
					<div className="mt-1 grid grid-cols-7 gap-1 text-center text-sm">
						{calendarCells.map((date, index) => {
							if (date === null) {
								// biome-ignore lint/suspicious/noArrayIndexKey: This is a static calendar, so using index as key is acceptable here.
								return <div key={`empty-${index}`} className="h-8" />;
							}

							const isOrientationDay = orientationDays.includes(date);
							const isGuidanceDay = guidanceDays.includes(date);
							const isTrialDay = trialDays.includes(date);
							const isLastDay = date === lastDay;

							return (
								<div
									key={date}
									className={
										isOrientationDay
											? "h-8 rounded-md bg-blue-800/50 text-white font-bold flex items-center justify-center"
											: isGuidanceDay
												? "h-8 rounded-md bg-orange-700/50 text-white font-bold flex items-center justify-center"
												: isTrialDay
													? "h-8 rounded-md bg-green-800/50 text-white font-bold flex items-center justify-center"
													: isLastDay
														? "h-8 rounded-md border-2 border-white/70 text-white font-extrabold flex items-center justify-center"
														: "h-8 rounded-md border border-white/15 text-white/90 flex items-center justify-center"
									}
								>
									{date}
								</div>
							);
						})}
					</div>
				</div>
			</div>
			<div className="w-full px-4 text-beige space-y-2">
				<div className="border-2 border-blue-800/70 rounded-md p-4">
					<div>サーオリ</div>
					<div className="flex justify-start items-center gap-2">
						<RiMapPinFill className="scale-75" />
						<span>駒場11号館1108教室</span>
					</div>
				</div>
				<div className="border-2 border-orange-700/70 rounded-md p-4">
					<div>説明会</div>
					<div className="flex justify-start items-center gap-2">
						<RiTimeFill className="scale-75" />
						<span>20:00～20:30</span>
					</div>
					<div className="flex justify-start items-center gap-2 mt-2">
						<RiMapPinFill className="scale-75" />
						<span>オンライン (Zoom)</span>
					</div>
				</div>
				<div className="border-2 border-green-800/70 rounded-md p-4">
					<div>体験会</div>
					<div className="text-xs">
						乘濵楼の本格麻婆豆腐を一緒に作って食べよう！
					</div>
					<div className="flex justify-start items-center gap-2">
						<RiTimeFill className="scale-75" />
						<span>13:00～16:00</span>
					</div>
					<div className="flex justify-start items-center gap-2 mt-2">
						<RiMapPinFill className="scale-75" />
						<span>江戸川橋</span>
					</div>
					<div className="flex justify-start items-center gap-2 mt-2">
						<RiMoneyCnyCircleFill className="scale-75" />
						<span>500円</span>
					</div>
				</div>
				<div className="border-2 border-white/50 rounded-md p-4">
					<div>4月入会の〆切は30日まで！</div>
				</div>
			</div>
		</div>
	);
};
