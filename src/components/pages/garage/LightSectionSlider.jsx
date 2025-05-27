import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    title: "Panel HORIZON",
    description:
      "Smukłe i niezwykle eleganckie przeszklenie jest designerskim elementem wyglądu bramy, a dodatkowo doświetla wnętrze garażu. Ten dodatek posiada również wersję z podświetleniem LED. HORIZON jest wzorniczo dopasowany do przeszkleń w drzwiach WIŚNIOWSKI - możesz stworzyć więc idealny zestaw dla Twojego domu!",
    image:
      "https://www.wisniowski.pl/api/preview/ce/cee3f6b9-575f-4323-a98b-8584ab8c3e84.jpg?w=1920&q=75",
  },
  {
    title: "Panel VISUAL",
    description:
      "Efektowne przeszklenie panoramiczne, które całkowicie odmienia design bramy garażowej. Zyskujesz nie tylko praktyczne doświetlenie wnętrza, ale również nowoczesny element, który wpływa na cały front budynku. Zaprojektowany dla bram jednostanowiskowych do 3m.",
    image:
      "https://www.wisniowski.pl/api/preview/a6/a623c58b-378e-458b-a54b-3b22e6a75f5b.jpg?w=1920&q=75",
  },
  {
    title: "Panel aluminiowy",
    description:
      "Łączy w sobie unikalne wzornictwo i wszystkie zalety aluminium. Doskonale wpasuje się w elewację budynków, w którym zamontowano okna aluminiowe. Idealnie sprawdzi się w dużych, dwustanowiskowych bramach o szerokości nawet do 6 metrów.",
    image:
      "https://www.wisniowski.pl/api/preview/db/dbabbf67-ffc4-4e30-b8b7-1dee83e2066e.jpg?w=1920&q=75",
  },
  {
    title: "Okienka",
    description:
      "Nieduże przeszklenia w formie kwadratowych lub okrągłych okienek w różnych konfiguracjach i układach – również z ramkami ze stali nierdzewnej. Idealne, gdy lubisz klasyczne rozwiązania.",
    image:
      "https://www.wisniowski.pl/api/preview/ac/acc4b036-7927-46ad-a605-bb070ffab275.jpg?w=1920&q=75",
  },
];

const ITEMS_PER_PAGE = 4;

const LightSectionSlider = () => {
  const [page, setPage] = useState(0);

  const handleNext = () => {
    if ((page + 1) * ITEMS_PER_PAGE < items.length) {
      setPage(page + 1);
    }
  };

  const handlePrev = () => {
    if (page > 0) {
      setPage(page - 1);
    }
  };

  const visibleItems = items.slice(
    page * ITEMS_PER_PAGE,
    page * ITEMS_PER_PAGE + ITEMS_PER_PAGE
  );

  return (
    <section className="w-full bg-white py-20 px-4 md:px-24">
      <div className="max-w-screen-xl mx-auto">
        {/* Nagłówek + strzałki */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-light mb-4">
              Więcej światła - przeszklenia dla bram garażowych
            </h2>
            <p className="text-gray-600 max-w-2xl text-lg leading-relaxed">
              Przeszklenia w formie okienek i paneli to jedna z najciekawszych
              opcji w naszej ofercie. Nie tylko doświetlają wnętrze garażu, ale
              stanowią również designerski element bramy. Szukasz czegoś
              wyjątkowego? Poznaj przeszklenia w różnych kształtach, a nawet z
              oświetleniem LED.
            </p>
          </div>
          <div className="flex gap-2 self-start">
            <button
              onClick={handlePrev}
              className="p-2 border rounded-full disabled:opacity-30"
              disabled={page === 0}
            >
              ←
            </button>
            <button
              onClick={handleNext}
              className="p-2 border rounded-full disabled:opacity-30"
              disabled={(page + 1) * ITEMS_PER_PAGE >= items.length}
            >
              →
            </button>
          </div>
        </div>

        {/* Lista */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
          <AnimatePresence initial={false}>
            {visibleItems.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4 }}
                className="flex flex-col"
              >
                <div className="w-full aspect-[4/3] overflow-hidden rounded-sm mb-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-gray-700 text-justify leading-relaxed">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default LightSectionSlider;
