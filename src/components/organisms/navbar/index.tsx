import InTouch from "@/components/atoms/InTouch";
import Logo from "@/components/atoms/logo";
import NavList from "@/components/molecules/navList";
import React from "react";

export default function Navbar() {
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
