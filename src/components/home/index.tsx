"use client";
import { useMobile } from "@/hooks/use-mobile";
import PillNav from "@/components/ui/pill-nav";

export const Home = () => {
	const _isMobile = useMobile();
	return (
		<div className="pt-4">
			{/* nav bar */}
			{/* <div className="h-16 w-full flex flex-row justify-between items-center px-8">
                <Image className="h-full w-fit" src="/header.png" alt="mapo.tofu" height={490} width={3850} />
                <div className="flex flex-row gap-4">
                    <Link href="/" className="text-beige text-3xl">Home</Link>
                    <Link href="/schedule" className="text-beige text-3xl">Schedule</Link>
                    <Link href="/events" className="text-beige text-3xl">Events</Link>
                    <Link href="/contact" className="text-beige text-3xl">Contact</Link>
                </div>
            </div> */}

			{/* floating object */}
			<PillNav
				logo="/header.png"
				logoAlt="Company Logo"
				items={[
					{ label: "ホーム", href: "/" },
					{ label: "体験会日程", href: "/schedule" },
					{ label: "出店イベント", href: "/events" },
					{ label: "お問い合わせ", href: "/contact" },
				]}
				activeHref="/"
				className="custom-nav"
				ease="power2.easeOut"
				baseColor="#000000"
				pillColor="#ffffff"
				hoveredPillTextColor="#ffffff"
				pillTextColor="#000000"
				initialLoadAnimation={false}
			/>
		</div>
	);
};
