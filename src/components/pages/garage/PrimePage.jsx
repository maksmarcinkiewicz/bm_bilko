import { motion } from "framer-motion";
import InspirationBottom from "../../InspirationBottom";
import PrimeIntroTabs from "./PrimeIntroTabs";
import SmartConnectedSection from "../../SmartConnectedSection";
import PrimeBlackEditionVideo from "./PrimeBlackEditionVideo";
const PrimeBanner = () => {
  const bannerImage =
    "https://www.wisniowski.pl/api/preview/e9/e95654a4-4773-4a2d-bf7a-ccfd97674751.jpg?w=3840&q=75";

  return (
    <div className="relative w-full h-[650px] overflow-hidden">
      <img
        src={bannerImage}
        alt="Brama segmentowa PRIME"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-gray-700 bg-opacity-50 flex flex-col justify-end items-start text-white px-8 py-16 md:px-24">
        <h1 className="text-4xl font-semibold mb-2 ">
          Brama segmentowa PRIME z panelem 60mm i konstrukcją malowaną proszkowo
        </h1>
        <p
          className="text-console.log();
         max-w-lg mb-2"
        >
          Łączy energooszczędność i dopracowane detale z Twoim bezpieczeństwem.
        </p>
      </div>
    </div>
  );
};

const PrimeIntroText = () => (
  <div className="px-4 py-8 flex justify-start items-start md:px-24 md:py-24">
    <p className="flex text-gray-700 text-left max-w-3xl md:text-2xl">
      Brama segmentowa PRIME to ekskluzywne rozwiązanie dla Twojego garażu.
      Szczyt możliwości technologicznych i wzorniczych. Ta designerska brama
      została zaprojektowana z myślą o realizacji najodważniejszych pomysłów
      architektonicznych. Dzięki zaawansowanym rozwiązaniom gwarantuje doskonałą
      termoizolację, pełne bezpieczeństwo i funkcjonalność. Każdy jej element
      został dopracowany do perfekcji.
    </p>
  </div>
);

const PrimeDetails = () => {
  const details = [
    {
      title: "Solidna konstrukcja malowana proszkowo",
      description:
        "Konstrukcja bramy wykonana jest z wysokiej jakości ocynkowanej stali, dodatkowo malowanej proszkowo, co zapewnia trwałość na lata. i niepowtarzalny design.",
      image:
        "https://www.wisniowski.pl/api/preview/7b/7bc505a9-a41a-4687-b4bd-e02fdb88eab9.jpg?w=640&q=75",
    },
    {
      title: "Sprawdzone zabezpieczenia",
      description:
        "W podstawowym wyposażeniu dostajesz zabezpieczenia elementów mechanicznych: wału, sprężyn skrętnych, prowadnic i rolek, które dbają o to, byś bezpiecznie korzystał z bramy. A to jeszcze nie wszystko! W standardzie otrzymujesz również czujniki nad osłonami oraz fotokomórki.",
      image:
        "https://www.wisniowski.pl/api/preview/18/18842b78-0cc1-47b5-8e89-83ddbce981c3.jpg?w=640&q=75",
    },
    {
      title: "Antywłamaniowość",
      description:
        "Pakiet antywłamaniowy z certyfikatem w klasie RC2 chroni Ciebie i Twoją rodzinę. Skuteczny system zabezpieczeń utrudnia wejście do garażu osobom niepowołanym.",
      image:
        "https://www.wisniowski.pl/api/preview/dc/dc427777-1df6-4485-9720-d6ccb36e2cfb.jpg?w=640&q=75",
    },
    {
      title: "Malowane elementy konstrukcji",
      description:
        "Wewnętrzna strona płaszcza i systemy – prowadzenia, zabezpieczeń oraz podwieszenia – są pomalowane proszkowo w kolorze RAL 9002 lub RAL 9005 (wersja Black Edition). Ta unikalna cecha sprawia, że możesz cieszyć się nowoczesnym designem i estetycznym wykończeniem również w garażu.",
      image:
        "https://www.wisniowski.pl/api/preview/86/866f6d94-285c-45fa-a666-c3cb709b4277.jpg?w=1200&q=95",
    },
    {
      title: "Bezpieczna automatyka",
      description:
        "Bramę z napędem certyfikowanym dobierając siłę automatyki. Nowoczesny napęd oparty o współpracę ze światową marką SOMFY, wyposażony w amperometrycznego wykrywacza przeszkód. Najwyższe standardy i bezpieczeństwo automatycznej bramy ze znakiem CE.",
      image:
        "https://www.wisniowski.pl/api/preview/95/95e2199b-0a31-4ed7-ac03-633f7a454927.jpg?w=640&q=75",
    },
    {
      title: "Steruj z aplikacji ",
      description:
        "Ciesz się wygodą i nowoczesnością inteligentnego domu bez potrzeby instalowania dodatkowych urządzeń sterujących. Dzięki wbudowanemu modułowi Wi-Fi, bramą garażową z napędem SPARK można sterować bezpośrednio za pomocą aplikacji WIŚNIOWSKI Connected na smartfonie.",
      image:
        "https://www.wisniowski.pl/api/preview/95/95e2199b-0a31-4ed7-ac03-633f7a454927.jpg?w=640&q=75",
    },
  ];

  return (
    <div className="md:px-24 py-12 px-4">
      <h2 className="text-5xl  mb-8 md:mb-24">
        Bezpieczeństwo i desing w klasie premium
      </h2>
      <p>
        Brama PRIME nie ma sobie równych, jeśli chodzi o budowę i
        funkcjonalność, ale przede wszystkim o Twoje bezpieczeństwo. Rozbudowany
        system zabezpieczeń i pakiet antywłamaniowy dają pewność, której
        potrzebujesz. PRIME to brama dla wyjątkowych domów.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {details.map((detail, idx) => (
          <div key={idx} className="flex flex-col md:flex-row overflow-hidden">
            <img
              src={detail.image}
              alt={detail.title}
              className="w-72 object-cover"
            />
            <div className="p-6 flex flex-col">
              <h3 className="text-xl font-bold mb-4">{detail.title}</h3>
              <p className="text-gray-700">{detail.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const PrimePatterns = () => {
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
      <h2 className="text-5xl  text-left mb-8">Wzory bram garażowych PRIME</h2>
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

const PrimeStructures = () => {
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

const PrimeDetailSection = () => {
  const details = [
    {
      title: "Idealnie dopasowana",
      description:
        "PRIME to synonim perfekcji i idealnego dopasowania. Masz pewność, że wybierasz nie tylko funkcjonalną bramę, ale także elegancki element domu, podkreślający Twój styl i przywiązanie do estetyki.",
      image:
        "https://www.wisniowski.pl/api/preview/78/78d60887-484d-4178-aab1-adaaae13b4c9.jpg?w=1200&q=95",
    },
    {
      title: "Precyzyjne wykończenie",
      description:
        "Szczegóły dopełniają projekt i stanowią o jego elegancji. Wykończenia osłaniające ruchome elementy czy osłony międzypanelowe w kolorze skrzydła bramy – każdy detal to owoc wytyczonej pracy projektantów. Nie ma mowy o niedociągnięciach czy półśrodkach.",
      image:
        "https://www.wisniowski.pl/api/preview/e1/e1702df0-97b4-4b9a-b374-3cb8493fed95.jpg?w=1200&q=95",
    },
    {
      title: "Malowane elementy konstrukcji",
      description:
        "Wewnętrzna strona płaszcza i systemy – prowadzenia, zabezpieczeń oraz podwieszenia – są pomalowane proszkowo w kolorze RAL 9002 lub RAL 9005 (wersja Black Edition). Ta unikalna cecha sprawia, że możesz cieszyć się nowoczesnym designem i estetycznym wykończeniem również w garażu.",
      image:
        "https://www.wisniowski.pl/api/preview/86/866f6d94-285c-45fa-a666-c3cb709b4277.jpg?w=1200&q=95",
    },
  ];

  return (
    <div className="md:px-24 px-4 py-12">
      <h2 className="text-5xl font-semibold  mb-8">
        Perfekcja w każdym detalu
      </h2>
      <p className=" text-gray-700 mb-8 text-xl">
        Piękne wnętrze i doskonały front. Poznaj detale, które składają się na
        perfekcyjny kształt bramy PRIME.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {details.map((detail, idx) => (
          <div key={idx} className="">
            <img
              src={detail.image}
              alt={detail.title}
              className="w-full h-[200px] object-cover mb-4"
            />
            <h3 className="text-xl font-bold">{detail.title}</h3>
            <p className="text-gray-700 text-justify">{detail.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

const PrimePage = () => {
  return (
    <motion.div
      className="bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <PrimeBanner />
      <PrimeIntroText />
      <PrimeIntroTabs />
      <PrimeDetails />
      <PrimeBlackEditionVideo />
      <PrimePatterns />
      <PrimeStructures />
      <SmartConnectedSection />
      <InspirationBottom />
    </motion.div>
  );
};

export default PrimePage;
