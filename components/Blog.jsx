import * as motion from "motion/react-client";
import Image from "next/image";
import Link from "next/link";

export default function Blog({ limit }) {
	const posts = [
		{
			id: 1,
			date: "04.01.2025",
			title: "Nowoczesne trendy w stolarce okiennej i drzwiowej na rok 2025",
			image: "/img/news1.webp",
			url: "nowoczesne-trendy-w-stolarce-okiennej-i-drzwiowej-na-rok-2025",
		},
		{
			id: 2,
			date: "29.12.2024",
			title: "Jak dobrać okna do stylu domu? Poradnik dla każdego",
			image: "/img/news2.webp",
			url: "jak-dobrac-okna-do-stylu-domu-poradnik-dla-kazdego",
		},
		{
			id: 3,
			date: "12.12.2024",
			title: "Porady: Jak wybrać drzwi wejściowe, które łączą bezpieczeństwo i styl?",
			image: "/img/news3.webp",
			url: "porady-jak-wybrac-drzwi-wejsciowe-ktore-lacza-bezpieczenstwo-i-styl",
		},
		{
			id: 4,
			date: "14.11.2024",
			title: "5 inspiracji na przeszklone przestrzenie w domu",
			image: "/img/news4.webp",
			url: "5-inspiracji-na-przeszklone-przestrzenie-w-domu",
		},
		{
			id: 5,
			date: "02.11.2024",
			title: "Ciepły dom zimą: jakie okna wybrać, by oszczędzić na ogrzewaniu?",
			image: "/img/news5.webp",
			url: "cieply-dom-zima-jakie-okna-wybrac-by-oszczedzic-na-ogrzewaniu",
		},
		{
			id: 6,
			date: "22.10.2024",
			title: "Jakie drzwi wewnętrzne wybrać? Funkcjonalność i estetyka w jednym",
			image: "/img/news6.webp",
			url: "jakie-drzwi-wewnetrzne-wybrac-funkcjonalnosc-i-estetyka-w-jednym",
		},
	];
	return (
		<>
			{posts
				.map((item) => (
					<motion.div
						initial={{ opacity: 0, y: 40 }}
						whileInView={{ opacity: 1, y: 0 }}
						className="w-full"
					>
						<Link href={`/blog/${item.url}`}>
							<Image
								src={item.image}
								alt={item.title}
								width={400}
								height={400}
								className={`w-full`}
							/>
						</Link>
						<span className="text-[#010101] font-light text-sm my-2 block">
							{item.date}
						</span>
						<h3 className="text-[#010101] font-semibold text-xl">
							<Link href={`/blog/${item.url}`}>{item.title}</Link>
						</h3>
					</motion.div>
				))
				.slice(0, limit)}
		</>
	);
}
