import HeroSection from "@/components/organisms/heroSection";
import Navbar from "@/components/organisms/navbar";

export default function Home() {
	return (
		<main className="bg-primary-black p-10 w-screen h-screen no-scroll">
			<Navbar />
			<HeroSection />
		</main>
	);
}
