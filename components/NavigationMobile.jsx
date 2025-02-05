"use client";

import { useState } from "react";
import { Squash as Hamburger } from "hamburger-react";
import { AnimatePresence, motion } from "framer-motion";

export const NavigationMobile = () => {
	const [isOpen, setOpen] = useState(false);

	const routes = [
		{
			title: "Strona głowna",
			href: "/",
		},
		{
			title: "Produkty",
			href: "/produkty",
		},
		{
			title: "O nas",
			href: "/o-nas",
		},
		{
			title: "Realizacje",
			href: "/realizacje",
		},
		{
			title: "Blog",
			href: "/blog",
		},
		{
			title: "Kontakt",
			href: "/kontakt",
		},
	];

	return (
		<div className="lg:hidden px-4">
			<Hamburger
				toggled={isOpen}
				size={30}
				toggle={setOpen}
				color="#ffffff"
			/>
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						className="fixed left-0 shadow-4xl right-0 top-[96px] p-5 h-full z-50 bg-[#010101] opacity-100"
					>
						<ul className="grid gap-2">
							{routes.map((route, idx) => {
								return (
									<motion.li
										initial={{ scale: 0, opacity: 0 }}
										animate={{ scale: 1, opacity: 1 }}
										transition={{
											type: "spring",
											stiffness: 260,
											damping: 20,
											delay: 0.1 + idx / 10,
										}}
										key={route.title}
										className="w-full p-[0.08rem]"
									>
										<a
											onClick={() =>
												setOpen((prev) => !prev)
											}
											className={
												"flex items-center justify-between w-full py-5 font-bold uppercase text-center border-b border-[#333333] text-white"
											}
											href={route.href}
										>
											<span className="flex gap-1 text-lg">
												{route.title}
											</span>
										</a>
									</motion.li>
								);
							})}
						</ul>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};
