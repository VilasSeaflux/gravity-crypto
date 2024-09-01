"use client";
import HeroText from "@/components/atoms/heroText";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export default function HeroSection() {
	const heading = "Balancing Crypto Markets";
	useGSAP(() => {
		const timeline = gsap.timeline();
		timeline.from(".b", {
			delay: -1,
			duration: 1,
			opacity: 0,
			stagger: 0.1,
			ease: "elastic.inOut",
		});
		timeline.from("#intro", {
			duration: 0.7,
			opacity: 0,
			y: 100,
			ease: "sine.out",
		});
		timeline.from("#get-in-touch", {
			duration: 0.6,
			opacity: 0,
			y: 100,
			ease: "sine.out",
		});
		timeline.from("#hero-animation", {
			duration: 1,
			opacity: 0,
			ease: "sine.out",
			translateZ: 180,
		});
	});
	return (
		<section className="relative w-screen h-screen">
			<div className="z-40 flex flex-col justify-center items-center gap-y-10 mt-auto w-screen h-screen">
				<HeroText heading={heading} />
				<p
					id="intro"
					className="z-50 w-1/2 font-inter text-2xl text-center text-white"
				>
					Our fully automated proprietary quantitative trading software provides
					24/7 liquidity to 170+ crypto assets across 25+ centralized spot and
					derivative crypto exchanges.
				</p>
				<button
					id="get-in-touch"
					type="button"
					className="z-50 bg-gradient-to-br from-violet-400 via-blue-400 to-orange-300 mt-10 px-8 py-2 rounded-xl h-16 font-inter font-semibold text-2xl text-white uppercase"
				>
					Get in touch
				</button>
			</div>
			<video
				className="bottom-0 -left-10 z-0 absolute bg-transparent p-0 object-fill"
				autoPlay
				loop
				muted
				id="hero-animation"
			>
				<source src={"/animation/hero-animation.mp4"} type="video/mp4" />
			</video>
		</section>
	);
}
