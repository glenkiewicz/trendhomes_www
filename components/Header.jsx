"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { useState, useEffect } from "react";
import { NavigationMobile } from "./NavigationMobile";

export default function () {
	const [isScrolled, setIsScrolled] = useState(false);
	const pathname = usePathname();
	useEffect(() => {
		const handleScroll = () => {
			if (window.scrollY > 100) {
				setIsScrolled(true);
			} else {
				setIsScrolled(false);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<header
			className={`w-full relative h-24 lg:fixed top-0 left-1/2 -translate-x-1/2 flex items-center justify-between lg:px-10 z-50 transition-all max-lg:bg-[#010101] ${
				isScrolled ? "lg:bg-[#010101] shadow-md" : "lg:bg-transparent"
			}`}
		>
			<Link href="/">
				<Image
					src="/img/logo.jpg"
					width={isScrolled ? 100 : 160}
					height={isScrolled ? 100 : 160}
					alt=""
				/>
			</Link>
			<nav className="hidden lg:block h-24">
				<ul className="flex items-center text-white font-bold h-full">
					<li className="group h-full flex items-center hover:bg-white hover:bg-opacity-95 hover:shadow-2xl px-8">
						<Link
							href="/produkty"
							className={` group-hover:text-[#F7902B] ${
								pathname === "/produkty" ? "text-[#F7902B]" : ""
							}`}
						>
							Produkty
						</Link>
						<nav className="hidden group-hover:block absolute top-[100%] left-0 w-full bg-white bg-opacity-95 py-6 shadow-2xl">
							<ul className="flex flex-row justify-center items-center space-x-14">
								<li>
									<Link
										href="/okna"
										className="flex flex-col items-center"
									>
										<span className="text-[#010101] font-medium">
											Okna
										</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="64"
											height="64"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#010101"
											strokeWidth="0.5"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="w-16 h-16"
										>
											<rect
												x="3"
												y="3"
												width="18"
												height="18"
												rx="2"
												ry="2"
											/>
											<line
												x1="12"
												y1="3"
												x2="12"
												y2="21"
											/>
											<line
												x1="3"
												y1="12"
												x2="21"
												y2="12"
											/>
										</svg>
									</Link>
								</li>
								<li className="flex flex-col items-center">
									<Link
										href="/drzwi"
										className="flex flex-col items-center"
									>
										<span className="text-[#010101] font-medium">
											Drzwi
										</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="64"
											height="64"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#010101"
											strokeWidth="0.5"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="w-16 h-16"
										>
											<rect
												x="6"
												y="3"
												width="12"
												height="18"
												rx="1"
												ry="1"
											/>
											<circle cx="16" cy="12" r="1" />
										</svg>
									</Link>
								</li>
								<li className="flex flex-col items-center">
									<Link
										href="/rolety-i-zaluzje"
										className="flex flex-col items-center"
									>
										<span className="text-[#010101] font-medium">
											Rolety i żaluzje
										</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="64"
											height="64"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#010101"
											strokeWidth="0.5"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="w-16 h-16"
										>
											<rect
												x="3"
												y="3"
												width="18"
												height="4"
											/>
											<line
												x1="3"
												y1="7"
												x2="21"
												y2="7"
											/>
											<line
												x1="6"
												y1="10"
												x2="18"
												y2="10"
											/>
											<line
												x1="6"
												y1="14"
												x2="18"
												y2="14"
											/>
											<line
												x1="6"
												y1="18"
												x2="18"
												y2="18"
											/>
										</svg>
									</Link>
								</li>
								<li className="flex flex-col items-center">
									<Link
										href="/bramy-garazowe"
										className="flex flex-col items-center"
									>
										<span className="text-[#010101] font-medium">
											Bramy garażowe
										</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="64"
											height="64"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#010101"
											strokeWidth="0.5"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="w-16 h-16"
										>
											<rect
												x="3"
												y="3"
												width="18"
												height="12"
											/>
											<line
												x1="3"
												y1="9"
												x2="21"
												y2="9"
											/>
											<rect
												x="7"
												y="15"
												width="10"
												height="6"
											/>
										</svg>
									</Link>
								</li>
								<li className="flex flex-col items-center">
									<Link
										href="/systemy-przesuwne-hs"
										className="flex flex-col items-center"
									>
										<span className="text-[#010101] font-medium">
											Systemy przesuwne HS
										</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="64"
											height="64"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#010101"
											strokeWidth="0.5"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="w-16 h-16"
										>
											<rect
												x="3"
												y="3"
												width="18"
												height="18"
												rx="1"
												ry="1"
											/>
											<line
												x1="12"
												y1="3"
												x2="12"
												y2="21"
											/>
											<line
												x1="15"
												y1="3"
												x2="15"
												y2="21"
											/>
										</svg>
									</Link>
								</li>
								<li className="flex flex-col items-center">
									<Link
										href="/pergole"
										className="flex flex-col items-center"
									>
										<span className="text-[#010101] font-medium">
											Pergole
										</span>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="64"
											height="64"
											viewBox="0 0 24 24"
											fill="none"
											stroke="#010101"
											strokeWidth="0.5"
											strokeLinecap="round"
											strokeLinejoin="round"
											className="w-16 h-16"
										>
											<rect
												x="3"
												y="3"
												width="18"
												height="2"
											/>
											<line
												x1="3"
												y1="5"
												x2="3"
												y2="21"
											/>
											<line
												x1="21"
												y1="5"
												x2="21"
												y2="21"
											/>
											<line
												x1="3"
												y1="12"
												x2="21"
												y2="12"
											/>
										</svg>
									</Link>
								</li>
							</ul>
						</nav>
					</li>
					<li className="group h-full flex items-center hover:bg-white hover:shadow-2xl px-8">
						<Link
							href="/o-nas"
							className={`group-hover:text-[#F7902B] ${
								pathname === "/o-nas" ? "text-[#F7902B]" : ""
							}`}
						>
							O nas
						</Link>
					</li>
					<li className="group h-full flex items-center hover:bg-white hover:shadow-2xl hover:bg-opacity-95 px-8">
						<Link
							href="/realizacje"
							className={`group-hover:text-[#F7902B] ${
								pathname === "/realizacje"
									? "text-[#F7902B]"
									: ""
							}`}
						>
							Realizacje
						</Link>
					</li>
					<li className="group h-full flex items-center hover:bg-white hover:shadow-2xl hover:bg-opacity-95 px-8">
						<Link
							href="/blog"
							className={`group-hover:text-[#F7902B] ${
								pathname === "/blog" ? "text-[#F7902B]" : ""
							}`}
						>
							Blog
						</Link>
					</li>
					<li className="group h-full flex items-center hover:bg-white hover:shadow-2xl hover:bg-opacity-95 px-8">
						<Link
							href="/kontakt"
							className={`group-hover:text-[#F7902B] ${
								pathname === "/kontakt" ? "text-[#F7902B]" : ""
							}`}
						>
							Kontakt
						</Link>
					</li>
					<li>
						<Link
							href="https://www.facebook.com/SanokTrendhomes/"
							target="_blank"
						>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								x="0px"
								y="0px"
								width="100"
								height="100"
								viewBox="0,0,256,256"
								className="w-10 h-10"
							>
								<g fill="#fff" strokeWidth="0.5">
									<g transform="scale(8.53333,8.53333)">
										<path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h10v-9h-3v-3h3v-1.611c0,-3.05 1.486,-4.389 4.021,-4.389c1.214,0 1.856,0.09 2.16,0.131v2.869h-1.729c-1.076,0 -1.452,0.568 -1.452,1.718v1.282h3.154l-0.428,3h-2.726v9h5c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.896,-2 -2,-2z"></path>
									</g>
								</g>
							</svg>
						</Link>
					</li>
				</ul>
			</nav>
			<NavigationMobile />
		</header>
	);
}
