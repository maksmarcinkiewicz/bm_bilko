import { motion } from "framer-motion";

const HeroSection = () => (
  <div
    className="relative bg-cover bg-center h-[70vh] flex items-center justify-center"
    style={{
      backgroundImage:
        "url('https://via.placeholder.com/1920x800?text=Rolety+i+%C5%BBaluzje')",
    }}
  >
    <div className="text-center text-white bg-black bg-opacity-50 p-10 rounded-lg">
      <h1 className="text-5xl font-extrabold mb-6">Rolety i Żaluzje</h1>
      <p className="text-lg font-light max-w-3xl mx-auto">
        Nowoczesne rozwiązania do Twojego domu – kontrola światła, prywatność i
        design w jednym.
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
      <h2 className="text-4xl font-bold mb-4">{title}</h2>
      <p className="text-gray-700 mb-6">{description}</p>
      <button className="bg-green-600 hover:bg-green-500 text-white px-6 py-3 rounded-lg transition">
        Dowiedz się więcej
      </button>
    </div>
  </div>
);

const FeaturesSection = () => (
  <div className="container mx-auto px-4 py-16">
    <h2 className="text-4xl font-bold text-center mb-12">
      Dlaczego nasze rolety i żaluzje?
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[
        {
          title: "Precyzyjna kontrola światła",
          description:
            "Reguluj ilość światła, aby stworzyć idealną atmosferę w pomieszczeniu.",
          icon: "🌞",
        },
        {
          title: "Maksymalna prywatność",
          description:
            "Zapewnij sobie prywatność i bezpieczeństwo dzięki naszym rozwiązaniom.",
          icon: "🔒",
        },
        {
          title: "Nowoczesny design",
          description:
            "Eleganckie wzornictwo pasujące do każdego stylu wnętrza.",
          icon: "✨",
        },
      ].map((feature, idx) => (
        <div
          key={idx}
          className="bg-white p-6 rounded-lg shadow-md text-center"
        >
          <div className="text-5xl mb-4">{feature.icon}</div>
          <h3 className="text-2xl font-bold mb-4">{feature.title}</h3>
          <p className="text-gray-700">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
);

const ProductShowcase = ({ products }) => (
  <div className="container mx-auto px-4 py-16">
    <h2 className="text-4xl font-bold text-center mb-12">Nasze produkty</h2>
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
            <h3 className="text-2xl font-bold mb-2">{product.name}</h3>
            <p className="text-gray-700 mb-4">{product.description}</p>
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
      src="https://via.placeholder.com/1920x600?text=Skontaktuj+si%C4%99+z+Nami"
      alt="Contact Us"
      className="w-full h-[600px] object-cover"
    />
    <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white py-8">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">
          Masz pytania? Skontaktuj się z nami!
        </h2>
        <p className="text-lg mb-6">
          Z chęcią doradzimy i pomożemy dobrać idealne rozwiązanie do Twojego
          domu.
        </p>
        <button className="bg-green-600 hover:bg-green-500 text-white px-8 py-3 rounded-lg transition">
          Skontaktuj się
        </button>
      </div>
    </div>
  </div>
);

const BlindsAndShadesPage = () => {
  const products = [
    {
      name: "Rolety Dzień i Noc",
      image: "https://via.placeholder.com/600x400?text=Rolety+Dzie%C5%84+i+Noc",
      description:
        "Dwufunkcyjne rolety, które zapewniają idealną kontrolę światła.",
    },
    {
      name: "Żaluzje Drewniane",
      image: "https://via.placeholder.com/600x400?text=%C5%BBaluzje+Drewniane",
      description: "Naturalne żaluzje z drewna, które dodadzą wnętrzu ciepła.",
    },
    {
      name: "Rolety Zewnętrzne",
      image: "https://via.placeholder.com/600x400?text=Rolety+Zewn%C4%99trzne",
      description: "Rolety do ochrony przed słońcem i hałasem z zewnątrz.",
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
        image="https://via.placeholder.com/800x400?text=Rolety+na+miar%C4%99"
        title="Rolety na miarę"
        description="Zaprojektowane z myślą o indywidualnych potrzebach i wymaganiach."
      />
      <FeaturesSection />
      <ProductShowcase products={products} />
      <ContactBanner />
    </motion.div>
  );
};

export default BlindsAndShadesPage;
