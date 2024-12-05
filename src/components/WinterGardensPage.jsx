import { motion } from "framer-motion";

const HeroSection = () => (
  <div
    className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
    style={{
      backgroundImage:
        "url('https://via.placeholder.com/1920x800?text=Ogrody+Zimowe')",
    }}
  >
    <div className="text-center text-white bg-black bg-opacity-40 p-10 rounded-lg">
      <h1 className="text-6xl font-extrabold mb-6">Ogrody Zimowe</h1>
      <p className="text-lg font-light max-w-3xl mx-auto">
        Twoja przestrzeń, gdzie natura spotyka się z technologią. Ciesz się
        zielenią przez cały rok.
      </p>
    </div>
  </div>
);

const VisionSection = () => (
  <div className="container mx-auto px-8 py-16">
    <h2 className="text-5xl font-bold text-center mb-12 text-gray-900">
      Wizja Przestrzeni
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
      <img
        src="https://via.placeholder.com/800x600?text=Przestrze%C5%84+i+światło"
        alt="Przestrzeń i Światło"
        className="rounded-lg shadow-lg"
      />
      <div>
        <h3 className="text-4xl font-bold mb-6">
          Naturalne Światło i Elegancja
        </h3>
        <p className="text-lg text-gray-700 mb-6">
          Ogrody zimowe to harmonijne połączenie naturalnego światła, pięknych
          roślin i nowoczesnej architektury. Stwórz miejsce, gdzie światło
          ożywia przestrzeń, a design zachwyca.
        </p>
        <p className="text-lg text-gray-700">
          Każdy ogród zimowy jest wyjątkowy, zaprojektowany tak, aby podkreślać
          Twój styl i potrzeby. Usiądź wygodnie z filiżanką kawy i podziwiaj
          naturę niezależnie od pory roku.
        </p>
      </div>
    </div>
  </div>
);

const InspirationGallery = () => (
  <div className="bg-gray-100 py-16">
    <div className="container mx-auto px-4">
      <h2 className="text-5xl font-bold text-center mb-12">Inspiracje</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {["1", "2", "3", "4", "5", "6"].map((_, idx) => (
          <img
            key={idx}
            src={`https://via.placeholder.com/600x400?text=Inspiracja+${
              idx + 1
            }`}
            alt={`Inspiracja ${idx + 1}`}
            className="w-full h-[300px] object-cover rounded-lg shadow-md"
          />
        ))}
      </div>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className="container mx-auto px-8 py-16">
    <h2 className="text-5xl font-bold text-center mb-12">
      Dlaczego nasze ogrody zimowe?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      {[
        {
          title: "Całoroczna Oaza",
          description: "Ciesz się zielenią niezależnie od pogody.",
          icon: "🌿",
        },
        {
          title: "Termiczna Izolacja",
          description: "Zaawansowane technologie utrzymania ciepła.",
          icon: "🔥",
        },
        {
          title: "Inteligentne Systemy",
          description: "Steruj temperaturą i wilgotnością zdalnie.",
          icon: "💡",
        },
      ].map((feature, idx) => (
        <div
          key={idx}
          className="text-center bg-white p-8 rounded-lg shadow-md"
        >
          <div className="text-6xl mb-4">{feature.icon}</div>
          <h3 className="text-3xl font-bold mb-4">{feature.title}</h3>
          <p className="text-gray-700">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const SmartIntegrationSection = () => (
  <div
    className="relative bg-cover bg-center py-24"
    style={{
      backgroundImage:
        "url('https://via.placeholder.com/1920x800?text=Inteligentne+Systemy')",
    }}
  >
    <div className="container mx-auto px-4 text-center text-white">
      <h2 className="text-5xl font-extrabold mb-6">
        Inteligentne Ogrody Zimowe
      </h2>
      <p className="text-xl max-w-3xl mx-auto mb-8">
        Dzięki integracji z systemami SmartHome możesz zdalnie kontrolować
        temperaturę, wilgotność i oświetlenie. Ogród zimowy, który reaguje na
        Ciebie.
      </p>
      <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-lg transition">
        Dowiedz się więcej
      </button>
    </div>
  </div>
);

const ProductShowcase = () => (
  <div className="container mx-auto px-8 py-16">
    <h2 className="text-5xl font-bold text-center mb-12">Nasze realizacje</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {["Realizacja 1", "Realizacja 2", "Realizacja 3"].map((name, idx) => (
        <div
          key={idx}
          className="bg-white rounded-lg shadow-md overflow-hidden"
        >
          <img
            src={`https://via.placeholder.com/600x400?text=${name}`}
            alt={name}
            className="w-full h-[300px] object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{name}</h3>
            <p className="text-gray-700 mb-4">
              Piękna realizacja, która łączy funkcjonalność i design.
            </p>
            <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-md">
              Zobacz szczegóły
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>
);

const ContactBanner = () => (
  <div className="relative">
    <img
      src="https://via.placeholder.com/1920x600?text=Kontakt"
      alt="Contact"
      className="w-full h-[600px] object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-12">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6">
          Zainspiruj się! Skontaktuj się z nami.
        </h2>
        <p className="text-lg mb-8">
          Oferujemy kompleksowe doradztwo i wsparcie na każdym etapie
          realizacji.
        </p>
        <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-lg">
          Skontaktuj się z nami
        </button>
      </div>
    </div>
  </div>
);

const WinterGardensPage = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="bg-gray-100"
  >
    <HeroSection />
    <VisionSection />
    <InspirationGallery />
    <FeaturesSection />
    <SmartIntegrationSection />
    <ProductShowcase />
    <ContactBanner />
  </motion.div>
);

export default WinterGardensPage;
