"use client";

import { createContext, useContext } from "react";

type HeroAreaProviderProps = {
	inView: boolean;
	setInView: (inView: boolean) => void;
};

const HeroAreaContext = createContext<HeroAreaProviderProps>({
	inView: true,
	setInView: () => {},
});

export const useHeroAreaContext = () => useContext(HeroAreaContext);
