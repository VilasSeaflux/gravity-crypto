import type { Config } from "tailwindcss";

const config: Config = {
	content: [
		"./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/components/**/*.{js,ts,jsx,tsx,mdx}",
		"./src/app/**/*.{js,ts,jsx,tsx,mdx}",
	],
	theme: {
		extend: {
			backgroundImage: {
				"gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
				"gradient-conic":
					"conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
			},
			colors: {
				"primary-black": "#141619",
				"primary-slate": "#415572",
				"secondary-slate": "#1B1B1E",
			},
			fontFamily: {
				meta: ["var(--font-metaverse)"],
				inter: ["var(--font-inter)"],
			},
			maskImage: {
				"blur-mask":
					"linear-gradient(to bottom, transparent, black 30%, black 80%, transparent)",
			},
			webkitMaskImage: {
				"blur-mask":
					"linear-gradient(to bottom, transparent, black 30%, black 80%, transparent)",
			},
		},
	},
	plugins: [
		// biome-ignore lint/suspicious/noExplicitAny: <explanation>
		({ addUtilities }: { addUtilities: any }) => {
			const newUtilities = {
				".mask-blur": {
					maskImage:
						"linear-gradient(to bottom, transparent, black 30%, black 80%, transparent)",
					WebkitMaskImage:
						"linear-gradient(to bottom, transparent, black 30%, black 80%, transparent)",
				},
			};
			addUtilities(newUtilities, ["responsive", "hover"]);
		},
	],
};
export default config;
