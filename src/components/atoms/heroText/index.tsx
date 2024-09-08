"use client";

export default function HeroText({
	heading,
}: {
	heading: string;
}) {
	return (
		<div className="gap-y-5 bg-clip-text bg-transparent bg-gradient-to-b from-white via-slate-50 to-slate-500 font-light font-meta text-7xl text-center text-clip text-transparent leading-[15vh] tracking-widest">
			{heading
				.trim()
				.split("")
				.map((char, index) => {
					if (index === 9) {
						return <br key={`${char}_${index + 1}`} />;
					}
					if (index === 16) {
						return <span key={`${char}_${index + 1}`}>&nbsp;</span>;
					}
					return (
						<span className="b" key={`${char}_${index + 1}`}>
							{char}
						</span>
					);
				})}
		</div>
	);
}
