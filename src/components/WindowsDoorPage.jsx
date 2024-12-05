import { motion } from "framer-motion";

const Banner = () => {
  const bannerImages = [
    "https://via.placeholder.com/1920x400?text=Okna+i+Drzwi+Baner+1",
    "https://via.placeholder.com/1920x400?text=Okna+i+Drzwi+Baner+2",
    "https://via.placeholder.com/1920x400?text=Okna+i+Drzwi+Baner+3",
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="relative flex justify-center">
        {bannerImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Baner ${idx + 1}`}
            className="w-full h-[400px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

const ProductGrid = ({ title, products }) => (
  <div className="mb-16">
    <h2 className="text-3xl font-bold text-center text-[#1F1F1F] mb-8">
      {title}
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {products.map((product, index) => (
        <motion.div
          key={index}
          className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
          whileHover={{ scale: 1.02 }}
        >
          <img
            src={product.image}
            alt={`Produkt ${product.name}`}
            className="w-full h-[300px] object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-bold mb-4">{product.name}</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
            <div className="flex flex-wrap gap-2">
              {product.features.map((feature, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-gray-200 text-sm rounded-full"
                >
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  </div>
);

const FeatureSection = ({ image, title, description, reverse }) => (
  <div
    className={`flex flex-col ${
      reverse ? "lg:flex-row-reverse" : "lg:flex-row"
    } items-center mb-16`}
  >
    <div className="w-full lg:w-1/2 p-6">
      <h2 className="text-4xl font-bold mb-6">{title}</h2>
      <p className="text-lg text-gray-700">{description}</p>
    </div>
    <div className="w-full lg:w-1/2">
      <img src={image} alt={title} className="w-full rounded-lg shadow-lg" />
    </div>
  </div>
);

const ContactBanner = () => (
  <div className="relative">
    {/* Obraz tła */}
    <img
      src="https://via.placeholder.com/1920x600?text=Zainteresowany%3F"
      alt="Contact Background"
      className="w-full h-[600px] object-cover"
    />
    {/* Prostokąt z tekstem */}
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-75 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Sprawdź, gdzie kupić nasze produkty
        </h2>
        <p className="text-lg mb-6">
          Skontaktuj się z nami, aby dowiedzieć się więcej o oknach i drzwiach.
        </p>
        <button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3 rounded-lg transition">
          Skontaktuj się
        </button>
      </div>
    </div>
  </div>
);

const WindowsDoorsPage = () => {
  const windowsProducts = [
    {
      name: "Okno Premium",
      image: "https://via.placeholder.com/600x400?text=Okno+Premium",
      description: "Nowoczesne okno o wysokiej izolacji termicznej.",
      features: ["Kolor: Biały", "Materiał: PCV"],
    },
    {
      name: "Okno Ekonomiczne",
      image: "https://via.placeholder.com/600x400?text=Okno+Ekonomiczne",
      description: "Doskonałe rozwiązanie w przystępnej cenie.",
      features: ["Kolor: Dąb", "Materiał: Aluminium"],
    },
    {
      name: "Okno Deluxe",
      image: "https://via.placeholder.com/600x400?text=Okno+Ekonomiczne",
      description: "Doskonałe rozwiązanie w przystępnej cenie.",
      features: ["Kolor: Dąb", "Materiał: Aluminium"],
    },
  ];

  const doorsProducts = [
    {
      name: "Drzwi Antywłamaniowe",
      image: "https://via.placeholder.com/600x400?text=Drzwi+Antywłamaniowe",
      description: "Solidne drzwi o najwyższym poziomie bezpieczeństwa.",
      features: ["Kolor: Antracyt", "Zamek wielopunktowy"],
    },
    {
      name: "Drzwi Wewnętrzne",
      image: "https://via.placeholder.com/600x400?text=Drzwi+Wewnętrzne",
      description: "Eleganckie drzwi do wnętrz domowych.",
      features: ["Kolor: Biały", "Styl: Nowoczesny"],
    },
    {
      name: "Drzwi Premium",
      image: "https://via.placeholder.com/600x400?text=Drzwi+Wewnętrzne",
      description: "Eleganckie drzwi do wnętrz domowych.",
      features: ["Kolor: Biały", "Styl: Nowoczesny"],
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
      <Banner />
      <div className="container mx-auto px-4 py-8">
        <ProductGrid title="Okna" products={windowsProducts} />
        <FeatureSection
          image="https://via.placeholder.com/600x400?text=Inteligentne+Okna"
          title="Inteligentne Okna"
          description="Zarządzaj oknami zdalnie dzięki technologii SmartConnected."
        />
        <ProductGrid title="Drzwi" products={doorsProducts} />
        <FeatureSection
          image="https://via.placeholder.com/600x400?text=Bezpieczne+Drzwi"
          title="Bezpieczne Drzwi"
          description="Drzwi z funkcją automatycznego zamykania i czujnikami."
          reverse
        />
      </div>
      <ContactBanner />
    </motion.div>
  );
};

export default WindowsDoorsPage;
