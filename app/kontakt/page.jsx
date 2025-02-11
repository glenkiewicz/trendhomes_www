import Link from "next/link";

export default function page() {
	return (
		<section className="w-full">
			<div className="w-full bg-[#010101] py-12 lg:py-48">
				<h1 className="text-white font-bold text-2xl lg:text-6xl text-center pb-2">
					Kontakt
				</h1>
				<p className="text-white text-center">
					Zadzowń lub napisz do nas - zapraszamy!
				</p>
			</div>
			<div className="w-full py-16 lg:py-32 max-w-[1360px] mx-auto px-4 lg:px-0">
				<h2 className="text-2xl font-bold pb-4">Nasz adres:</h2>
				<p>
					ul. Piastowska 3, <br />
					38-500 Sanok
				</p>
				<p className="text-[#010101] flex flex-col my-6">
					<Link href="tel:+48735721222">+48 735 721 222</Link>
					<Link href="mailto:kontakt@trendhomes.pl">
						kontakt@trendhomes.pl
					</Link>
				</p>
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
						<g fill="#010101" strokeWidth="1">
							<g transform="scale(8.53333,8.53333)">
								<path d="M24,4h-18c-1.105,0 -2,0.895 -2,2v18c0,1.105 0.895,2 2,2h10v-9h-3v-3h3v-1.611c0,-3.05 1.486,-4.389 4.021,-4.389c1.214,0 1.856,0.09 2.16,0.131v2.869h-1.729c-1.076,0 -1.452,0.568 -1.452,1.718v1.282h3.154l-0.428,3h-2.726v9h5c1.105,0 2,-0.895 2,-2v-18c0,-1.105 -0.896,-2 -2,-2z"></path>
							</g>
						</g>
					</svg>
				</Link>
			</div>
			<div className="w-full">
				<iframe
					src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2587.6876600815517!2d22.170042777132057!3d49.56591627143681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x473c6d8672978b9f%3A0x1f8a04df91375c7b!2sTRENDHOMES!5e0!3m2!1spl!2spl!4v1739278171790!5m2!1spl!2spl"
					width="100%"
					height="600"
					loading="lazy"
					referrerPolicy="no-referrer-when-downgrade"
				></iframe>
			</div>
		</section>
	);
}
