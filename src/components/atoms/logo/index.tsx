import Image from "next/image";
import React from "react";

export default function Logo() {
	return (
		<Image
			src={"/images/icons/logo.svg"}
			alt="Logo"
			width={200}
			height={100}
			className="w-[10vw] h-[5vh]"
		/>
	);
}
