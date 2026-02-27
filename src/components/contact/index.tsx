"use client";
import PillNav from "../ui/pill-nav";
import { Hero } from "./hero";

export const JoinUs = () => {
	return (
		<div className="w-full p-4 text-white">
			<PillNav
				logo="/header.png"
				logoAlt="Company Logo"
				items={[
					{ label: "ホーム", href: "/" },
					{ label: "体験会日程", href: "/schedule" },
					{ label: "出店イベント", href: "/events" },
					{ label: "お問い合わせ", href: "/contact" },
				]}
				activeHref="/contact"
				className="custom-nav"
				ease="power2.easeOut"
				baseColor="#000000"
				pillColor="#ffffff"
				hoveredPillTextColor="#ffffff"
				pillTextColor="#000000"
				initialLoadAnimation={false}
			/>
			<Hero />
			<div className="w-full text-center">Activity</div>
			<div className="w-full text-center">Members</div>
			<div className="w-full text-center">FAQ</div>
			<div className="w-full text-center">Schedule</div>
			<div className="w-full text-center">Contact</div>
		</div>
	);
};
