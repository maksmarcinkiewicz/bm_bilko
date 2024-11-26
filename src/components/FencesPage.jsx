import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { products } from "../data/productData";

import "swiper/css";
import "swiper/css/navigation";

const FenceBanner = () => {
  const bannerImages = [
    "https://www.wisniowski.pl/api/preview/43/43ab9e98-fe4a-469f-b18b-dac01b98db70.jpg?w=1200&q=95",
    "https://www.wisniowski.pl/api/preview/61/61f32a49-4edc-43db-bee0-d376aca0e01e.jpg?w=1200&q=95",
    "https://www.wisniowski.pl/api/preview/11/11a6c9d4-8b9d-44e8-944e-320360702d60.jpg?w=1920&q=100",
  ];

  return (
    <motion.div className="w-full overflow-hidden">
      <div className="relative">
        <div className="flex">
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
    </motion.div>
  );
};

// Uniwersalny slider dla produktów
const UniversalSlider = ({ title, category }) => {
  const productsList = products[category]; // Pobierz produkty z wybranej kategorii

  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        {productsList.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center justify-evenly bg-white shadow-md rounded-lg p-6 md:p-10">
              {/* Sekcja obrazu */}
              <div className="flex-shrink-0">
                <img
                  src={product.image}
                  alt={product.model}
                  className="w-64 h-64 object-cover rounded-md mb-4 md:mb-0"
                />
              </div>
              {/* Sekcja tekstowa */}
              <div className="flex flex-col md:ml-6 text-left lg:w-96">
                <h3 className="text-xl font-bold mb-2">
                  Model: {product.model}
                </h3>
                <p className="text-gray-600">{product.description}</p>
                <p className="text-gray-600">
                  {product.construction
                    ? `Wykonanie: ${product.construction}`
                    : ""}
                </p>
                <p className="text-gray-600">
                  {product.options ? `Dostępne opcje: ${product.options}` : ""}
                </p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// Strona ogrodzeń
const FencesPage = () => {
  return (
    <div>
      <FenceBanner />
      {/* Użycie slidera dla poszczególnych kategorii */}
      <UniversalSlider title="Ogrodzenia Modern" category="modern" />
      <UniversalSlider
        title="Ogrodzenia Home Inclusive"
        category="homeInclusive"
      />
      <UniversalSlider title="Ogrodzenia Lux" category="lux" />
      <UniversalSlider title="Ogrodzenia Classic" category="classic" />
    </div>
  );
};

export default FencesPage;
