import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { useRef, useState } from "react";

// Import stylów Swiper.js
import "swiper/css";
import "swiper/css/navigation";

function HeroCarousel() {
  const slides = [
    {
      title: "Okna i drzwi przesuwne",
      description:
        "Poznaj rozwiązania, które łączą design i funkcjonalność. Idealne do Twojego domu lub biura!",
      buttonText: "Zobacz więcej",
      imageUrl:
        "https://sklep.wisniowski.pl/img/banery/WebP/okna-pvc-primo.webp",
    },
    {
      title: "Bramy garażowe i przemysłowe",
      description:
        "Odkryj bramy garażowe i przemysłowe, które wyróżniają się niezawodnością i nowoczesnym stylem.",
      buttonText: "Sprawdź ofertę",
      imageUrl:
        "https://sklep.wisniowski.pl/img/banery/WebP/segmentowe-bramy-garazowe.webp",
    },
    {
      title: "Inteligentny dom",
      description:
        "Steruj swoim domem za pomocą nowoczesnych technologii. Komfort i bezpieczeństwo na wyciągnięcie ręki.",
      buttonText: "Dowiedz się więcej",
      imageUrl:
        "https://sklep.wisniowski.pl/img/banery/WebP/drzwi-Creo-WISNIOWSKI.webp",
    },
    {
      title: "Ogrodzenia",
      description:
        "Stylowe i trwałe ogrodzenia dla Twojego domu. Wybierz jakość i estetykę, które robią różnicę.",
      buttonText: "Zobacz naszą ofertę",
      imageUrl:
        "https://sklep.wisniowski.pl/img/banery/WebP/swiat-ogrodzen.webp",
    },
  ];

  const swiperRef = useRef(null); // Referencja do instancji Swipera
  const [activeIndex, setActiveIndex] = useState(0); // Przechowywanie aktywnego indeksu

  const handleNavigationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Przejdź do konkretnego slajdu
    }
    setActiveIndex(index); // Ustaw aktywny indeks
  };

  return (
    <div className="bg-white">
      <section className="hero-carousel bg-gray-100 pt-8">
        {/* Swiper */}
        <Swiper
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Ustawienie referencji na instancję Swipera
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Ustawienie aktywnego indeksu przy zmianie slajdu
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide flex flex-col md:flex-row items-center">
                {/* Tekst slajdu */}
                <div className="content md:w-1/2 text-left px-4">
                  <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg mb-6">{slide.description}</p>
                  <button className="bg-black text-white px-6 py-2 shadow-md hover:bg-gray-800 transition">
                    {slide.buttonText}
                  </button>
                </div>
                {/* Obraz slajdu */}
                <div className="image md:w-1/2 mt-6 md:mt-0">
                  <img
                    src={slide.imageUrl}
                    alt={slide.title}
                    className="w-full shadow-md"
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
      {/* Customowa nawigacja */}
      <div className="navigation-buttons flex justify-center space-x-2 md:space-x-4 border-b border-gray-300 pt-6 text-xs md:text-sm lg:text-sm px-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleNavigationClick(index)}
            className={`pb-2 font-semibold transition ${
              activeIndex === index
                ? "text-black border-b-2 border-black"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {slide.title}
          </button>
        ))}
      </div>
    </div>
  );
}

export default HeroCarousel;
