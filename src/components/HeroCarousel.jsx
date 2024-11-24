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
      <section className="hero-carousel bg-gray-50">
        {/* Swiper */}
        <Swiper
          style={{ marginBottom: 0, paddingBottom: 0 }}
          modules={[Navigation]}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Ustawienie referencji na instancję Swipera
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Ustawienie aktywnego indeksu przy zmianie slajdu
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div className="slide flex flex-col md:flex-row items-center pt-16">
                {/* Tekst slajdu */}
                <div className="content md:w-1/2 text-left px-4 pb-8">
                  <h1 className="text-3xl text-[#3B3B1D] font-bold mb-4">{slide.title}</h1>
                  <p className="text-md text-left mb-6">{slide.description}</p>
                  <button className="border-[#3B3B1D] border-2 font-semibold text-[#3B3B1D] rounded-sm px-4 py-1 shadow-sm hover:bg-[#3B3B1D] hover:text-white transition">
                    {slide.buttonText}
                  </button>
                </div>
                {/* Obraz slajdu */}
                <div className="image md:w-1/2 md:mt-0">
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
      <div className="navigation-buttons flex justify-center space-x-4 md:space-x-4 border-b border-gray-300 pt-6 text-xs md:text-sm lg:text-sm px-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleNavigationClick(index)}
            className={`pb-2 font-semibold transition ${
              activeIndex === index
                ? "text-[#3B3B1D] border-b-2 border-[#3B3B1D]"
                : "text-gray-500 hover:text-[#3B3B1D]"
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
