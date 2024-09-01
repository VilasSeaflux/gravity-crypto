"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import React, { useRef } from "react";

type Props = {
	about: string;
	title: string;
	number: number;
	plus?: boolean;
	dollar?: boolean;
	tenative?: boolean;
};
export default function AboutBox({
	about,
	title,
	number,
	plus = false,
	dollar = false,
	tenative = false,
}: Props) {
	const divRef = useRef(null);
	useGSAP(() => {
		gsap.from(divRef.current, {
			opacity: 0,
			duration: 2,
			stagger: 2,
			scrollTrigger: {
				trigger: divRef.current,
				scroller: "body",
				start: "top 90%",
				markers: true,
			},
		});
	});
	return (
		<div
			ref={divRef}
			className="flex flex-col justify-center items-center gap-y-2 bg-primary-black hover:bg-transparent p-10 w-full h-full hover:transform hover:transition-transform hover:duration-1000"
		>
			<div className="text-center">
				{tenative && <span className="text-3xl text-white">~</span>}
				{dollar && <span className="text-3xl text-white">$</span>}
				<span className="text-3xl text-white">{number}</span>
				<span className="ml-2 text-3xl text-white">{title}</span>
				{plus && <span className="text-3xl text-white">+</span>}
			</div>
			<p className="w-3/4 text-center text-white">{about}</p>
		</div>
	);
}
