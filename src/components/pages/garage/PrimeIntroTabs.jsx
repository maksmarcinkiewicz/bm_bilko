import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const tabs = [
  {
    key: "innov0",
    label: "Panel INNOVO",
    image:
      "https://www.wisniowski.pl/api/preview/a6/a6356981-690b-4925-8987-5f0b7285d812.jpg?w=1920&q=75",
    content: `To serce bramy PRIME. Podczas gdy rynkowe standardy mówią o 40 [mm] grubości, panel INNOVO to aż 60 [mm]! 
      To nawet 45% lepsza izolacja cieplna panelu już na poziomie 0,33 W/m²K. Sprawujemy pełną kontrolę nad procesem jego powstawania 
      – od momentu zakupu stali z huty, aż po zapakowanie gotowych segmentów do transportu. Własna produkcja panelu zapewnia 
      stuprocentową powtarzalność, która przekłada się na najwyższą jakość.`,
  },
  {
    key: "oslony",
    label: "Osłony międzypanelowe",
    image:
      "https://www.wisniowski.pl/api/preview/10/10f8472b-22a3-4f02-b1af-847cf6ffa73c.jpg?w=1920&q=75",
    content: `Elastyczne osłony między segmentami panelu, które zabezpieczają przed przedostawaniem się zimnego powietrza i kurzu. 
      Dzięki nim uzyskujesz jednolitą barierę termiczną i większy komfort akustyczny.`,
  },
  {
    key: "uszczelnienia",
    label: "Innowacyjny system uszczelnień",
    image:
      "https://www.wisniowski.pl/api/preview/58/58504008-1808-4da1-903e-b0362477a221.jpg?w=1920&q=75",
    content: `Nowoczesny zestaw uszczelek: górna, dolna i boczne listwy szczotkowe oraz centralna uszczelka gwarantująca 
      doskonałą szczelność. Minimalizują straty ciepła i chronią przed wilgocią oraz insektami.`,
  },
];

const PrimeIntroTabs = () => {
  const [active, setActive] = useState(tabs[0].key);

  const current = tabs.find((t) => t.key === active);

  return (
    <div className="w-full bg-white">
      {/* Obraz */}
      <div className="w-full h-0 pb-[33%] relative overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.img
            key={current.key}
            src={current.image}
            alt={current.label}
            className="absolute top-0 left-0 w-full h-full object-cover"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
          />
        </AnimatePresence>
      </div>

      {/* Zakładki */}
      <div className="flex overflow-x-auto md:justify-center border-b">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActive(tab.key)}
            className={`whitespace-nowrap px-6 py-4 font-medium
              ${
                active === tab.key
                  ? "border-b-2 border-black text-black"
                  : "text-gray-500 hover:text-gray-800"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Treść */}
      <div className="px-4 md:px-24 py-8">
        <AnimatePresence mode="wait">
          <motion.p
            key={current.key}
            className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-base md:text-lg"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.4 }}
          >
            {current.content}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default PrimeIntroTabs;
