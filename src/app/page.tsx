"use client";
import AboutSecton from "@/components/organisms/aboutSection";
import HeroSection from "@/components/organisms/heroSection";
import Navbar from "@/components/organisms/navbar";
import Partners from "@/components/organisms/partners";

export default function Home() {
	return (
		<main className="bg-primary-black p-10 min-w-screen min-h-screen no-scroll">
			<Navbar />
			<HeroSection />
			<AboutSecton />
			<Partners />
		</main>
	);
}
