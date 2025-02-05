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
			className={`w-full relative h-24 lg:fixed top-0 left-0 flex items-center justify-between lg:px-10 z-20 transition-all max-lg:bg-[#010101]  ${
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
				</ul>
			</nav>
			<NavigationMobile />
		</header>
	);
}
