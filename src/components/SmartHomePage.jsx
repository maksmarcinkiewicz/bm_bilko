import { motion } from "framer-motion";

const SmartHomePage = () => {
  const products = [
    {
      title: "Brama garażowa",
      image: "https://sklep.wisniowski.pl/img/products/38/85/8_org.jpg",
      description: "Bramy segmentowe z napędem SPARK lub METRO Smart io.",
      icon: "🔧", // Ikona gotowa do wklejenia
    },
    {
      title: "Drzwi zewnętrzne",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwbXzyDe_PydOBOFVe8VJ8C2BTpK2oAwZ1g&s",
      description: "Drzwi z zamkiem Autotronic i integracją Smart io.",
      icon: "🚪",
    },
    {
      title: "Rolety okienne",
      image:
        "https://www.ikea.com/pl/pl/images/products/praktlysing-roleta-smart-bezprzewodowy-na-baterie-bialy__0981011_pe815230_s5.jpg?f=s",
      description: "Rolety sterowane centralą Rollixo Smart io.",
      icon: "🪟",
    },
    {
      title: "Drzwi tarasowe HST",
      image:
        "https://www.aluplast.com.pl/images/image-576x591/catalog/2482/aluplast-hst-mob_63af540d32ac97_17511315.jpg.jpg",
      description: "Eleganckie drzwi z pełną integracją z aplikacją.",
      icon: "🌿",
    },
  ];

  return (
    <motion.div
      className="bg-gray-100 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sekcja główna */}
      <section className="bg-white p-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-4xl font-extrabold mb-4">TaHoma Switch</h1>
            <p className="mb-4 text-lg">
              Zarządzaj swoim domem z dowolnego miejsca na świecie dzięki
              aplikacji TaHoma Switch. Kilka kroków wystarczy, aby zintegrować
              urządzenia, automatyzować zadania i zwiększyć bezpieczeństwo domu.
            </p>
            <ul className="list-disc pl-5 text-lg space-y-2">
              <li>Zdalne sterowanie urządzeniami z poziomu aplikacji</li>
              <li>Integracja z popularnymi asystentami głosowymi</li>
              <li>Bezpieczna, szyfrowana komunikacja</li>
            </ul>
          </div>
          <div>
            <img
              src="https://www.wisniowski.pl/api/preview/c6/c62f3295-7e77-45d1-a48c-fa03d590fcef.png?w=1080&q=95"
              alt="TaHoma Switch"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Sekcja SmartConnected */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-8">SmartConnected</h2>
          <p className="mb-8 text-lg">
            Poznaj korzyści inteligentnych rozwiązań WIŚNIOWSKI Connected:
            zarządzaj urządzeniami, kontroluj dostęp i korzystaj z wygody dzięki
            jednemu kliknięciu.
          </p>
          <div className="grid md:grid-cols-3 gap-8 px-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-lg shadow-lg"
            >
              <div className="text-6xl mb-4">📱</div>
              <h3 className="text-2xl font-bold">Zdalna kontrola</h3>
              <p>
                Sprawdzaj status i steruj urządzeniami z dowolnego miejsca na
                świecie.
              </p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-lg shadow-lg"
            >
              <div className="text-6xl mb-4">🎙️</div>
              <h3 className="text-2xl font-bold">Asystent głosowy</h3>
              <p>Komunikuj się z domem za pomocą prostych poleceń głosowych.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-8 bg-white rounded-lg shadow-lg"
            >
              <div className="text-6xl mb-4">🔒</div>
              <h3 className="text-2xl font-bold">Bezpieczeństwo</h3>
              <p>
                Twoje dane są szyfrowane i chronione na europejskich serwerach.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smart Produkty */}
      <section className="bg-white py-16">
        <div className="container mx-auto">
          <h2 className="text-3xl font-extrabold text-center mb-12">
            Nasze Smart Produkty
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-8 bg-gray-50 rounded-lg shadow-lg text-center"
              >
                <div className="text-6xl mb-4">{product.icon}</div>
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="text-gray-700 text-sm">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sekcja Wideo */}
      <section className="bg-[#1F1F1F] text-white py-16">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-extrabold mb-6">Idea SmartConnected</h2>
          <p className="mb-8 text-lg">
            Zobacz, jak nasze rozwiązania mogą uczynić Twój dom bardziej
            wygodnym i bezpiecznym.
          </p>
          <iframe
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
            style={{ aspectRatio: "16 / 9" }}
            src="https://www.youtube.com/embed/nOLVEo00upc"
            title="Wiśniowski SmartConnected Video"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      </section>
    </motion.div>
  );
};

export default SmartHomePage;
