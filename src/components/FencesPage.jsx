import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";
import { products } from "../data/productData";
import fence1Img from "../assets/fences1.jpg";
import fence2Img from "../assets/fences2.jpg";
import "swiper/css";
import "swiper/css/navigation";
import InspirationBottom from "./InspirationBottom";

const FenceBanner = () => {
  const bannerImages = [
    "https://www.wisniowski.pl/api/preview/43/43ab9e98-fe4a-469f-b18b-dac01b98db70.jpg?w=1200&q=95",
    fence1Img,
    fence2Img,
  ];

  return (
    <motion.div className="w-full overflow-hidden">
      <div className="relative">
        <div className="flex justify-between">
          {bannerImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Ogrodzenie ${idx + 1}`}
              className="w-1/3 h-[150px] md:h-[500px] object-fit mt-24 md:mt-0"
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
      <div className="relative max-w-6xl mx-auto">
        {" "}
        {/* Ograniczenie szerokości i wycentrowanie */}
        <Swiper
          modules={[Navigation]}
          navigation
          spaceBetween={50}
          slidesPerView={1}
          className="w-full overflow-visible" // Strzałki poza szarym blokiem
        >
          {productsList.map((product, index) => (
            <SwiperSlide key={index}>
              <div className="flex flex-col md:flex-row items-center justify-center bg-gray-200 shadow-md rounded-lg p-10">
                {/* Sekcja obrazu */}
                <div className="flex-shrink-0 w-[500px] h-[300px] md:w-[600px] md:h-[550px]">
                  <img
                    src={product.image}
                    alt={product.model}
                    className="w-full h-full object-contain"
                  />
                </div>
                {/* Sekcja tekstowa */}
                <div className="flex flex-col text-left md:ml-10">
                  <p className="text-sm uppercase text-gray-500 tracking-widest">
                    Modern
                  </p>
                  <h3 className="text-4xl font-light mb-2">{product.model}</h3>
                  <p className="text-lg font-bold">
                    Wykonanie:{" "}
                    <span className="font-normal text-gray-600">
                      {product.construction}
                    </span>
                  </p>
                  <p className="text-lg font-bold">
                    Materiał:{" "}
                    <span className="font-normal text-gray-600">
                      {product.options}
                    </span>
                  </p>
                  {product.description ? (
                    <p className="text-lg font-bold">{product.description}</p>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
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
      <UniversalSlider title="" category="modernAlu" />
      <UniversalSlider
        title="Ogrodzenia Home Inclusive"
        category="homeInclusive"
      />
      <UniversalSlider title="" category="homeInclusiveAlu" />
      <UniversalSlider title="Ogrodzenia Lux" category="lux" />
      <UniversalSlider title="Ogrodzenia Classic" category="classic" />
      <UniversalSlider title="" category="classicAlu" />
      <UniversalSlider title="Ogrodzenia Style" category="style" />
      <UniversalSlider title="Ogrodzenia Vario" category="vario" />
      <UniversalSlider title="Ogrodzenia Premium" category="premium" />
      <UniversalSlider title="Ogrodzenia Basic" category="basic" />
      <UniversalSlider title="Ogrodzenia Inifity" category="infinity" />
      <InspirationBottom />
    </div>
  );
};

export default FencesPage;
