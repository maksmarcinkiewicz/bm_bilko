import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function ProjectsShowcase() {
  const realizations = [
    "https://via.placeholder.com/500x200?text=Realizacja+1",
    "https://via.placeholder.com/500x200?text=Realizacja+2",
    "https://via.placeholder.com/500x200?text=Realizacja+3",
    "https://via.placeholder.com/500x200?text=Realizacja+4",
  ];

  const offers = [
    {
      title: "Okna",
      image: "https://via.placeholder.com/150?text=Okna",
    },
    {
      title: "Bramy garażowe",
      image: "https://via.placeholder.com/150?text=Bramy+gara%C5%BCowe",
    },
    {
      title: "Drzwi zewnętrzne",
      image: "https://via.placeholder.com/150?text=Drzwi+zewn%C4%99trzne",
    },
    {
      title: "Rolety i żaluzje",
      image: "https://via.placeholder.com/150?text=Rolety+i+%C5%BCaluzje",
    },
    {
      title: "Ogrodzenia",
      image: "https://via.placeholder.com/150?text=Ogrodzenia",
    },
    {
      title: "Bramy przemysłowe",
      image: "https://via.placeholder.com/150?text=Bramy+przemys%C5%82owe",
    },
    {
      title: "Ogrodzenia przemysłowe",
      image: "https://via.placeholder.com/150?text=Ogrodzenia+przemys%C5%82owe",
    },
    {
      title: "Ogrody zimowe i przeszklenia aluminiowe",
      image: "https://via.placeholder.com/150?text=Ogrody+zimowe",
    },
    {
      title: "Inteligentny dom",
      image: "https://via.placeholder.com/150?text=Inteligentny+dom",
    },
  ];

  return (
    <section className="py-12 bg-gray-100">
      {/* Sekcja realizacji */}
      <div className="w-full px-0">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-8">
          Nasze Realizacje
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1} // Domyślnie 1 slajd
          loop={true}
          pagination={{
            clickable: true, // Dodaj klikalne kropeczki
          }}
          breakpoints={{
            // Konfiguracja dla różnych rozdzielczości ekranu
            768: {
              slidesPerView: 2, // Dwa slajdy na średnich ekranach
            },
            1024: {
              slidesPerView: 3, // Trzy slajdy na dużych ekranach
            },
          }}
        >
          {realizations.map((url, index) => (
            <SwiperSlide key={index}>
              <img
                src={url}
                alt={`Realizacja ${index + 1}`}
                className="w-full rounded-lg shadow-lg"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Kafelki z ofertą */}
      <div className="w-full px-0 mt-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-2">
          {offers.map((offer, index) => (
            <div key={index} className="relative group h-64 overflow-hidden">
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
