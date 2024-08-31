import InTouch from "@/components/atoms/InTouch";
import Logo from "@/components/atoms/logo";
import NavList from "@/components/molecules/navList";
import React from "react";

export default function Navbar() {
	return (
		<nav className="flex flex-row justify-between items-center w-full text-white uppercase">
			<Logo />
			<ul className="flex flex-row items-center gap-5 font-inter font-semibold">
				<NavList />
			</ul>
			<InTouch />
		</nav>
	);
}
