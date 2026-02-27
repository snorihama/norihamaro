import { useState, useCallback, useEffect } from "react";

export const useMobile = () => {
	const [isMobile, setIsMobile] = useState(false);
	const handleResize = useCallback(() => {
		if (typeof window === "undefined") return;
		setIsMobile(window.innerWidth < 768);
	}, []);
	useEffect(() => {
		handleResize();
		window.addEventListener("resize", handleResize);
		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, [handleResize]);
	return isMobile;
};
