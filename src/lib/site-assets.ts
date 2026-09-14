/**
 * Typed pointers into `public/favicons` and `public/og`.
 *
 * These stay under `public/` (rather than being imported like other assets)
 * because they need stable, absolute URLs for favicons and social previews.
 * Paths are relative — Next.js resolves them against `metadataBase`.
 */

const FAVICON_SIZES = [16, 32, 48, 64, 128, 256] as const;

const faviconBrands = {
	clubIcon: "/favicons/club-icon",
	norihamaro: "/favicons/norihamaro",
} as const;

type FaviconBrand = keyof typeof faviconBrands;

export const getFaviconIcons = (brand: FaviconBrand) =>
	FAVICON_SIZES.map((size) => ({
		url: `${faviconBrands[brand]}/${size}x${size}.ico`,
		sizes: `${size}x${size}`,
		type: "image/x-icon",
	}));

export const ogImages = {
	default: "/og/default.png",
	events: "/og/events.png",
} as const;
