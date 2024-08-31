"use client";
import React from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
export default function NavList() {
	useGSAP(() => {
		gsap.from("ul li", {
			duration: 1,
			y: -100,
			opacity: 0,
			ease: "elastic.out(1, 0.5)",
			stagger: 0.2,
		});
	});
	return (
		<>
			<li>About Us</li>
			<li>Our Services</li>
			<li>Work with Us</li>
			<li>Blog</li>
		</>
	);
}
