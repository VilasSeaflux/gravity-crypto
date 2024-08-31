"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

export default function InTouch() {
	const circleRef = useRef(null);
	useGSAP(() => {
		const timeline = gsap.timeline();
		timeline.from(circleRef.current, {
			duration: 1,
			scale: 0,
			opacity: 0,
			ease: "elastic.out(1, 2)",
		});
		timeline.from("h2", {
			x: 200,
			opacity: 0,
			duration: 2,
			ease: "elastic.out(1, 0.8)",
		});
	});
	return (
		<div className="flex flex-row items-center gap-5">
			<div
				ref={circleRef}
				className="bg-gradient-to-br from-violet-400 via-blue-400 to-yellow-200 p-3 rounded-full w-5 h-5 to"
			/>
			<h2 className="">Get in touch</h2>
		</div>
	);
}
