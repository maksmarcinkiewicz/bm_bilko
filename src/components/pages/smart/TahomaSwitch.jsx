import { motion } from "framer-motion";
import InspirationBottom from "../../InspirationBottom";

// Main TahomaSwitch component
const TahomaSwitch = () => {
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

// Banner Section Component
const BannerSection = () => {
  const bannerImage =
    "https://www.wisniowski.pl/api/preview/51/51ce72e5-36fc-48b5-a1aa-1b9c56ad4a92.jpg?w=1920&q=75";

  return (
    <div className="relative w-full h-screen">
      {/* Background Image */}
      <img
        src={bannerImage}
        alt="Pierwsza brama SMART w standardzie"
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-start px-8 md:px-24 text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl font-semibold mb-4">Żyj wygodniej</h1>
          <p className="text-xl max-w-3xl mb-8">
            TaHoma switch łączy Twoją wygodę z bezpieczeństwem Twojego domu,
            umożliwiając zdalne zarządzanie, niezależnie od tego, gdzie się
            znajdujesz.
          </p>
        </motion.div>
      </div>
    </div>
  );
};

// Text Section Component
const TextSection = () => {
  return (
    <div className="px-8 md:px-24 py-12 bg-white text-gray-700">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-2xl max-w-4xl leading-relaxed">
          Nigdy wcześniej zarządzanie domem nie było tak proste! Zintegruj
          domowe urządzenia i steruj nimi, gdziekolwiek jesteś. Stwórz własne
          scenariusze i pozbądź się codziennej rutyny. Sprawdź zdalnie status
          sprzętu i bądź spokojny o bezpieczeństwo najbliższych. Żyj wygodnie z
          TaHoma switch!
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
        <h2 className="text-2xl">Twój inteligentny dom</h2>
        <div className="flex flex-col md:flex-row items-start justify-between gap-12">
          <div className="md:w-1/2">
            <h3 className="text-6xl mb-4">TaHoma switch</h3>
            <ul className="md:pt-24 text-xl text-gray-700">
              <p className="text-3xl mb-2">
                Sprawdź, co zyskujesz dzięki inteligentnemu systemowi
                zarządzania domem.
              </p>
              <li>
                Centralizacja rozwiązań - łączy w jeden system najważniejsze
                urządzenia domowe
              </li>
              <li>Zdalne sterowanie i monitoring</li>
              <li>
                Wygodne sterowanie urządzeniami za pomocą przycisków, aplikacji
                i za pomocą asystenta głosowego
              </li>
              <li>
                Bezpieczeństwo, ochrona, efektywność energetyczna i komfort na
                co dzień
              </li>
            </ul>
          </div>
          <div className="md:w-1/2 flex items-center justify-center">
            <img
              src="https://www.wisniowski.pl/api/preview/c6/c62f3295-7e77-45d1-a48c-fa03d590fcef.png?w=1080&q=95"
              alt="Tahoma Switch by Somfy"
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
    "https://media.wisniowski.pl/82/82c2b50e-d687-4020-b608-8142fa7a3d1a.mp4";

  return (
    <div className="relative w-full h-screen bg-gray-100 flex items-center justify-center">
      <video
        src={videoUrl}
        className="w-full h-full object-cover "
        controls
      ></video>
    </div>
  );
};

export default TahomaSwitch;
