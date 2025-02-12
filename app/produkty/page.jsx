import Link from "next/link";

export default function page() {
	return (
		<section className="w-full">
			<div className="w-full bg-[#010101] py-12 lg:py-48">
				<h1 className="text-white font-bold text-2xl lg:text-6xl text-center pb-2">
					Produkty
				</h1>
				<p className="text-white text-center">
					Zobacz ofertę naszych produktów i znajdź coś dla Twojego
					domu!
				</p>
			</div>
			<section className="w-full max-w-[1360px] mx-auto py-16 lg:py-32 px-4 lg:px-0">
				<h2 className="font-bold text-center text-4xl">
					Nasza oferta obejmuje:
				</h2>
				<div className="w-full flex flex-col lg:flex-row gap-10">
					<div>
						<h3>Okna drewniane, PCV i aluminiowe</h3>
						<p>
							Oferujemy szeroką gamę okien, które łączą trwałość,
							energooszczędność oraz estetykę. Nasze okna
							drewniane nadają wnętrzom elegancji i naturalnego
							charakteru, podczas gdy modele PCV zapewniają
							doskonałą izolację cieplną i akustyczną przy
							łatwości konserwacji. Okna aluminiowe to propozycja
							dla miłośników nowoczesnego designu – są lekkie,
							wytrzymałe i minimalistyczne. Oferujemy pełną paletę
							kolorów oraz rozmiarów, byś mógł dopasować je
							idealnie do swojego domu.
						</p>
					</div>
				</div>
				<div className="w-full flex flex-col lg:flex-row gap-10">
					<div>
						<h3>Drzwi wejściowe i wewnętrzne</h3>
						<p>
							Nasze drzwi wejściowe to połączenie stylu,
							bezpieczeństwa i funkcjonalności. Wykonane z
							najwyższej jakości materiałów, zapewniają trwałość i
							odporność na zmienne warunki atmosferyczne. Drzwi
							wewnętrzne to idealny wybór dla tych, którzy chcą
							podkreślić charakter swojego wnętrza – oferujemy
							modele klasyczne, nowoczesne oraz niestandardowe,
							dostosowane do indywidualnych potrzeb.
						</p>
					</div>
				</div>
			</section>
		</section>
	);
}
