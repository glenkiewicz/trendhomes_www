import Image from "next/image";
import Link from "next/link";
import MfCodeLogo from "./MfCodeLogo";
export default function Footer() {
	return (
		<footer className="w-full px-4 lg:px-0 py-16 lg:py-32 bg-[#010101]">
			<div className="w-full max-w-[1360px] mx-auto flex flex-col lg:flex-row pb-12 gap-8 lg:gap-32 items-center">
				<div className="w-full lg:w-1/3">
					<Link href="/">
						<Image
							src="/img/logo.jpg"
							width={140}
							height={140}
							alt=""
							className="-ml-4"
						/>
					</Link>
					<p className="text-white text-sm">
						TRENDHOMES jest producentem stolarki okiennej i
						drzwiowej oferujący innowacyjne rozwiązania. Nowoczesna
						technologia, design zorientowany na zmieniające się
						potrzeby Nabywców oraz indywidualne podejście do Klienta
						pozwala efektywnie, a zarazem funkcjonalnie zaaranżować
						każdą przestrzeń.
					</p>
				</div>
				<div className="w-full lg:w-1/3">
					<nav>
						<ul className="text-white space-y-6 font-light flex flex-col">
							<li>
								<Link href="/produkty">Produkty</Link>
							</li>
							<li>
								<Link href="/o-nas">O nas</Link>
							</li>
							<li>
								<Link href="/realizacje">Realizacje</Link>
							</li>
							<li>
								<Link href="/blog">Blog</Link>
							</li>
							<li>
								<Link href="/kontakt">Kontakt</Link>
							</li>
						</ul>
					</nav>
				</div>
				<div className="w-full lg:w-1/3">
					<h4 className="text-white text-2xl font-bold pb-6">
						Lokalizacja
					</h4>
					<div className="flex flex-row items-start gap-10">
						<p className="text-white">
							ul. Piastowska 3, <br />
							38-500 Sanok
						</p>
					</div>
					<p className="text-white flex flex-col my-6">
						<Link href="tel:+48735721222">+48 735 721 222</Link>
						<Link href="mailto:kontakt@trendhomes.pl">
							kontakt@trendhomes.pl
						</Link>
					</p>
				</div>
			</div>
			<div className="w-full max-w-[1360px] mx-auto pt-12 flex flex-col lg:flex-row justify-between border-t border-gray-700">
				<p className="text-white font-light uppercase">
					&copy; Trendhomes 2025
				</p>
				<nav>
					<ul className="flex text-white space-x-6 font-light">
						<li>
							<Link href="">Polityka cookies</Link>
						</li>
						<li>
							<Link href="">Mapa strony</Link>
						</li>
					</ul>
				</nav>
				<p className="text-white font-light uppercase flex items-center">
					<span>Realizacja: </span>
					<Link
						href="https://mfcode.pl"
						target="_blank"
						className="font-bold"
					>
						<MfCodeLogo />
					</Link>
				</p>
			</div>
		</footer>
	);
}
