import React from "react";
import { motion } from "framer-motion";

const SmartHomePage = () => {
  const products = [
    {
      title: "Brama garażowa",
      image: "/images/garage_door.jpg",
      description: "Bramy segmentowe z napędem SPARK lub METRO Smart io.",
    },
    {
      title: "Drzwi zewnętrzne",
      image: "/images/exterior_door.jpg",
      description: "Drzwi z zamkiem Autotronic i integracją Smart io.",
    },
    {
      title: "Rolety okienne",
      image: "/images/window_shutter.jpg",
      description: "Rolety sterowane centralą Rollixo Smart io.",
    },
    {
      title: "Drzwi tarasowe HST",
      image: "/images/hst_door.jpg",
      description: "Eleganckie drzwi z pełną integracją z aplikacją.",
    },
  ];

  return (
    <div className="bg-gray-100 text-gray-800">
      {/* Sekcja główna */}
      <section className="bg-white p-8">
        <div className="container mx-auto grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl font-bold mb-4">TaHoma Switch</h1>
            <p className="mb-4">
              Zarządzaj swoim domem z dowolnego miejsca na świecie dzięki
              aplikacji TaHoma Switch. Wystarczy kilka kroków, by zintegrować
              urządzenia, automatyzować zadania i podnieść bezpieczeństwo
              swojego domu.
            </p>
            <ul className="list-disc pl-5">
              <li>Zdalne sterowanie urządzeniami</li>
              <li>Integracja z asystentem głosowym</li>
              <li>Bezpieczeństwo i szyfrowana komunikacja</li>
            </ul>
          </div>
          <div>
            <img
              src="/images/tahoma_switch.jpg"
              alt="TaHoma Switch"
              className="w-full rounded-lg shadow-md"
            />
          </div>
        </div>
      </section>

      {/* Sekcja SmartConnected */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">SmartConnected</h2>
          <p className="mb-8">
            Odkryj korzyści inteligentnych rozwiązań WIŚNIOWSKI Connected –
            kontroluj swoje urządzenia, zarządzaj dostępami i ciesz się
            komfortem dzięki jednemu kliknięciu.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="font-bold text-lg">Zdalna kontrola</h3>
              <p>Sprawdzaj status i steruj urządzeniami z dowolnego miejsca.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="font-bold text-lg">Asystent głosowy</h3>
              <p>Steruj urządzeniami za pomocą poleceń głosowych.</p>
            </motion.div>
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="p-6 bg-white rounded-lg shadow-lg"
            >
              <h3 className="font-bold text-lg">Bezpieczeństwo</h3>
              <p>Dane są chronione na bezpiecznych serwerach w Europie.</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Smart Produkty */}
      <section className="bg-white py-12">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">
            Smart Produkty
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div
                key={index}
                className="p-6 bg-gray-50 rounded-lg shadow-md text-center"
              >
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-40 object-cover mb-4 rounded-lg"
                />
                <h3 className="font-semibold text-lg">{product.title}</h3>
                <p className="text-sm text-gray-700">{product.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sekcja wideo */}
      <section className="bg-gray-900 text-white py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-2xl font-bold mb-6">Idea SmartConnected</h2>
          <p className="mb-8">
            Zobacz, jak SmartConnected może zmienić Twój dom na bardziej
            komfortowy i bezpieczny.
          </p>
          <video
            src="/videos/smartconnected.mp4"
            controls
            className="w-full max-w-3xl mx-auto rounded-lg shadow-lg"
          ></video>
        </div>
      </section>
    </div>
  );
};

export default SmartHomePage;
