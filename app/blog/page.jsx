import Blog from "@/components/Blog";
import Link from "next/link";

export default function page() {
	return (
		<section className="w-full">
			<div className="w-full bg-[#010101] py-12 lg:py-48">
				<h1 className="text-white font-bold text-2xl lg:text-6xl text-center pb-2">
					Blog i porady
				</h1>
				<p className="text-white text-center">
					Przeczytaj jakie mamy dla Ciebie porady i inspiracje
				</p>
			</div>
			<div className="w-full py-16 lg:py-32 max-w-[1360px] mx-auto px-4 lg:px-0">
				<div className="w-full grid grid-col-1 lg:grid-cols-3 justify-center gap-10">
					<Blog />
				</div>
			</div>
		</section>
	);
}
