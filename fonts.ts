import localFonts from "next/font/local";
import { Inter } from "next/font/google";
export const metaverse = localFonts({
	src: "./public/fonts/Metavers.ttf",
	preload: true,
	variable: "--font-metaverse",
});

export const inter = Inter({
	subsets: ["latin"],
	preload: true,
	variable: "--font-inter",
});
