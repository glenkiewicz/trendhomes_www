import Link from "next/link";

export default function page() {
	return (
		<section className="w-full">
			<div className="w-full bg-[#010101] py-12 lg:py-48">
				<h1 className="text-white font-bold text-2xl lg:text-6xl text-center pb-2">
					O nas
				</h1>
				<p className="text-white text-center">
					Nie wiesz, jakie rozwiązanie będzie najlepsze dla Twojego
					domu? <br />
					Zespół naszych doświadczonych ekspertów służy pomocą.
				</p>
			</div>
			<section className="w-full max-w-[1360px] mx-auto py-16 lg:py-32 px-4 lg:px-0"></section>
		</section>
	);
}
