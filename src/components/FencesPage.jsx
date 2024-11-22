import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";

// Komponent bannera
const FenceBanner = () => {
  const bannerImages = [
    "/images/fence1.jpg", // Podmień na faktyczne ścieżki zdjęć
    "/images/fence2.jpg",
    "/images/fence3.jpg",
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="relative">
        <div className="flex transition-transform duration-300 ease-in-out">
          {bannerImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Ogrodzenie ${idx + 1}`}
              className="w-full h-[400px] object-cover"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

// Slider dla Modern (jeden slajd na raz)
const ModernSlider = () => {
  // Przykładowe dane produktów
  const products = [
    {
      model: "AW.10.110",
      image: "/images/aw10110.jpg", // Podmień na rzeczywiste obrazy
      description: "15 wzorów, różne rodzaje wypełnień",
    },
    {
      model: "AW.10.111",
      image: "/images/aw10111.jpg",
      description: "15 wzorów, różne rodzaje wypełnień",
    },
    {
      model: "AW.10.112",
      image: "/images/aw10112.jpg",
      description: "15 wzorów, różne rodzaje wypełnień",
    },
    {
      model: "AW.10.113",
      image: "/images/aw10113.jpg",
      description: "15 wzorów, różne rodzaje wypełnień",
    },
    {
      model: "AW.10.114",
      image: "/images/aw10114.jpg",
      description: "15 wzorów, różne rodzaje wypełnień",
    },
    {
      model: "AW.10.115",
      image: "/images/aw10115.jpg",
      description: "15 wzorów, różne rodzaje wypełnień",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Ogrodzenia Modern</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50} // Odstęp między slajdami
        slidesPerView={1} // Wyświetla jeden slajd naraz
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg p-6">
              {/* Obraz modelu */}
              <img
                src={product.image}
                alt={`Ogrodzenie ${product.model}`}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
              />
              {/* Opis modelu */}
              <h3 className="text-lg font-semibold text-blue-700">
                Model {product.model}
              </h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const HomeInclusiveSlider = () => {
  const products = [
    {
      model: "AW.10.200",
      image: "/images/aw10200.jpg", // Zastąp rzeczywistym obrazem
      description: "Aplikacje ozdobne, personalizacja paneli",
    },
    {
      model: "AW.10.201",
      image: "/images/aw10201.jpg",
      description: "Aplikacje ozdobne, personalizacja paneli",
    },
    {
      model: "AW.10.202",
      image: "/images/aw10202.jpg",
      description: "Aplikacje ozdobne, personalizacja paneli",
    },
    {
      model: "AW.10.203",
      image: "/images/aw10203.jpg",
      description: "Aplikacje ozdobne, personalizacja paneli",
    },
    {
      model: "AW.10.233",
      image: "/images/aw10233.jpg",
      description: "Aplikacje ozdobne, personalizacja paneli",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        Ogrodzenia Home Inclusive
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src={product.image}
                alt={`Ogrodzenie ${product.model}`}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-700">
                Model {product.model}
              </h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const LuxSlider = () => {
  const products = [
    {
      model: "AW.10.31",
      image: "/images/aw1031.jpg", // Zastąp rzeczywistym obrazem
      description: "Ekskluzywne wzory, wysoka jakość wykończenia",
    },
    {
      model: "AW.10.32",
      image: "/images/aw1032.jpg",
      description: "Ekskluzywne wzory, wysoka jakość wykończenia",
    },
    {
      model: "AW.10.33",
      image: "/images/aw1033.jpg",
      description: "Ekskluzywne wzory, wysoka jakość wykończenia",
    },
    // Dodaj więcej modeli w zakresie od AW.10.31 do AW.10.62
    {
      model: "AW.10.62",
      image: "/images/aw1062.jpg",
      description: "Ekskluzywne wzory, wysoka jakość wykończenia",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Ogrodzenia Lux</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src={product.image}
                alt={`Ogrodzenie ${product.model}`}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-700">
                Model {product.model}
              </h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const ClassicSlider = () => {
  const products = [
    {
      model: "AW.10.01",
      image: "/images/aw1001.jpg", // Zastąp rzeczywistym obrazem
      description: "13 wzorów, klasyczna estetyka i solidne wykonanie",
    },
    {
      model: "AW.10.02",
      image: "/images/aw1002.jpg",
      description: "13 wzorów, klasyczna estetyka i solidne wykonanie",
    },
    {
      model: "AW.10.03",
      image: "/images/aw1003.jpg",
      description: "13 wzorów, klasyczna estetyka i solidne wykonanie",
    },
    // Dodaj więcej modeli w zakresie od AW.10.01 do AW.10.76
    {
      model: "AW.10.76",
      image: "/images/aw1076.jpg",
      description: "13 wzorów, klasyczna estetyka i solidne wykonanie",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        Ogrodzenia Classic
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src={product.image}
                alt={`Ogrodzenie ${product.model}`}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-700">
                Model {product.model}
              </h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const StyleSlider = () => {
  const products = [
    {
      model: "AW.10.07",
      image: "/images/aw1007.jpg", // Zastąp rzeczywistym obrazem
      description: "Stylowe wzory, wyjątkowe wykończenia, trwałe materiały",
    },
    {
      model: "AW.10.08",
      image: "/images/aw1008.jpg",
      description: "Stylowe wzory, wyjątkowe wykończenia, trwałe materiały",
    },
    {
      model: "AW.10.09",
      image: "/images/aw1009.jpg",
      description: "Stylowe wzory, wyjątkowe wykończenia, trwałe materiały",
    },
    // Dodaj więcej modeli w zakresie od AW.10.07 do AW.10.26
    {
      model: "AW.10.26",
      image: "/images/aw1026.jpg",
      description: "Stylowe wzory, wyjątkowe wykończenia, trwałe materiały",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Ogrodzenia Style</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src={product.image}
                alt={`Ogrodzenie ${product.model}`}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-700">
                Model {product.model}
              </h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const VarioSlider = () => {
  const products = [
    {
      model: "AW.10.81",
      image: "/images/aw1081.jpg", // Zastąp rzeczywistym obrazem
      description: "Nowoczesne wzory z możliwością personalizacji.",
    },
    {
      model: "AW.10.82",
      image: "/images/aw1082.jpg",
      description: "Nowoczesne wzory z możliwością personalizacji.",
    },
    {
      model: "AW.10.83",
      image: "/images/aw1083.jpg",
      description: "Nowoczesne wzory z możliwością personalizacji.",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Ogrodzenia Vario</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src={product.image}
                alt={`Ogrodzenie ${product.model}`}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-700">
                Model {product.model}
              </h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const PremiumSlider = () => {
  const products = [
    {
      model: "AW.10.63",
      image: "/images/aw1063.jpg", // Zastąp rzeczywistym obrazem
      description: "Elegancka kolekcja o nowoczesnym designie.",
    },
    {
      model: "AW.10.64",
      image: "/images/aw1064.jpg",
      description: "Elegancka kolekcja o nowoczesnym designie.",
    },
    {
      model: "AW.10.65",
      image: "/images/aw1065.jpg",
      description: "Elegancka kolekcja o nowoczesnym designie.",
    },
    {
      model: "AW.10.66",
      image: "/images/aw1066.jpg",
      description: "Elegancka kolekcja o nowoczesnym designie.",
    },
    {
      model: "AW.10.67",
      image: "/images/aw1067.jpg",
      description: "Elegancka kolekcja o nowoczesnym designie.",
    },
    {
      model: "AW.10.68",
      image: "/images/aw1068.jpg",
      description: "Elegancka kolekcja o nowoczesnym designie.",
    },
    {
      model: "AW.10.69",
      image: "/images/aw1069.jpg",
      description: "Elegancka kolekcja o nowoczesnym designie.",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">
        Ogrodzenia Premium
      </h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src={product.image}
                alt={`Ogrodzenie ${product.model}`}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-700">
                Model {product.model}
              </h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const BasicSlider = () => {
  const products = [
    {
      model: "AW.10.90",
      image: "/images/aw1090.jpg", // Zastąp rzeczywistym obrazem
      description: "Proste i funkcjonalne ogrodzenia o atrakcyjnej cenie.",
    },
    {
      model: "AW.10.91",
      image: "/images/aw1091.jpg",
      description: "Proste i funkcjonalne ogrodzenia o atrakcyjnej cenie.",
    },
    {
      model: "AW.10.92",
      image: "/images/aw1092.jpg",
      description: "Proste i funkcjonalne ogrodzenia o atrakcyjnej cenie.",
    },
    {
      model: "AW.10.93",
      image: "/images/aw1093.jpg",
      description: "Proste i funkcjonalne ogrodzenia o atrakcyjnej cenie.",
    },
  ];

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">Ogrodzenia Basic</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white shadow-md rounded-lg p-6">
              <img
                src={product.image}
                alt={`Ogrodzenie ${product.model}`}
                className="w-full h-[300px] object-cover rounded-lg mb-4"
              />
              <h3 className="text-lg font-semibold text-blue-700">
                Model {product.model}
              </h3>
              <p className="text-gray-700">{product.description}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const FencesPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Baner */}
      <FenceBanner />

      {/* Slider dla Modern */}
      <div className="container mx-auto px-4 py-8">
        <ModernSlider />
        <HomeInclusiveSlider />
        <LuxSlider />
        <ClassicSlider />
        <StyleSlider />
        <VarioSlider />
        <PremiumSlider />
        <BasicSlider />
      </div>
    </div>
  );
};

export default FencesPage;
