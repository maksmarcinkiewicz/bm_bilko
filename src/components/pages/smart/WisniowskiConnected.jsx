import React from "react";
import { motion } from "framer-motion";
import InspirationBottom from "../../InspirationBottom";

// Banner Section Component
const BannerSection = () => {
  const bannerImage =
    "https://www.wisniowski.pl/api/preview/7a/7a062062-cf37-4bf8-bf33-464cad4137f8.jpg?w=1920&q=75";

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={bannerImage}
        alt="Pierwsza brama SMART w standardzie"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-start px-8 md:px-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-semibold mb-4">
            Pierwsza brama SMART w standardzie
          </h1>
          <p className="text-xl max-w-3xl mb-8">
            WIŚNIOWSKI Connected łączy inteligentne rozwiązania z
            bezpieczeństwem. Jako pierwsi na rynku oferujemy bramę garażową,
            która w standardzie zapewnia pełną kontrolę i komfort użytkowania.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Text Section Component
const TextSection = () => {
  return (
    <div className="px-8  md:py-24 md:px-24 py-12 bg-white text-gray-700">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-2xl max-w-4xl leading-relaxed">
          Odkryj możliwości smart domu z WIŚNIOWSKI! Steruj bramą garażową w
          Twoim domu, przydzielaj dostępy i sprawdzaj bezpieczeństwo w jednej
          aplikacji. Bez centralki, bez pilota – jednym kliknięciem! Poczuj
          wolność z WIŚNIOWSKI Connected!
        </p>
      </motion.div>
    </div>
  );
};

// Features Section Component
const FeaturesSection = () => {
  return (
    <div className="px-8 md:px-24 py-12 bg-gray-100">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <h2 className="text-2xl mb-2">Na dobry początek</h2>
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="md:w-1/2">
            <h3 className="text-5xl md:text-7xl mb-4">WIŚNIOWSKI Connected</h3>

            <ul className="md:pt-24 text-xl text-gray-700">
              <p className="text-3xl mb-2">
                Sprawdź, co zyskujesz dzięki WIŚNIOWSKI Connected:
              </p>
              <li>
                Rozwiązania smart w standardzie z bramą garażową wyposażoną w
                napęd SPARK
              </li>
              <li>Prosta i szybka konfiguracja</li>
              <li>Zdalne sterowanie i monitoring</li>
              <li>Wygodne sterowanie bramą garażową za pomocą aplikacji</li>
              <li>Bezpieczeństwo i ochrona Twojego domu</li>
              <li>Łatwe udostępnianie</li>
            </ul>
          </div>
          <div className="md:w-1/2 flex items-start justify-start">
            <img
              src="https://www.wisniowski.pl/api/preview/15/15fcad51-4153-49a8-8b20-9a95a025c772.png?w=1080&q=95"
              alt="WIŚNIOWSKI Connected"
              className=""
            />
          </div>
        </div>
      </motion.div>
    </div>
  );
};

// Video Section Component
const VideoSection = () => {
  const videoUrl =
    "https://media.wisniowski.pl/25/254d87a8-69f5-4a6c-9197-b69ad237b84b.mp4";

  return (
    <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      <video
        src={videoUrl}
        className="w-full h-full object-cover shadow-lg"
        controls
      ></video>
    </div>
  );
};

// Main WisniowskiConnected component
const WisniowskiConnected = () => {
  return (
    <div className="relative w-full h-auto overflow-hidden">
      {/* Banner Section */}
      <BannerSection />
      {/* Text Section */}
      <TextSection />
      {/* Features Section */}
      <FeaturesSection />
      {/* Video Section */}
      <VideoSection />
      <InspirationBottom />
    </div>
  );
};

export default WisniowskiConnected;
