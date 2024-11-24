import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProjectsShowcase() {
  const realizations = [
    "https://www.winart.com.pl/assets/1-xFLK_-XZ.jpg",
    "https://www.winart.com.pl/assets/2-jfyQXQG0.jpg",
    "https://www.winart.com.pl/assets/3-XqjfoUkc.jpg",
    "https://www.winart.com.pl/assets/5-8hP6LR54.jpg",
    "https://www.winart.com.pl/assets/7-fXMZYDEe.jpg",
  ];

  const offers = [
    {
      title: "Okna",
      image: "https://sklep.wisniowski.pl/img/layout/Okna.webp",
    },
    {
      title: "Bramy garażowe",
      image: "https://sklep.wisniowski.pl/img/layout/Bramy-garazowe.webp",
    },
    {
      title: "Drzwi zewnętrzne",
      image: "https://sklep.wisniowski.pl/img/layout/Drzwi.webp",
    },
    {
      title: "Rolety i żaluzje",
      image:
        "https://www.wisniowski.pl/api/preview/8f/8fa81bcd-b892-4c05-903a-e47fad01ddb3.jpg?w=1920&q=75",
    },
    {
      title: "Ogrodzenia",
      image: "https://sklep.wisniowski.pl/img/layout/Ogrodzenia.webp",
    },
    {
      title: "Bramy przemysłowe",
      image:
        "https://www.wisniowski.pl/api/preview/d8/d899c00b-9a9e-43d9-95bf-132a5a3a199e.jpg?w=1920&q=75",
    },
    {
      title: "Ogrodzenia przemysłowe",
      image:
        "https://www.wisniowski.pl/api/preview/8f/8fa81bcd-b892-4c05-903a-e47fad01ddb3.jpg?w=1920&q=75",
    },
    {
      title: "Ogrody zimowe i przeszklenia aluminiowe",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQPDg9kE8qomE9VAtW5uDqe2zVxEj447rG9NA&s",
    },
    {
      title: "Inteligentny dom",
      image:
        "https://www.wisniowski.pl/api/preview/51/51ce72e5-36fc-48b5-a1aa-1b9c56ad4a92.jpg?w=3840&q=100",
    },
  ];

  return (
    <section className=" bg-white">
      {/* Kafelki z ofertą */}
      <div className="w-full px-0 mt-12">
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-1 lg:gap-2">
          {offers.map((offer, index) => (
            <div
              key={index}
              className={`relative group h-64 overflow-hidden ${
                index === offers.length - 1
                  ? "col-span-2 sm:col-span-2 lg:col-span-1" // Ostatni element zajmuje 2 kolumny tylko na małych ekranach
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default ProjectsShowcase;
