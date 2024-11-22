import React from "react";
import { motion } from "framer-motion";

const IndustrialDoorsPage = () => {
  const doorsData = [
    {
      type: "Bramy segmentowe",
      models: [
        {
          name: "MakroPro 2.0",
          description: "Zaawansowana brama segmentowa z izolacją termiczną.",
          image: "/images/makropro20.jpg",
        },
        {
          name: "MakroPro ALU 2.0",
          description: "Segmentowa brama z przeszkleniami, idealna do hal.",
          image: "/images/makroproalu20.jpg",
        },
        {
          name: "MakroPro 100 2.0",
          description: "Nowoczesna brama segmentowa dla większej wydajności.",
          image: "/images/makropro100-20.jpg",
        },
        {
          name: "MakroPro 100 ALU 2.0",
          description: "Segmentowa brama aluminiowa o lekkiej konstrukcji.",
          image: "/images/makropro100alu20.jpg",
        },
      ],
    },
    {
      type: "Bramy przesuwne",
      models: [
        {
          name: "MakroPro 2.0",
          description: "Solidna brama z odpornością na intensywne użytkowanie.",
          image: "/images/makropro2.jpg",
        },
        {
          name: "ALU 150",
          description: "Lekka, a jednocześnie trwała konstrukcja z aluminium.",
          image: "/images/alu150.jpg",
        },
      ],
    },
    {
      type: "Bramy szybkobieżne",
      models: [
        {
          name: "MakroTherm 20",
          description:
            "Wytrzymała brama przemysłowa, dostępna w wielu kolorach.",
          image: "/images/makrotherm20.jpg",
        },
      ],
    },
    {
      type: "Bramy roletowe",
      models: [
        {
          name: "Bramy roletowe",
          description:
            "Funkcjonalne bramy roletowe zapewniające oszczędność miejsca i łatwość użytkowania. Idealne dla magazynów i zakładów przemysłowych.",
          image: "/images/roletowe.jpg",
        },
      ],
    },
  ];

  return (
    <div className="bg-gray-100">
      {/* Sekcja główna */}
      <header className="bg-blue-700 text-white text-center py-8">
        <h1 className="text-3xl font-bold">Bramy Przemysłowe</h1>
        <p className="text-lg mt-2">
          Oferujemy szeroki wybór bram przemysłowych, dopasowanych do każdego
          obiektu.
        </p>
      </header>

      {/* Typy bram przemysłowych */}
      <div className="container mx-auto px-4 py-8 space-y-12">
        {doorsData.map((category, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold mb-4">{category.type}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.models.map((door, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white shadow-lg rounded-lg p-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={door.image}
                    alt={door.name}
                    className="w-full h-[200px] object-cover rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold">{door.name}</h3>
                  <p className="text-gray-700 mt-2">{door.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default IndustrialDoorsPage;
