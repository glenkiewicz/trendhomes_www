"use client";
import Image from "next/image";
import Link from "next/link";

import { useState, useEffect } from "react";
import { NavigationMobile } from "./NavigationMobile";

export default function () {
	const [isScrolled, setIsScrolled] = useState(false);

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
			className={`w-full relative h-24 lg:fixed top-0 left-1/2 -translate-x-1/2 flex items-center justify-between lg:px-10 z-20 transition-all max-lg:bg-[#010101]  ${
				isScrolled
					? "lg:bg-[#010101] shadow-md"
					: "h-auto lg:bg-transparent"
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
			<nav className="hidden lg:block">
				<ul className="flex items-center text-white space-x-8 font-bold">
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
						<Link href="/blog"></Link>Blog
					</li>
					<li>
						<Link href="/kontakt"></Link>Kontakt
					</li>
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
							<g fill="#fff" strokeWidth="1">
								<g transform="scale(8.53333,8.53333)">
									<path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h10v-9h-3v-3h3v-1.611c0,-3.05 1.486,-4.389 4.021,-4.389c1.214,0 1.856,0.09 2.16,0.131v2.869h-1.729c-1.076,0 -1.452,0.568 -1.452,1.718v1.282h3.154l-0.428,3h-2.726v9h5c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.896,-2 -2,-2z"></path>
								</g>
							</g>
						</svg>
					</Link>
				</ul>
			</nav>
			<NavigationMobile />
		</header>
	);
}
