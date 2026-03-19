"use client";

import { createContext, useContext, useState } from "react";

type HeroAreaProviderProps = {
	inView: boolean;
	setInView: (inView: boolean) => void;
};

const HeroAreaContext = createContext<HeroAreaProviderProps>({
	inView: true,
	setInView: () => {},
});

export const useHeroAreaContext = () => useContext(HeroAreaContext);

export const HeroAreaProvider: React.FC<{
	children: React.ReactNode;
}> = ({ children }) => {
	const [inView, setInView] = useState(true);
	return (
		<HeroAreaContext.Provider value={{ inView, setInView }}>
			{children}
		</HeroAreaContext.Provider>
	);
};
