import { motion } from "framer-motion";
import InspirationBottom from "../../InspirationBottom";
import { useState } from "react";
import SmartConnectedSection from "../../SmartConnectedSection";

const UniThermBanner = () => {
  const bannerImage =
    "https://www.bartal.pl/wp-content/webp-express/webp-images/uploads/2024/01/Wisniowski-brama-segmentowa-Unitherm-Lublin.jpg.webp";

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      <img
        src={bannerImage}
        alt="Brama segmentowa UniTherm"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-700 bg-opacity-50 flex flex-col justify-end items-start text-white px-8 py-16 md:px-24">
        <h1 className="text-4xl font-semibold mb-2 ">
          Brama segmentowa UniTherm z panelem 60mm
        </h1>
        <p
          className="text-console.log();
         max-w-lg mb-2"
        >
          Łączy wieloletnią trwałość i niezawodność z energooszczędnością.
        </p>
      </div>
    </div>
  );
};

const Panel40mmSection = () => {
  return (
    <section className="w-full bg-white py-20 px-6 md:px-24">
      <div className="max-w-screen-xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
        {/* Obraz po lewej */}
        <div className="lg:w-1/2 w-full relative max-w-[600px]">
          <img
            src="https://www.wisniowski.pl/api/preview/1f/1ffe08a1-d887-4a91-9e27-0f52093112af.jpg?w=1080&q=95"
            alt="Przekrój panelu"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Tekst po prawej */}
        <div className="lg:w-1/2 w-full space-y-6 text-gray-800 text-base leading-relaxed">
          <h2 className="text-3xl font-normal">Panel INNOVO 60mm</h2>

          <p>
            Płaszcz bram MakroTherm zbudowany jest z paneli INNOVO o grubości 60
            mm i współczynniku przenikania ciepła U=0,33 [W/m2xK]. Dzięki
            zastosowaniu termoizolowanych paneli oraz systemów uszczelnień,
            wyeliminowaliśmy straty ciepła w najbardziej newralgicznych
            miejscach.
          </p>

          <ul className="list-disc list-inside space-y-2">
            <li>Ukryte, niewidoczne zawiasy..</li>
            <li>Elastyczna osłona międzypanelowa.</li>
            <li>Pięć warstw blachy w miejscu mocowania zawiasów.</li>
            <li>Uszczelnienie międzypanelowe.</li>
            <li>60 mm piany poliuretanowaej</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

const SmartAutomationSlider = () => {
  const slides = [
    {
      title: "Najwyższa termoizolacja",
      description:
        "W pełni wykorzystuje właściwości konstrukcyjne panelu INNOVO 60 mm, tym samym ograniczając straty ciepła. Na uwagę zasługuje również dopracowany system uszczelnień: międzypanelowych, bocznych, górnych i dolnych. Jest doskonała do budynków energooszczędnych. Przy jej zakupie możesz uzyskać dofinansowanie z programu “Czyste Powietrze”.",
      image:
        "https://www.wisniowski.pl/api/preview/9f/9fe4cd31-550c-44ea-b609-2a9be8c94cfb.jpg?w=1920&q=75",
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

const UniThermIntroText = () => (
  <div className="px-4 py-8 flex justify-start items-start md:px-24 md:py-24">
    <p className="flex text-gray-700 text-left max-w-3xl md:text-2xl">
      UniTherm jest najchętniej wybieraną bramą garażową dla budownictwa
      energooszczędnego, a nawet pasywnego. Wyróżnia ją wysoka termoizolacja –
      efekt zastosowania panelu INNOVO o grubości 60 mm. To nawet 20 mm więcej,
      niż w rynkowych standardach!
    </p>
  </div>
);

const UniThermDetails = () => {
  const details = [
    {
      title: "Zabezpieczenia przeciw skutkom pęknięcia linek nośnych",
      description: "",
      image:
        "https://www.wisniowski.pl/api/preview/1e/1e5e5928-ca08-4747-b044-dd4a5ceaaf1b.jpg?w=640&q=75",
    },
    {
      title: "Zabezpieczenie przeciążeniowe w bramie automatycznej",
      description: "",
      image:
        "https://www.wisniowski.pl/api/preview/85/854d4cd4-f1ae-4659-aa93-b5d4443f91cf.jpg?w=640&q=75",
    },
    {
      title: "Antywłamaniowość",
      description: "",
      image:
        "https://www.wisniowski.pl/api/preview/47/47ee020e-8eae-4e72-8e77-122e43c2de64.jpg?w=640&q=75",
    },
    {
      title: "Bezpieczna automatyka",
      description: "",
      image:
        "https://www.wisniowski.pl/api/preview/eb/eb63d8bd-65ea-487d-aad8-8b4a84b3bb04.jpg?w=640&q=75",
    },
    {
      title: "Tandemowe łożyskowane rolki",
      description: "",
      image:
        "https://www.wisniowski.pl/api/preview/50/50d28335-e244-4fd6-97cb-1172f5e37ae2.jpg?w=640&q=75",
    },
    {
      title: "Bezpieczny kształt panelu",
      description: "",
      image:
        "https://www.wisniowski.pl/api/preview/50/50d28335-e244-4fd6-97cb-1172f5e37ae2.jpg?w=640&q=75",
    },
    {
      title: "Fotokomórki",
      description: "opcja dodatkowa",
      image:
        "https://www.wisniowski.pl/api/preview/a8/a8b3fc77-58ec-4d94-8a77-4fc6e5700e54.jpg?w=640&q=75",
    },
    {
      title: "Ciche ukryte zawiasy",
      description: "",
      image:
        "https://www.wisniowski.pl/api/preview/8d/8d1fa7a6-bf69-46e4-be45-0ae84d7ab1d1.jpg?w=640&q=75",
    },
    {
      title: "Elastyczne wewnętrzne osłony międzypanelowe",
      description: "",
      image:
        "https://www.wisniowski.pl/api/preview/83/8332ae82-647f-4d66-a481-19d11dc5e2ab.jpg?w=640&q=75",
    },
    {
      title: "Stoper tworzywowy",
      description:
        "Poprawia szczelność bramy oraz pełni funkcję ogranicznika zatrzymującego skrzydło",
      image:
        "https://www.wisniowski.pl/api/preview/53/534f30b2-4499-4200-9809-b1242175b2d5.jpg?w=640&q=75",
    },
  ];

  return (
    <div className="md:px-24 py-12">
      <h2 className="text-5xl mb-8 md:mb-24 px-4 md:px-0">
        Bezpieczeństwo i funkcjonalność
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-0">
        {details.map((detail, idx) => (
          <div key={idx} className="flex flex-col overflow-hidden">
            <img
              src={detail.image}
              alt={detail.title}
              className="w-72 object-cover"
            />
            <div className="pt-4 flex flex-col md:max-w-xs">
              <h3 className="text-xl mb-4 px-4">{detail.title}</h3>
              <p className="text-gray-700 px-4">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const UniThermPatterns = () => {
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
  ];

  return (
    <div className="md:px-24 px-4 py-12">
      <h2 className="text-5xl  text-left mb-8">
        Wzory bram garażowych UniTherm
      </h2>
      <p className="text-left text-xl text-gray-700 mb-8">
        Każdy detal ma znaczenie. Wybierz projekt dopasowany do Ciebie.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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

const UniThermStructures = () => {
  const structures = [
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
  ];

  return (
    <div className="md:px-24 px-4 py-12">
      <h2 className="text-5xl  mb-8">Struktury</h2>
      <p className="text-xl text-gray-700 mb-8">
        Struktura bramy odbieramy dwoma zmysłami: dotykiem i wzrokiem. Dobierz
        ją tak, by zachwycała z każdej perspektywy.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
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

const UniThermDetailSection = () => {
  const details = [
    {
      title: "Najwyższa termoizolacja",
      description:
        "W pełni wykorzystuje właściwości konstrukcyjne panelu INNOVO 60 mm, tym samym ograniczając straty ciepła. Na uwagę zasługuje również dopracowany system uszczelnień: międzypanelowych, bocznych, górnych i dolnych. Jest doskonała do budynków energooszczędnych. Przy jej zakupie możesz uzyskać dofinansowanie z programu “Czyste Powietrze”. ",
      image:
        "https://www.wisniowski.pl/api/preview/9f/9fe4cd31-550c-44ea-b609-2a9be8c94cfb.jpg?w=1920&q=75",
    },
    {
      title: "Trwałość na lata",
      description:
        "Własna produkcja panelu to pełna kontrola, już od momentu przyjazdu stali z huty, aż po zapakowanie gotowego produktu. Autorskie rozwiązania konstrukcyjne i bezkompromisowa jakość materiałów zapewnia sprawne działanie bramy. Gwarancja 25 000 cykli otwarcie-zamknięcie to nawet 17 lat bezpiecznego użytkowania.",
      image:
        "https://www.wisniowski.pl/api/preview/cd/cd663280-e14b-4276-825d-c83e11796797.jpg?w=1920&q=75",
    },
    {
      title: "Nowoczesne rozwiązanie dla garażu",
      description:
        "UniTherm to szereg nowoczesnych rozwiązań, które podnoszą komfort codziennego korzystania z garażu. Zadbaj o swój dom i dopilnuj, by każda jego część była odpowiednio chroniona przed chłodem, wiatrem, wilgocią lub kradzieżą.",
      image:
        "https://www.wisniowski.pl/api/preview/d7/d71345f1-5c33-4e98-a0f0-bb61620182c3.jpg?w=1920&q=75",
    },
  ];

  return (
    <div className="md:px-24 px-4 py-12">
      <h2 className="text-5xl mb-8">Perfekcja w każdym detalu</h2>
      <p className=" text-gray-700 mb-8 text-xl"></p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {details.map((detail, idx) => (
          <div key={idx} className="">
            <img
              src={detail.image}
              alt={detail.title}
              className="w-full h-[250px] object-cover mb-4"
            />
            <h3 className="text-xl font-semibold mb-4">{detail.title}</h3>
            <p className="text-gray-700 text-justify">{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const UniTherm = () => {
  return (
    <motion.div
      className="bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <UniThermBanner />
      <UniThermIntroText />
      <Panel40mmSection />
      <UniThermDetails />
      <UniThermDetailSection />
      <UniThermPatterns />
      <UniThermStructures />
      <SmartConnectedSection />
      <InspirationBottom />
    </motion.div>
  );
};

export default UniTherm;
