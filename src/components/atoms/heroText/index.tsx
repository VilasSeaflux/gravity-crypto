"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React from "react";

export default function HeroText() {
	const heading = "Crypto Markets";
	useGSAP(() => {
		const timeline = gsap.timeline();
		timeline.from("h1", {
			opacity: 0,
			duration: 2,
			y: -200,
			ease: "bounce.out(0, 1)",
		});
		timeline.from(".b", {
			delay: -1,
			duration: 2,
			opacity: 0,
			stagger: 0.1,
			ease: "elastic.inOut",
		});
	});
	return (
		<div className="gap-y-5 bg-clip-text bg-transparent bg-gradient-to-b from-white via-slate-50 to-slate-500 font-light font-meta text-7xl text-center text-clip text-transparent leading-[15vh] tracking-widest">
			<h1 className="text-white">Balancing </h1>
			{heading
				.trim()
				.split("")
				.map((char, index) => {
					// if (index === 9) {
					// 	return <br key={char} />;
					// }
					// if (index === 16) {
					// 	return <span key={char}>&nbsp;</span>;
					// }
					// if (index <= 8) {
					// 	return (
					// 		<span className="a" key={char}>
					// 			{char}
					// 		</span>
					// 	);
					// }
					return (
						<span className="b" key={char}>
							{char}
						</span>
					);
				})}
		</div>
	);
}
