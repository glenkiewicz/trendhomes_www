import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
	const transition = { duration: 4, yoyo: Infinity, ease: "easeInOut" };
	return (
		<>
			<section className="w-full flex flex-col lg:flex-row mx-auto overflow-hidden max-h-[830px]">
				<div className="w-full lg:w-1/3 bg-[#010101] lg:p-10 flex flex-col justify-center self-stretch relative">
					<div className="pl-6 relative z-10">
						<h1 className="text-white text-xl lg:text-4xl">
							<motion.div
								whileInView={{ opacity: 1 }}
								className="font-bold text-2xl lg:text-6xl pb-4 block opacity-0"
							>
								TRENDHOMES
							</motion.div>
							<br />
							<motion.div
								whileInView={{ opacity: 1 }}
								className="opacity-0"
							>
								Twój partner w kreowaniu nowoczesnych i
								funkcjonalnych przestrzeni!
							</motion.div>
						</h1>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
						>
							<Link
								href="#"
								className="relative overflow-hidden transition-all duration-500 text-white my-10 px-6 py-4 bg-[#F7902B] max-w-[280px] uppercase font-bold flex items-center justify-center before:block before:absolute before:top-0 before:-left-[100%] before:w-full before:h-full before:bg-white hover:before:left-0 before:duration-500 before:z-0 hover:ease-in-out hover:text-[#101010]"
							>
								<span className="z-10">
									Zobacz nasze produkty
								</span>
							</Link>
						</motion.div>
					</div>
					<div className="w-0 h-0 border-t-[53.25rem] border-t-transparent border-l-[175px] border-l-[#010101] border-b-[0px] border-b-transparent absolute top-0 -right-[175px] z-0 "></div>
				</div>
				<div className="w-full lg:w-2/3 flex self-stretch justify-end ">
					<Image
						src="/img/hero.webp"
						width={2500}
						height={1666}
						alt=""
						className="object-cover w-full"
					/>
				</div>
			</section>
			<section className="w-full px-4 lg:px-0 ">
				<div className="w-full max-w-[1360px] mx-auto py-16 lg:py-32">
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
					>
						<h2 className="text-center font-bold text-4xl uppercase">
							Nasze produkty
						</h2>
						<p className="text-center">
							Zobacz w czym specjalizujemy się od lat
						</p>
					</motion.div>
					<div className="w-full flex flex-col lg:flex-row flex-wrap justify-center gap-10 py-10">
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="relative shadow-lg"
						>
							<h3 className="font-bold text-2xl absolute bottom-0 left-0 bg-white px-4 py-2 drop-shadow-lg">
								Okna
							</h3>
							<Image
								src="/img/okna.webp"
								alt=""
								width={400}
								height={400}
								className="w-full lg:w-[400px] p-1"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="relative shadow-lg"
						>
							<h3 className="font-bold text-2xl absolute bottom-0 left-0 bg-white px-4 py-2 drop-shadow-lg">
								Drzwi
							</h3>
							<Image
								src="/img/drzwi.webp"
								alt=""
								width={400}
								height={400}
								className="w-full lg:w-[400px] p-1"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="relative shadow-lg"
						>
							<h3 className="font-bold text-2xl absolute bottom-0 left-0 bg-white px-4 py-2 drop-shadow-lg">
								Rolety i żaluzje
							</h3>
							<Image
								src="/img/rolety.webp"
								alt=""
								width={400}
								height={400}
								className="w-full lg:w-[400px]"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="relative shadow-lg"
						>
							<h3 className="font-bold text-2xl absolute bottom-0 left-0 bg-white px-4 py-2 drop-shadow-lg">
								Bramy garażowe
							</h3>
							<Image
								src="/img/brama_garazowa.webp"
								alt=""
								width={400}
								height={400}
								className="w-full lg:w-[400px] p-1"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="relative shadow-lg"
						>
							<h3 className="font-bold text-2xl absolute bottom-0 left-0 bg-white px-4 py-2 drop-shadow-lg">
								Systemy przesuwne HS
							</h3>
							<Image
								src="/img/hs.webp"
								alt=""
								width={400}
								height={400}
								className="w-full lg:w-[400px] p-1"
							/>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="relative shadow-lg"
						>
							<h3 className="font-bold text-2xl absolute bottom-0 left-0 bg-white px-4 py-2 drop-shadow-lg">
								Pergole
							</h3>
							<Image
								src="/img/pergole.webp"
								alt=""
								width={400}
								height={400}
								className="w-full lg:w-[400px] p-1"
							/>
						</motion.div>
					</div>
				</div>
			</section>
			<section className="w-full px-4 lg:px-0 bg-[#010101] py-12 lg:py-0">
				<div className="w-full max-w-[1360px] mx-auto flex flex-col lg:flex-row items-center gap-10">
					<div className="w-full lg:w-2/3">
						<div className="w-full lg:w-2/3">
							<h2 className="font-bold text-4xl pb-6 uppercase text-white">
								Dlaczego
								<br />
								TRENDHOMES?
							</h2>
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								className="flex flex-row justify-start items-center"
							>
								<div className="w-10 h-10 min-w-10 flex items-center justify-center text-[#010101] font-bold rounded-full bg-white mr-4">
									1.
								</div>
								<p className="py-4 text-base lg:text-lg text-white">
									<strong>Stawiamy na jakość</strong> – nasze
									produkty tworzymy z materiałów najwyższej
									klasy, zapewniając ich trwałość na lata.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								className="flex flex-row items-center"
							>
								<div className="w-10 h-10 min-w-10 flex items-center justify-center text-[#010101] font-bold rounded-full bg-white mr-4">
									2.
								</div>
								<p className="py-4 text-base lg:text-lg text-white">
									<strong>
										Zapewniamy kompleksową obsługę
									</strong>{" "}
									– od doradztwa i pomiaru, przez projekt, po
									profesjonalny montaż.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								className="flex flex-row items-center"
							>
								<div className="w-10 h-10 min-w-10 flex items-center justify-center text-[#010101] font-bold rounded-full bg-white mr-4">
									3.
								</div>
								<p className="py-4 text-base lg:text-lg text-white">
									<strong>Wspieramy zaufaniem</strong> –
									oferujemy gwarancję na wszystkie nasze
									produkty oraz serwis posprzedażowy.
								</p>
							</motion.div>
							<motion.div
								initial={{ opacity: 0, y: 40 }}
								whileInView={{ opacity: 1, y: 0 }}
								className="flex flex-row items-center"
							>
								<div className="w-10 h-10 min-w-10 flex items-center justify-center text-[#010101] font-bold rounded-full bg-white mr-4">
									4.
								</div>
								<p className="py-4 text-base lg:text-lg text-white">
									<strong>Dbamy o Klienta</strong> –
									indywidualne podejście pozwala nam na
									realizację projektów skrojonych na miarę.
								</p>
							</motion.div>
						</div>
					</div>
					<div className="w-full lg:w-1/3">
						<Image
							src="/img/mateusz.jpg"
							alt=""
							width={480}
							height={960}
							className="filt"
						/>
					</div>
				</div>
			</section>
			<section className="w-full px-4 lg:px-0 py-8 lg:py-32 bg-gray-100">
				<div className="w-full max-w-[1360px] mx-auto flex flex-col lg:flex-row items-center gap-10">
					<div className="w-full lg:w-1/2">
						<Image
							src="/img/biuro.webp"
							alt=""
							width={960}
							height={720}
							className="shadow-2xl p-2"
						/>
					</div>
					<div className="w-full lg:w-1/2">
						<h2 className="font-bold text-4xl pb-6 uppercase">
							O nas
						</h2>
						<p className="py-4 text-base lg:text-lg">
							Witamy na stronie TRENDHOMES – producenta najwyższej
							jakości stolarki okiennej i drzwiowej. Od lat z
							pasją tworzymy produkty, które łączą nowoczesną
							technologię, funkcjonalność oraz ponadczasowy
							design. Nasza misja to dostarczanie innowacyjnych
							rozwiązań, które odpowiadają na zmieniające się
							potrzeby naszych Klientów. W TRENDHOMES wierzymy, że
							każda przestrzeń może stać się zarówno komfortowa,
							jak i estetyczna, dzięki odpowiednio dobranym
							produktom.
						</p>
						<p className="text-base lg:text-lg">
							Nie wiesz, jakie rozwiązanie będzie najlepsze dla
							Twojego domu? Zespół naszych doświadczonych
							ekspertów służy pomocą. Zapraszamy do naszego salonu
							sprzedaży w Sanoku. W przyjaznej atmosferze, przy
							filiżance aromatycznej kawy, omówimy wszystkie
							zagadnienia związane z projektem Twoich wymarzonych
							„czterech ścian”.
						</p>
					</div>
				</div>
			</section>

			<section className="w-full px-4 lg:px-0 py-8 lg:py-32 bg-[#010101]">
				<div className="w-full">
					<h2 className="text-center font-bold text-4xl uppercase text-white">
						Nasze realizacje
					</h2>
					<p className="text-center text-white">
						Zobacz nasze realizacje z których jesteśmy dumni!
					</p>
					<div className="w-full flex flex-row flex-wrap  justify-center lg:flex-nowrap py-12 gap-4 items-center">
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="w-80 h-80"
						>
							<Image
								src="/img/realizacje/1.webp"
								alt=""
								width={400}
								height={400}
								className="object-cover aspect-[320/320]"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="w-96 h-96"
						>
							<Image
								src="/img/realizacje/2.webp"
								alt=""
								width={400}
								height={400}
								className="object-cover aspect-[384/384]"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="w-80 h-80"
						>
							<Image
								src="/img/realizacje/3.webp"
								alt=""
								width={400}
								height={400}
								className="object-cover aspect-[320/320]"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="w-96 h-96"
						>
							<Image
								src="/img/realizacje/4.webp"
								alt=""
								width={400}
								height={400}
								className="object-cover aspect-[384/384]"
							/>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="w-80 h-80"
						>
							<Image
								src="/img/realizacje/5.webp"
								alt=""
								width={400}
								height={400}
								className="object-cover aspect-[320/320]"
							/>
						</motion.div>
					</div>
					<Link
						href="#"
						className="relative overflow-hidden transition-all duration-500 text-white my-10 px-6 py-4 bg-[#F7902B] max-w-[320px] mx-auto uppercase font-bold flex items-center justify-center before:block before:absolute before:top-0 before:-left-[100%] before:w-full before:h-full before:bg-white hover:before:left-0 before:duration-500 before:z-0 hover:ease-in-out hover:text-[#101010]"
					>
						<span className="z-10">Zobacz więcej realizacji</span>
					</Link>
				</div>
			</section>
			<section className="w-full px-4 lg:px-0 bg-gray-100">
				<div className="w-full max-w-[1360px] mx-auto py-16 lg:py-32">
					<h2 className="text-center font-bold text-4xl text-[#010101] uppercase">
						Blog i porady
					</h2>
					<p className="text-center text-[#010101]">
						Przeczytaj jakie mamy dla Ciebie porady i inspiracje
					</p>
					<div className="w-full flex flex-col lg:flex-row flex-wrap justify-center gap-10 py-10">
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="lg:max-w-[300px]"
						>
							<Image
								src="/img/news1.webp"
								alt=""
								width={400}
								height={400}
								className="w-full lg:w-[400px]"
							/>
							<span className="text-[#010101] font-light text-sm my-2 block">
								04.01.2025
							</span>
							<h3 className="text-[#010101] font-semibold text-xl">
								Nowoczesne trendy w stolarce okiennej i
								drzwiowej na rok 2025
							</h3>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="lg:max-w-[300px]"
						>
							<Image
								src="/img/news2.webp"
								alt=""
								width={400}
								height={400}
								className="w-full lg:w-[400px]"
							/>
							<span className="text-[#010101] font-light text-sm my-2 block">
								29.12.2024
							</span>
							<h3 className="text-[#010101] font-semibold text-xl">
								Jak dobrać okna do stylu domu? Poradnik dla
								każdego
							</h3>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="lg:max-w-[300px]"
						>
							<Image
								src="/img/news3.webp"
								alt=""
								width={400}
								height={400}
								className="w-full lg:w-[400px]"
							/>
							<span className="text-[#010101] font-light text-sm my-2 block">
								12.12.2024
							</span>
							<h3 className="text-[#010101] font-semibold text-xl">
								Porady: Jak wybrać drzwi wejściowe, które łączą
								bezpieczeństwo i styl?
							</h3>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, y: 40 }}
							whileInView={{ opacity: 1, y: 0 }}
							className="lg:max-w-[300px]"
						>
							<Image
								src="/img/news4.webp"
								alt=""
								width={400}
								height={400}
								className="w-full lg:w-[400px]"
							/>
							<span className="text-[#010101] font-light text-sm my-2 block">
								14.11.2024
							</span>
							<h3 className="text-[#010101] font-semibold text-xl">
								5 inspiracji na przeszklone przestrzenie w domu
							</h3>
						</motion.div>
					</div>
				</div>
			</section>
		</>
	);
}
