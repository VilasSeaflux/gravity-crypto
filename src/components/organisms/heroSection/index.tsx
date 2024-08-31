import HeroText from "@/components/atoms/heroText";
import React from "react";

export default function HeroSection() {
	return (
		<section className="flex flex-col justify-center items-center gap-y-10 w-screen h-screen">
			<HeroText />
			<p className="w-1/2 font-inter text-2xl text-center text-white">
				Our fully automated proprietary quantitative trading software provides
				24/7 liquidity to 170+ crypto assets across 25+ centralized spot and
				derivative crypto exchanges.
			</p>
			<button
				type="button"
				className="bg-gradient-to-br from-violet-400 via-blue-400 to-orange-300 mt-10 px-8 py-2 rounded-xl h-16 font-inter font-semibold text-2xl text-white uppercase"
			>
				Get in touch
			</button>
		</section>
	);
}
