"use client";
import React from "react";

import Logo from "@/components/atoms/logo";
import InTouch from "@/components/atoms/InTouch";
import NavList from "@/components/molecules/navList";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

export default function Navbar() {
	useGSAP(() => {
		gsap.from("nav", {
			delay: 1.5,
			y: -100,
			opacity: 0,
			duration: 2,
			ease: "circ.out",
		});
	});
	return (
		<nav className="top-0 left-0 absolute flex flex-row justify-between items-center p-10 w-full text-white uppercase">
			<Logo />
			<ul className="flex flex-row items-center gap-5 font-inter font-semibold">
				<NavList />
			</ul>
			<InTouch />
		</nav>
	);
}
