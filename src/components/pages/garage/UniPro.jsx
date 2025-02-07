import { motion } from "framer-motion";
import InspirationBottom from "../../InspirationBottom";
import { useState } from "react";
import SmartConnectedSection from "../../SmartConnectedSection";

const UniProBanner = () => {
  const bannerImage =
    "https://www.wisniowski.pl/api/preview/2f/2f767200-a2ff-4770-a4f4-7d11893c9c3e.jpg?w=1920&q=75";

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      <img
        src={bannerImage}
        alt="Brama segmentowa UniPro"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-700 bg-opacity-50 flex flex-col justify-end items-start text-white px-8 py-16 md:px-24">
        <h1 className="text-4xl font-semibold mb-2 ">
          Brama segmentowa UniPro
        </h1>
        <p
          className="text-console.log();
         max-w-lg mb-2"
        >
          Łączy uniwersalność z funkcjonalnością w standardzie.
        </p>
      </div>
    </div>
  );
};

const UniProIntroText = () => (
  <div className="px-4 py-8 flex justify-start items-start md:px-24 md:py-24">
    <p className="flex text-gray-700 text-left max-w-3xl md:text-2xl">
      Brama segmentowa UniPro wyróżnia się bogatymi funkcjonalnościami i
      niezwykłym designem, co czyni ją wersją premium w klasie standard. Szeroki
      wybór kolorów, struktur i przetłoczeń daje możliwość dopasowania bramy do
      własnego projektu domu. Doskonale zatrzymuje ciepło i nie pozwala
      wychłodzić garażu. Brama spełnia wymagania programu “Czyste Powietrze”.
    </p>
  </div>
);

const UniProDetails = () => {
  const details = [
    {
      title: "Specjalnie wyprofilowane panele",
      description: "",
      image:
        "https://www.wisniowski.pl/api/preview/58/58675742-07ad-4b61-9676-b3897040c1c8.jpg?w=640&q=75",
    },
    {
      title: "Zabezpieczenie w przypadku pęknięcia linki",
      description: "",
      image:
        "https://www.wisniowski.pl/api/preview/96/96587273-6a92-4691-91e2-a1c3422e8a7e.jpg?w=640&q=75",
    },
    {
      title: "Zintegrowane zabezpieczenie przed pęknięciem sprężyn",
      description: "",
      image:
        "https://www.wisniowski.pl/api/preview/13/13c7603b-a6a0-410f-aef5-8bb767666a08.jpg?w=640&q=75",
    },
    {
      title: "Uszczelnienie obwodowe dwulistkowe",
      description: "",
      image:
        "https://www.wisniowski.pl/api/preview/68/68506c03-eba6-4819-95af-0852fb4050a8.jpg?w=640&q=75",
    },
  ];

  return (
    <div className="md:px-24 py-12">
      <h2 className="text-5xl  mb-8 md:mb-24 px-4 md:px-0">Szczegóły</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {details.map((detail, idx) => (
          <div key={idx} className="flex flex-col overflow-hidden">
            <img
              src={detail.image}
              alt={detail.title}
              className="w-96 h-96 object-cover"
            />
            <div className="flex flex-col mt-4">
              <h3 className="text-xl font-semibold mb-4 px-4 md:px-0">
                {detail.title}
              </h3>
              <p className="text-gray-700 md:max-w-sm text-justify">
                {detail.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const UniProPatterns = () => {
  const patterns = [
    {
      title: "Brama z paneli bez przetłoczeń",
      image:
        "https://www.wisniowski.pl/api/preview/02/02bae63e-f34e-40d3-9bc5-7764a69b1759.png?w=640&q=75",
    },
    {
      title: "Brama z paneli z przetłoczeniami wysokimi",
      image:
        "https://www.wisniowski.pl/api/preview/74/7488120b-0f25-4677-a037-0f95b6c193e7.png?w=640&q=75",
    },
    {
      title: "Brama z paneli z przetłoczeniami niskimi",
      image:
        "https://www.wisniowski.pl/api/preview/07/07a10043-25ed-487d-94ba-cad8e24c3a4c.png?w=640&q=75",
    },
    {
      title: "Brama z paneli z przetłoczeniami kasetonowymi",
      image:
        "https://www.wisniowski.pl/api/preview/fe/fe629827-ec0d-4db1-8757-c467fec4c17f.png?w=640&q=75",
    },
  ];

  return (
    <div className="md:px-24 px-4 py-12">
      <h2 className="text-5xl  text-left mb-8">Wzory bram garażowych UniPro</h2>
      <p className="text-left text-xl text-gray-700 mb-8">
        Każdy detal ma znaczenie. Wybierz projekt dopasowany do Ciebie.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {patterns.map((pattern, idx) => (
          <div key={idx} className="text-left">
            <img
              src={pattern.image}
              alt={pattern.title}
              className="w-96  object-cover mb-4"
            />
            <h3 className="text-2xl px-2">{pattern.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

const UniProStructures = () => {
  const structures = [
    {
      title: "Woodgrain",
      description: "Fakturą przypomina naturalne drzewo",
      image:
        "https://www.wisniowski.pl/api/preview/a7/a75e9291-77fa-4af4-967d-32b9462723b6.jpg?w=640&q=75",
    },
    {
      title: "Smoothgrain",
      description: "Idealnie gładka powierzchnia oklein",
      image:
        "https://www.wisniowski.pl/api/preview/f8/f8d2f545-524a-4a3f-aa02-8b9299c71dac.jpg?w=640&q=75",
    },
    {
      title: "Sandgrain",
      description: "Powierzchnia z delikatną, drobnoziarnistą piaskową fakturą",
      image:
        "https://www.wisniowski.pl/api/preview/8d/8d11484e-efd7-49ab-8c74-1dfd9998c2c9.jpg?w=640&q=75",
    },
    {
      title: "Silkline",
      description: "Doskonale gładka malowana powierzchnia",
      image:
        "https://www.wisniowski.pl/api/preview/61/61ac3761-cc58-4318-a242-f3addde08b07.jpg?w=640&q=75",
    },
    {
      title: "Silkline-V",
      description: "Struktura oparta na prostych liniach i grze światła",
      image:
        "https://www.wisniowski.pl/api/preview/43/434db537-69e4-4ed9-a887-7c56e8d1e65c.jpg?w=640&q=75",
    },
  ];

  return (
    <div className="md:px-24 px-4 py-12">
      <h2 className="text-5xl  mb-8">Struktury</h2>
      <p className="text-xl text-gray-700 mb-8">
        Struktura bramy odbieramy dwoma zmysłami: dotykiem i wzrokiem. Dobierz
        ją tak, by zachwycała z każdej perspektywy.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
        {structures.map((structure, idx) => (
          <div key={idx} className="text-xl block">
            <img
              src={structure.image}
              alt={structure.title}
              className="w-96 object-cover mb-4"
            />
            <h3 className="text-xl font-semibold ">{structure.title}</h3>
            <p className="text-gray-700">{structure.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const SmartAutomationSlider = () => {
  const slides = [
    {
      title: "Nowoczesna automatyka",
      description:
        "Dzięki smartCONNECTED możesz komfortowo sterować bramą z dowolnego miejsca na świecie. Wybierz nowoczesny napęd METRO Smart io, MOTO io lub SPARK i ciesz się z pełnej kontroli nad swoim garażem.",
      image:
        "https://www.wisniowski.pl/api/preview/7a/7ae802ea-ade1-4981-a25c-f8c8a23539a2.jpg?w=1920&q=75",
    },
    {
      title: "Funkcjonalność i bezpieczeństwo",
      description:
        "Idealnie dobrany kształt paneli i zabezpieczenia chroniące przed odpadnięciem skrzydłą bramy gwarantują bezpieczeństwo i komfort użytkownia.",
      image:
        "https://www.wisniowski.pl/api/preview/6b/6b603e9c-eb37-4d19-9286-87a495a6e9fa.jpg?w=1920&q=75",
    },
    {
      title: "Uniwersalność",
      description:
        "UniPro to uniwersalność, którą możesz dostosować do swoich potrzeb i oczekiwań. Wybierz bramę do swojego wymarzonego domu.",
      image:
        "https://www.wisniowski.pl/api/preview/6d/6d3c9e03-a7a7-4e26-9ed3-ae768eee55d8.jpg?w=1920&q=75",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  return (
    <div className="md:px-24 px-4 py-12">
      <div className="relative flex flex-col items-center gap-8">
        <motion.img
          key={currentIndex}
          src={slides[currentIndex].image}
          alt={slides[currentIndex].title}
          className="w-full md:h-[500px] rounded-sm  object-cover"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.5 }}
        />
        <div className="">
          <h2 className="text-4xl mb-4">{slides[currentIndex].title}</h2>
          <p className="text-gray-700 mb-4 text-xl">
            {slides[currentIndex].description}
          </p>
          <div className="flex gap-2">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`w-16 h-4  rounded-sm transition-all ${
                  idx === currentIndex ? "bg-gray-600" : "bg-gray-300"
                }`}
              ></button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

const AdditionalFeatures = () => {
  const features = [
    {
      title: "Drzwi przejściowe w bramie",
      description:
        "Podnieś funkcjonalność garażu i zagwarantuj sobie komfort w codziennym użytkowaniu. Drzwi przejściowe to praktyczne rozwiązanie dla garażu bez bocznego wejścia. Dzięki temu nie musisz otwierać całej bramy, by dostać się do środka. Przekłada się to na oszczędności energii i czasu.",
      image:
        "https://www.wisniowski.pl/api/preview/78/789c82be-8660-4807-a133-0a3554454569.jpg?w=3840&q=95",
    },
    {
      title: "Pakiet antywłamaniowy RC2",
      description:
        "Brama garażowa w bryle budynku to tak naprawdę dodatkowe wejście do domu. Musi więc gwarantować wysokie bezpieczeństwo. Pakiet antywłamaniowy RC2 WIŚNIOWSKI posiada certyfikat renomowanego instytutu IFT Rosenheim i zapewnia codzienny spokój o wszystko, co ważne. To opatentowane rozwiązanie, które znajdziesz jedynie w produktach WIŚNIOWSKI!",
      image:
        "https://www.wisniowski.pl/api/preview/65/6508b3b5-d718-4ac5-91c1-8996b81835ea.jpg?w=3840&q=95",
    },
    {
      title: "Uchył górnego panelu",
      description:
        "Opcja dodatkowa, która umożliwia uchylenie górnego panelu bramy garażowej bez jej podnoszenia. Możesz przewietrzyć garaż i być pewnym, że jego wnętrze jest odpowiednio chronione. Dlaczego wentylacja garażu jest ważna? Usuniesz w ten sposób wilgoć, spaliny i nieprzyjemne zapachy.",
      image:
        "https://www.wisniowski.pl/api/preview/fa/fa11f053-17d1-4260-b338-26db3fe4ec87.jpg?w=3840&q=95",
    },
    {
      title: "Oświetlenie LED pod prowadnice",
      description:
        "Czasem oświetlenie garażu nie daje tyle światła, ile potrzebujemy. Zdarza się, że w istniejących garażach w ogóle nie zaplanowano oświetlenia lub zostało ono źle zaprojektowane (np. otwarta brama zasłania lampę). W takich sytuacjach sprawdzi się oświetlenie LED montowane pod prowadnice i łącznik prowadnic. Można dopasować je również do istniejących już bram garażowych.",
      image:
        "https://www.wisniowski.pl/api/preview/3b/3b4982d1-b1f4-4771-94bb-2a6959efb4af.jpg?w=3840&q=95",
    },
  ];

  return (
    <div className="md:px-24 px-4 py-12">
      <h2 className="text-4xl font-semibold mb-8">Dodatkowe funkcje</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {features.map((feature, idx) => (
          <div key={idx} className="flex flex-col ">
            <img
              src={feature.image}
              alt={feature.title}
              className="w-96 h-96 object-cover -lg mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2 ">{feature.title}</h3>
            <p className="text-gray-700  text-sm md:max-w-sm text-justify">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};
const UniPro = () => {
  return (
    <motion.div
      className="bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <UniProBanner />
      <UniProIntroText />
      <SmartAutomationSlider />

      <UniProDetails />
      <AdditionalFeatures />
      <UniProPatterns />
      <UniProStructures />
      <SmartConnectedSection />
      <InspirationBottom />
    </motion.div>
  );
};

export default UniPro;
