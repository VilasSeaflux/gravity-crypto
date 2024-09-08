import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Image from "next/image";
gsap.registerEffect(ScrollTrigger);
const images = [
	{
		id: 1,
		name: "Bitso",
		image: "/images/bitso.png",
	},
	{
		id: 2,
		name: "Bithumb",
		image: "/images/bithumb.png",
	},
	{
		id: 3,
		name: "Bitbank",
		image: "/images/bitbank.png",
	},
	{
		id: 4,
		name: "Binance",
		image: "/images/binance.png",
	},
	{
		id: 5,
		name: "Bitstamp",
		image: "/images/bitstamp.png",
	},
	{
		id: 6,
		name: "Coinbase",
		image: "/images/coinbase.png",
	},
	{
		id: 7,
		name: "Bitfinex",
		image: "/images/bitfinex.png",
	},
	{
		id: 8,
		name: "VALR",
		image: "/images/Vlar.png",
	},
	{
		id: 9,
		name: "Kranken",
		image: "/images/kranken.png",
	},
	{
		id: 10,
		name: "Cryptocom",
		image: "/images/cryptocom.jpg",
	},
];
export default function Partners() {
	useGSAP(() => {
		gsap.from("#partner-heading", {
			opacity: 0,
			scale: 0,
			duration: 1,
			skewY: -50,
			scrollTrigger: {
				trigger: "#partner-heading",
				start: "top 90%",
				end: "top 50%",
			},
		});
		gsap.from("#move #marquee", {
			x: -100,
			duration: 0.8,
			opacity: 0,
			stagger: 0.2,
			scrollTrigger: {
				trigger: "#move",
				start: "top 80%",
				end: "top 0%",
				scrub: 2,
			},
			ease: "circ.out",
		});
	}, []);
	return (
		<section id="partner-div" className="relative max-w-screen min-h-[150vh]">
			<Image
				src="/images/middle-left-2.png"
				alt="blur-bg"
				width={600}
				height={1000}
				className="top-0 -left-[20%] z-0 absolute bg-transparent w-[50%] -rotate-[100]"
			/>
			<div className="z-50 space-y-10 py-20">
				<h1
					id="partner-heading"
					className="mt-10 font-light font-meta text-7xl text-center text-white leading-[6rem]"
				>
					Our Partners & <br /> Friends
				</h1>
				<div
					id="move"
					className="z-50 gap-[5rem] grid grid-cols-6 mx-auto overflow-x-hidden"
				>
					{images.map((image) => (
						<Image
							key={image.id}
							src={image.image}
							alt={image.name}
							width={400}
							height={400}
							id="marquee"
							className="z-50 bg-gradient-to-b from-slate-700 via-primary-black to-black bg-opacity-25 backdrop-blur-3xl backdrop-brightness-200 backdrop-contrast-200 p-10 border rounded-xl w-[10vw] h-fit object-contain"
						/>
					))}
				</div>
			</div>
		</section>
	);
}
