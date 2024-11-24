import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { useState, useRef } from "react";

function Realizations() {
  const realizations = [
    "https://www.winart.com.pl/assets/1-xFLK_-XZ.jpg",
    "https://www.winart.com.pl/assets/2-jfyQXQG0.jpg",
    "https://www.winart.com.pl/assets/3-XqjfoUkc.jpg",
    "https://www.winart.com.pl/assets/5-8hP6LR54.jpg",
    "https://www.winart.com.pl/assets/7-fXMZYDEe.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0); // Aktywny indeks
  const swiperRef = useRef(null); // Referencja do instancji Swipera

  const handleDotClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Przejdź do wybranego slajdu
    }
  };

  return (
    <div>
      {/* Sekcja realizacji */}
      <div className="w-full px-0 pt-24">
        <h2 className="text-2xl md:text-4xl text-[#3B3B1D] font-bold px-4 mb-8">
          Nasze Realizacje
        </h2>
        <Swiper
          spaceBetween={20}
          slidesPerView={1} // Domyślnie 1 slajd
          loop={true}
          onSwiper={(swiper) => (swiperRef.current = swiper)} // Zapisz instancję Swipera
          onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)} // Śledzenie aktywnego indeksu
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
                className="w-full shadow-md h-[300px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* Customowa nawigacja */}
        <div className="flex justify-center mt-4 space-x-2">
          {realizations.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)} // Obsługa kliknięcia kropeczki
              className={`w-3 h-3 rounded-full transition ${
                activeIndex === index
                  ? "bg-black" // Aktywna kropeczka
                  : "bg-gray-300 hover:bg-gray-500" // Nieaktywna kropeczka
              }`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Realizations;
