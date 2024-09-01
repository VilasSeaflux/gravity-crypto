"use client";
import AboutBox from "@/components/molecules/aboutBox";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import React from "react";

const data = [
	{
		title: "billion",
		number: 100,
		about: "cumulative trading volume to date",
		dollar: true,
		tenative: true,
	},
	{
		title: "%",
		number: 0.8,
		about: "of the global crypto spot trading volume",
	},
	{
		number: 30,
		tenative: true,
		title: "",
		about: "Gravity Teammates (& growing)",
	},
	{
		number: 25,
		plus: true,
		title: "",
		about: "leading global and local crypto exchanges",
	},
	{
		number: 2017,
		title: "",
		about: "Start, crypto-natives",
	},
	{
		number: 1200,
		plus: true,
		title: "",
		about: "crypto-asset pairs",
	},
	{
		number: 24,
		title: "/ 7",
		about: "liquidity",
	},
	{
		number: 5,
		title: "billion",
		plus: true,
		about: "trades done to date",
	},
];
gsap.registerPlugin(ScrollTrigger);
export default function AboutSecton() {
	useGSAP(() => {
		gsap.from("#about-heading", {
			opacity: 0,
			scale: 0,
			duration: 1,
			scrollTrigger: {
				trigger: "#about-heading",
				start: "top 70%",
				end: "top 50%",
			},
		});
		gsap.from("#para", {
			delay: 0.5,
			opacity: 0,
			scale: 0,
			duration: 1,
			scrollTrigger: {
				trigger: "#para",
				start: "top 80%",
				end: "top 50%",
			},
		});
	});
	return (
		<section
			id="about"
			className="flex flex-col justify-center items-center gap-y-10 w-screen h-screen"
		>
			<h1
				id="about-heading"
				className="font-light font-meta text-7xl text-center text-white"
			>
				About Gravity Team
			</h1>
			<p id="para" className="w-1/2 text-2xl text-center text-white">
				At Gravity Team, we are on the mission to balance the supply and demand
				across crypto markets worldwide. We are a crypto native market maker
				founded by traders, developers, and innovators who are strong believers
				and supporters of the future of decentralization and digital assets.
			</p>
			<div className="place-content-center gap-1 grid grid-cols-4 bg-gradient-to-br from-violet-400 via-blue-500 to-orange-300 mx-auto mt-5 w-[80%]">
				{data.map((item) => (
					<AboutBox
						key={item.title}
						title={item.title}
						number={item.number}
						about={item.about}
						dollar={item.dollar}
						tenative={item.tenative}
						plus={item.plus}
					/>
				))}
			</div>
		</section>
	);
}
