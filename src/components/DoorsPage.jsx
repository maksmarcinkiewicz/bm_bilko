import { motion } from "framer-motion";

const HeroSection = () => (
  <div
    className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
    style={{
      backgroundImage:
        "url('https://via.placeholder.com/1920x800?text=Drzwi+Zewn%C4%99trzne')",
    }}
  >
    <div className="text-center text-white">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        Drzwi Zewnętrzne
      </h1>
      <p className="text-lg font-light max-w-2xl mx-auto drop-shadow-lg">
        Otwórz drzwi do nowoczesności i bezpieczeństwa. Połącz estetykę z
        technologią.
      </p>
    </div>
  </div>
);

const ImageTextSection = ({ image, title, description, reverse }) => (
  <div
    className={`flex flex-col ${
      reverse ? "md:flex-row-reverse" : "md:flex-row"
    } items-center py-16`}
  >
    <div className="w-full md:w-1/2">
      <img
        src={image}
        alt={title}
        className="w-full object-cover h-[400px] rounded-lg shadow-lg"
      />
    </div>
    <div className="w-full md:w-1/2 px-6 md:px-12">
      <h2 className="text-4xl font-bold mb-4 text-[#1F1F1F]">{title}</h2>
      <p className="text-gray-700 mb-6 leading-relaxed">{description}</p>
      <button className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-lg transition">
        Dowiedz się więcej
      </button>
    </div>
  </div>
);

const ProductGrid = ({ products }) => (
  <div className="container mx-auto px-4 py-16">
    <h2 className="text-4xl font-bold text-center mb-12 text-[#1F1F1F]">
      Nasze Drzwi
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, idx) => (
        <div
          key={idx}
          className="bg-white shadow-lg rounded-lg overflow-hidden"
        >
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-[300px] object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold text-[#1F1F1F]">
              {product.name}
            </h3>
            <p className="text-gray-700 my-4">{product.description}</p>
            <button className="bg-gray-800 text-white px-4 py-2 rounded-md hover:bg-gray-700">
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
      alt="Contact Us"
      className="w-full h-[600px] object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Zainteresowany naszymi drzwiami?
        </h2>
        <p className="text-lg mb-6">
          Skontaktuj się z nami, aby dowiedzieć się więcej o naszych produktach.
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg transition">
          Skontaktuj się
        </button>
      </div>
    </div>
  </div>
);

const DoorsPage = () => {
  const products = [
    {
      name: "Drzwi Premium",
      image: "https://via.placeholder.com/600x400?text=Drzwi+Premium",
      description:
        "Ekskluzywne drzwi zewnętrzne, które łączą elegancję z bezpieczeństwem.",
    },
    {
      name: "Drzwi Classic",
      image: "https://via.placeholder.com/600x400?text=Drzwi+Classic",
      description: "Klasyczny design z nowoczesną technologią.",
    },
    {
      name: "Drzwi Nowoczesne",
      image: "https://via.placeholder.com/600x400?text=Drzwi+Nowoczesne",
      description: "Nowoczesne linie i zaawansowane funkcje.",
    },
  ];

  return (
    <motion.div
      className="bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSection />
      <ImageTextSection
        image="https://via.placeholder.com/800x400?text=Bezpiecze%C5%84stwo+i+Technologia"
        title="Bezpieczeństwo i Technologia"
        description="Nasze drzwi zewnętrzne są wyposażone w najnowsze technologie antywłamaniowe, które zapewniają spokój ducha."
      />
      <ImageTextSection
        image="https://via.placeholder.com/800x400?text=Design+i+Estetyka"
        title="Design i Estetyka"
        description="Zaprojektowane z myślą o nowoczesnym stylu, nasze drzwi są doskonałym uzupełnieniem każdego domu."
        reverse
      />
      <ProductGrid products={products} />
      <ContactBanner />
    </motion.div>
  );
};

export default DoorsPage;
