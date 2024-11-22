import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

function Realizations() {
  const realizations = [
    "https://www.winart.com.pl/assets/1-xFLK_-XZ.jpg",
    "https://www.winart.com.pl/assets/2-jfyQXQG0.jpg",
    "https://www.winart.com.pl/assets/3-XqjfoUkc.jpg",
    "https://www.winart.com.pl/assets/5-8hP6LR54.jpg",
    "https://www.winart.com.pl/assets/7-fXMZYDEe.jpg",
  ];

  return (
    <div>
      {/* Sekcja realizacji */}
      <div className="w-full px-0 pt-24">
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
                className="w-full rounded-lg shadow-lg h-[300px]"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
export default Realizations;
