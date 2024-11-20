import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';

// Import stylów Swiper.js
import 'swiper/css';
import 'swiper/css/navigation';

function HeroCarousel() {
  const slides = [
    {
      title: "Panele kratowe z jesiennym rabatem -15%",
      description: "Szukasz pomysłu na to, jak ogrodzić działkę? Sprawdź naszą ofertę!",
      buttonText: "Poznaj szczegóły",
      imageUrl: "/path/to/slide1.jpg",
    },
    {
      title: "Drzwi indywidualnie wyCREOwne",
      description: "Drzwi WIŚNIOWSKI, które idealnie pasują do Twojego domu.",
      buttonText: "Poznaj szczegóły",
      imageUrl: "/path/to/slide2.jpg",
    },
    {
      title: "Nowoczesne bramy segmentowe",
      description: "Odkryj bramy segmentowe PRIME w naszej ofercie!",
      buttonText: "Sprawdź ofertę",
      imageUrl: "/path/to/slide3.jpg",
    },
  ];

  const swiperRef = useRef(null); // Referencja do instancji Swipera

  const handleNavigationClick = (index) => {
    if (swiperRef.current) {
      swiperRef.current.slideTo(index); // Przejdź do konkretnego slajdu
    }
  };

  return (
    <section className="hero-carousel">
      {/* Customowa nawigacja */}
      <div className="navigation-buttons flex justify-center mb-4 space-x-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => handleNavigationClick(index)}
            className="text-black font-semibold hover:underline focus:underline transition"
          >
            {slide.title}
          </button>
        ))}
      </div>

      {/* Swiper */}
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={1}
        loop={true}
        onSwiper={(swiper) => (swiperRef.current = swiper)} // Ustawienie referencji na instancję Swipera
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slide flex flex-col md:flex-row items-center">
              {/* Tekst slajdu */}
              <div className="content md:w-1/2 text-left px-4">
                <h1 className="text-4xl font-bold mb-4">{slide.title}</h1>
                <p className="text-lg mb-6">{slide.description}</p>
                <button className="bg-black text-white px-6 py-2 rounded-lg shadow-md hover:bg-gray-800 transition">
                  {slide.buttonText}
                </button>
              </div>
              {/* Obraz slajdu */}
              <div className="image md:w-1/2 mt-6 md:mt-0 px-4">
                <img
                  src={slide.imageUrl}
                  alt={slide.title}
                  className="w-full rounded-lg shadow-md"
                />
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
}

export default HeroCarousel;
