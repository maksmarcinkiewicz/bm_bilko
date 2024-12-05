import "swiper/css";
import { Link } from "react-router-dom";
function ProjectsShowcase() {
  const offers = [
    {
      title: "Okna",
      image: "https://sklep.wisniowski.pl/img/layout/Okna.webp",
      link: "/okna-i-drzwi",
    },
    {
      title: "Bramy garażowe",
      image: "https://sklep.wisniowski.pl/img/layout/Bramy-garazowe.webp",
      link: "/bramy-garazowe",
    },
    {
      title: "Drzwi zewnętrzne",
      image: "https://sklep.wisniowski.pl/img/layout/Drzwi.webp",
      link: "/drzwi-zewnetrzne",
    },
    {
      title: "Rolety i żaluzje",
      image:
        "https://www.wisniowski.pl/api/preview/8f/8fa81bcd-b892-4c05-903a-e47fad01ddb3.jpg?w=1920&q=75",
      link: "/rolety-i-zaluzje",
    },
    {
      title: "Ogrodzenia",
      image: "https://sklep.wisniowski.pl/img/layout/Ogrodzenia.webp",
      link: "/ogrodzenia",
    },
    {
      title: "Bramy przemysłowe",
      image:
        "https://www.wisniowski.pl/api/preview/d8/d899c00b-9a9e-43d9-95bf-132a5a3a199e.jpg?w=1920&q=75",
      link: "bramy-przemyslowe",
    },
    {
      title: "Ogrodzenia przemysłowe",
      image:
        "https://www.wisniowski.pl/api/preview/8f/8fa81bcd-b892-4c05-903a-e47fad01ddb3.jpg?w=1920&q=75",
      link: "/ogrodzenia",
    },
    {
      title: "Ogrody zimowe i przeszklenia aluminiowe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPDg9kE8qomE9VAtW5uDqe2zVxEj447rG9NA&s",
      link: "/ogrody-zimowe",
    },
    {
      title: "Inteligentny dom",
      image:
        "https://www.wisniowski.pl/api/preview/51/51ce72e5-36fc-48b5-a1aa-1b9c56ad4a92.jpg?w=3840&q=100",
      link: "/inteligentny-dom",
    },
  ];

  return (
    <section className=" bg-white">
      {/* Kafelki z ofertą */}
      <div className="w-full px-0 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2">
          {offers.map((offer, index) => (
            <Link
              to={offer.link}
              key={index}
              className={`relative group h-64 overflow-hidden ${
                index === offers.length - 1
                  ? "col-span-2 sm:col-span-2 lg:col-span-1"
                  : ""
              }`}
            >
              <img
                src={offer.image}
                alt={offer.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition duration-300"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition duration-300 group-hover:bg-opacity-60">
                <h3 className="text-white text-lg font-semibold text-center">
                  {offer.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsShowcase;
