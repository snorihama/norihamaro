"use client";

import { useEffect, useState } from "react";
import { isTag, type Tags } from "../../section";

export const scrollToSection = (id: Tags) => {
	if (window === undefined) return;
	const element = document.getElementById(id);
	if (element) {
		const y = element.getBoundingClientRect().top + window.scrollY;
		window.scrollTo({ top: y, behavior: "smooth" });
		// To prevent default transition, it does not change window location.
		// This location change will not trigger hashChange.
		// window.location.hash = `#${id}`;
	}
};

const useHash = () => {
	const [hash, setHash] = useState<string>("");
	useEffect(() => {
		const onHashChange = () => {
			setHash(window.location.hash);
			console.log(hash); // seems it does not work well.
		};
		setHash(window.location.hash);
		window.addEventListener("hashchange", onHashChange);
		return () => window.removeEventListener("hashchange", onHashChange);
	}, [hash]);
	return hash;
};

export const InitScrollPlugin = () => {
	// This plugin prevents default transition and execute custom scroll function instead.
	const hash = useHash();
	useEffect(() => {
		const section = hash.replace("#", "");
		if (isTag(section)) {
			scrollToSection(section);
		}
	}, [hash]);
	return null;
};
