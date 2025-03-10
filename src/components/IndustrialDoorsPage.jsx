import React, { useState } from "react";
import Tabs from "./utils/Tabs";
import { motion } from "framer-motion";
import InspirationBottom from "./InspirationBottom";
const IndustrialDoorsPage = () => {
  const [activeTab, setActiveTab] = useState("MakroPro");

  const renderTabContent = () => {
    switch (activeTab) {
      case "MakroPro":
        return <MakroProTab />;
      case "MakroTherm":
        return <MakroThermTab />;
      case "MakroPro100":
        return <MakroPro100Tab />;
      case "Automation":
        return <AutomationTab />;
      default:
        return null;
    }
  };

  let links = {
    MakroPro: {
      first:
        "https://www.wisniowski.pl/api/preview/be/be5e4b96-9e23-46e9-80e9-0c5a57ac25f7.jpg?w=1920&q=100",
      second:
        "https://www.wisniowski.pl/api/preview/aa/aa4e8c80-69d0-4530-8029-eba5746bbe83.jpg?w=1920&q=100",
      third:
        "https://www.wisniowski.pl/api/preview/c0/c04dfa88-c3e3-4754-9a98-84450f21f723.jpg?w=1920&q=100",
    },
    MakroTherm: {
      first:
        "https://www.wisniowski.pl/api/preview/be/be5e4b96-9e23-46e9-80e9-0c5a57ac25f7.jpg?w=1920&q=100",
      second:
        "https://www.wisniowski.pl/api/preview/eb/ebb447ff-a950-4583-bb64-5b3b43db6079.jpg?w=1920&q=100",
      third:
        "https://www.wisniowski.pl/api/preview/7d/7dfea428-860b-470f-ba36-11e53801d408.jpg?w=1920&q=100",
    },
    MakroPro100: {
      first:
        "https://www.wisniowski.pl/api/preview/01/012f7112-f762-4d8c-9436-55e2b9173b09.jpg?w=1920&q=100",
      second:
        "https://www.wisniowski.pl/api/preview/c6/c6b450d6-b399-4096-a82e-b01316a2ef07.jpg?w=1920&q=100",
      third:
        "https://www.wisniowski.pl/api/preview/e4/e4d6e0bc-1474-4dea-9390-ee8c99ef50ff.jpg?w=1920&q=100",
    },
  };
  console.log(activeTab);
  return (
    <div className="relative w-full h-auto overflow-hidden">
      <div className="w-full flex mt-48 md:mt-36">
        <motion.img
          src={links[activeTab]?.first || ""}
          alt="Bramy przemysłowe"
          className="w-1/3 h-auto object-cover"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        />
        <motion.img
          src={links[activeTab]?.second || ""}
          alt="Segmentowe bramy"
          className="w-1/3 h-auto object-cover"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9 }}
        />
        <motion.img
          src={links[activeTab]?.third || ""}
          alt="Panel INNOVO 60mm"
          className="w-1/3 h-auto object-cover"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        />
      </div>

      {/* 🔹 Nawigacja zakładek */}
      <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* 🔹 Treść wybranej zakładki */}
      <div className=" p-6">{renderTabContent()}</div>

      <InspirationBottom />
    </div>
  );
};

export default IndustrialDoorsPage;

// MakroThermTab.js
export const MakroThermTab = () => (
  <>
    <InnovoPanelSection />
    <ContentSection />
    <ContentSectionReversed />
  </>
);

// MakroProTab.js
export const MakroProTab = () => (
  <>
    <MakroProSection />
    <MakroProAluSection />
    <MakroProAluIsoSection />
    <MakroPro2ElhSection />
  </>
);

// MakroPro100Tab.js
export const MakroPro100Tab = () => (
  <>
    <MakroPro100Section />
    <MakroPro100AluSection />
  </>
);

// AutomationTab.js
export const AutomationTab = () => (
  <>
    <AutomationIntroSection />
    <AutomationGFASection />
    <AutomationSWSection />
    <AutomationControlUnitSection />
    <AutomationControlFeaturesSection />
    <AutomationSommerSection />
  </>
);

const AutomationIntroSection = () => {
  return (
    <div className="w-full bg-white py-16">
      <div className="container mx-auto px-8 md:px-32 lg:px-48 text-center">
        <h1 className="text-4xl font-bold mb-6">
          Automatyka dla bram przemysłowych segmentowych
        </h1>
        <p className="text-lg leading-relaxed">
          Automatyka firmy GFA Elektromaten sprawdzi się w każdych warunkach. Od
          przestrzeni magazynowych i hal fabrycznych przez pomieszczenia o
          podwyższonej wilgotności, przestrzenie usługowe, aż po obiekty
          rolnicze, również te do hodowli zwierząt. Siłowniki GFA to nowoczesne
          urządzenia, które zapewniają wysoką kulturę pracy, a seria FU sprawdzi
          się w miejscach, gdzie wymagana jest duża intensywność użytkowania.
        </p>
      </div>
    </div>
  );
};
const AutomationGFASection = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-8 md:px-24 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://www.wisniowski.pl/api/preview/dc/dce713fe-d90d-4ddb-a77e-fd509c09f39f.png?w=1080&q=95" // Replace with actual image URL
            alt="Napędy GfA SE"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Automatyka GfA Elektromaten SE
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Napędy GfA serii SE to rozwiązania zaprojektowane do automatyzacji
            bram przemysłowych segmentowych z kompensacją masy. Montaż siłownika
            odbywa się bezpośrednio na wale bramy.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Cechy siłowników SE</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>kompaktowa budowa,</li>
            <li>jednofazowy lub trójfazowy silnik elektryczny,</li>
            <li>elektroniczne wyłączniki krańcowe DES,</li>
            <li>przekładnia awaryjnego otwierania z łańcuchem,</li>
            <li>
              zintegrowany przemiennik częstotliwości – dostępny z siłownikiem
              FU.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
const AutomationSWSection = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-8 md:px-24 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Automatyka GfA Elektromaten SW
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Napędy GfA serii SW to specjalne rozwiązania zaprojektowane do
            automatyzacji bram przemysłowych segmentowych z kompensacją masy.
            Montaż siłownika odbywa się szynie wyposażonej w łańcuch, a
            transmisja ruchu odbywa się za pomocą wózka jezdnego.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Cechy siłowników SW</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>kompaktowa budowa,</li>
            <li>jednofazowy silnik elektryczny,</li>
            <li>przekładnia napędowa zespolona z silnikiem,</li>
            <li>zintegrowany przemiennik częstotliwości,</li>
            <li>szyna aluminiowa z łańcuchem,</li>
            <li>wózek jezdny z szybkim rozblokowaniem,</li>
            <li>elektroniczne wyłączniki krańcowe DES.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://www.wisniowski.pl/api/preview/49/492af85a-c2a4-460e-9792-6b80b97e0be8.png?w=1080&q=95" // Replace with actual image URL
            alt="Napędy GfA SW"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const AutomationControlUnitSection = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-8 md:px-24 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://www.wisniowski.pl/api/preview/31/318e8121-65bc-4e4d-95f0-2724b2bf9f89.png?w=1080&q=95" // Replace with actual image URL
            alt="Centrale sterujące GfA Elektromaten"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Centrale sterujące GfA Elektromaten
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Centrale serii TS to urządzenia pozwalające na konfigurowanie
            automatyki - od najprostszej wersji Totmann, poprzez wersję
            Automatik aż do zestawu, który może być podłączony do praktycznie
            każdego systemu inteligentnego budynku.
          </p>
          <h2 className="text-2xl font-semibold mb-4">
            Do centrali TS można podłączyć dowolne urządzenia:
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>
              zabezpieczające (krawędziowa listwa bezpieczeństwa, fotokomórki,
              kurtyna bezpieczeństwa, czujnik otwarcia drzwi przejściowych,
              czujnik luźnej linki),
            </li>
            <li>sterujące (kasety sterujące, przyciski naciśnieniowe),</li>
            <li>
              kontroli dostępu (zamki szyfrowe, czytniki zbliżeniowe, odbiorniki
              radiowe, detektory pętli indukcyjnych),
            </li>
            <li>
              sygnalizacyjne (lampy sygnalizacyjne LED, sygnalizator LED
              czerwony-zielony).
            </li>
          </ul>
          <p className="text-lg leading-relaxed mt-6">
            Centrala sterująca TS981 spełnia najwyższe wymagania, umożliwiając
            sterowanie ruchem oraz podłączenie jej do systemu oddymiania i
            napowietrzania budynku (praca w scenariuszu).
          </p>
          <p className="text-lg leading-relaxed mt-4">
            Do central sterujących serii TS można podłączyć również Ri-Co lub
            Ri-Co PRO i sterować bramą z aplikacji zainstalowanej w telefonie.
            Urządzenie Ri-Co PRO poza sterowaniem, informuje o położeniu
            (statusie) bramy.
          </p>
        </div>
      </div>
    </div>
  );
};

const AutomationControlFeaturesSection = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-8 md:px-24 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-bold mb-6">
            Centrale sterujące GfA Elektromaten
          </h1>
          <p className="text-lg leading-relaxed mb-6">
            Komfort korzystania z centrali GfA odczuwalny jest już od etapu
            montażu: prostego podłączenia i intuicyjnego programowania.
          </p>
          <h2 className="text-2xl font-semibold mb-4">
            Dane techniczne oraz funkcje
          </h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>obudowa sterowania wykonana z trwałych materiałów,</li>
            <li>wysoka klasa szczelności IP54 lub IP65,</li>
            <li>
              zasilanie 1 x 230 V lub 3 x 400 V, w zależności od wybranego
              siłownika,
            </li>
            <li>obsługa siłowników z wyłącznikami krańcowymi DES lub NES,</li>
            <li>zintegrowane przyciski sterownicze WSTOP-ZAM,</li>
            <li>wbudowany wyświetlacz,</li>
            <li>zmiana kierunków obrotów za pomocą klawiatury,</li>
            <li>niezależne programowalne wyjścia,</li>
            <li>płynna regulacja prędkości z siłownikami serii FU,</li>
            <li>dwa tryby pracy: Totmann lub Automatik,</li>
            <li>płynna regulacja parametrów,</li>
            <li>obsługa krawędziowych listew bezpieczeństwa,</li>
            <li>
              możliwość podłączenia urządzeń sterujących: przycisk
              naciśnieniowy, odbiornik radiowy, klawiatura kodowa,
            </li>
            <li>
              możliwość podłączenia urządzeń zabezpieczających: fotokomórki,
              kurtyna bezpieczeństwa, przycisk STOP,
            </li>
            <li>
              możliwość sterowania ruchem wjazdu z pomocą sygnalizatorów (opcja
              dostępna z centralą TS981),
            </li>
            <li>
              możliwość podłączenia do systemu SAP, oddymiania i napowietrzania
              (opcja dostępna z centralą TS981),
            </li>
            <li>licznik cykli roboczych i cykli serwisowych.</li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://www.wisniowski.pl/api/preview/07/07949581-b755-47e7-b82d-320c99eb2303.png?w=1080&q=95" // Replace with actual image URL
            alt="Centrale sterujące GfA Elektromaten"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
const AutomationSommerSection = () => {
  return (
    <div className="w-full bg-gray-100 py-16">
      <div className="container mx-auto px-8 md:px-24 lg:px-32 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <h1 className="text-4xl font-bold mb-6">Automatyka SOMMER</h1>
          <p className="text-lg leading-relaxed mb-6">
            Base+ oraz tiga+ przeznaczone są dla bram segmentowych przemysłowych
            z kompensacją masy. Doskonale sprawdzają się w garażach zbiorczych.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Automaty w zestawie posiadają wózek jezdny oraz szynę wyposażoną w
            stały łańcuch. Sterowanie znajduje się na ścianie (tiga+) lub na
            końcu szyny (base+). W tym drugim przypadku nie są wymagane
            przestrzenie boczne do montażu.
          </p>
          <h2 className="text-2xl font-semibold mb-4">Właściwości napędów</h2>
          <ul className="list-disc pl-6 space-y-2 text-lg">
            <li>kompaktowa budowa i wysoka kultura pracy,</li>
            <li>wolny START – STOP,</li>
            <li>silnik 24 [V] zintegrowany z wózkiem jezdnym,</li>
            <li>
              amperometryczne wykrywanie przeszkód – zabezpieczenie
              przeciążeniowe w sytuacji zetknięcia dolnej krawędzi skrzydła z
              przeszkodą, zatrzymuje skrzydło bramy, a następnie cofa je do
              góry,
            </li>
            <li>wbudowana LED-owa lampa sygnalizacyjna,</li>
            <li>
              fotokomórki – system zapewnia optymalną ochronę w przypadku gdy
              pomiędzy fotokomórkami pojawi się przeszkoda,
            </li>
            <li>automatyczny dobór parametrów pracy,</li>
            <li>
              centrala sterująca z wbudowanym odbiornikiem radiowym Sommer,
            </li>
            <li>zasilanie 1x 230 [V],</li>
            <li>
              możliwość szybkiego awaryjnego rozblokowania w przypadku braku
              zasilania głównego,
            </li>
            <li>
              przeznaczone do garaży zbiorczych do 30 miejsc parkingowych,
            </li>
            <li>
              sterowanie ruchem wjazdu za pomocą sygnalizatorów czerwony/zielony
              (funkcja dostępna w tiga+),
            </li>
            <li>
              możliwość podłączenia do systemu oddymiania i napowietrzania
              (funkcja dostępna w tiga+).
            </li>
          </ul>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src="https://www.wisniowski.pl/api/preview/cc/cc2375eb-8cc5-4966-ab77-623d719939bb.png?w=1080&q=95" // Replace with actual image URL
            alt="Automatyka SOMMER Base+ i tiga+"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
// Content Section Component
const ContentSection = () => {
  const bannerImage =
    "https://www.wisniowski.pl/api/preview/a8/a894f404-8ebb-4e17-9405-9801272952a9.png?w=1080&q=95";

  const details = [
    "W wyposażeniu standardowym zestaw uszczelnień ThermoSet ™: czterokomorowe, dwulistkowe uszczelki termiczne boczne; dwulistkowa uszczelka górna; uszczelnienia narożnikowe.",
    "Współczynnik przenikania ciepła dla panelu Up=0,33 [W/m2xK].",
    "Grubość ościeżnicy 2 [mm] / prowadnicy 2 [mm].",
    "Osłony boczne oraz wzmocnienia paneli w kolorze skrzydła bramy.",
    "Podwójne tulejowane, ciche łożyskowane rolki prowadzące.",
    "Podwójne zabezpieczenie prowadnic uniemożliwiające wypadnięcie rolek prowadzących.",
    "Zabezpieczenia: w przypadku pęknięcia linki (2 szt.), zabezpieczenie przeciw skutkom pęknięcia sprężyny (na każdą ze sprężyn).",
    "Gwarantowana liczba cykli 25 000, opcjonalnie: 50 000, 100 000 i ponad 100 000.",
    "Wodoszczelność klasa 2.",
    "Odporność na obciążenie wiatrem klasa 4.",
    "Przepuszczalność powietrza klasa 5.",
    "Izolacyjność akustyczna Rw=24 [dB].",
    "Hałas funkcjonalny bramy: 24/36 [dB] (z napędem elektrycznym 8.60 FU / SE9).",
    "Reakcja na ogień NRO: B, s2, d0.",
    "Brama w wersji ręcznej wyposażona jest w rygiel (zasuwę ręczną).",
  ];

  return (
    <div className="container mx-auto px-8 md:px-24 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={bannerImage}
            alt="Brama MakroTherm 2.0"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">Seria MakroTherm</h1>
            <h2 className="text-3xl font-semibold mb-6">
              Brama MakroTherm 2.0
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Bramy MakroTherm 2.0 zbudowane są z ultraciepłych paneli stalowych
              o grubości 60 [mm] wypełnionych pianką poliuretanową.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              {details.map((detail, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const ContentSectionReversed = () => {
  const bannerImage =
    "https://www.wisniowski.pl/api/preview/68/685979e2-982e-45d6-af4f-b8823b3efde0.png?w=1080&q=95";

  const details = [
    "Współczynnik przenikania ciepła dla panelu Up=0,33 [W/m2xK].",
    "W pełni zautomatyzowana – napęd elektryczny GFA seria SE 2524 FU z falownikiem.",
    "Grubość ościeżnicy 2 [mm] / prowadnicy 2 [mm].",
    "Osłony boczne oraz wzmocnienia paneli w kolorze skrzydła bramy.",
    "Zabezpieczenia w przypadku pęknięcia linki (2 szt.).",
    "Podwójne rolki prowadzące.",
    "Gwarantowana liczba cykli 15 000.",
    "Wodoszczelność klasa 2.",
    "Odporność na obciążenie wiatrem klasa 4.",
    "Przepuszczalność powietrza klasa 5.",
    "Izolacyjność akustyczna Rw=24 [dB].",
  ];

  return (
    <div className="container mx-auto px-8 md:px-24 py-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">Seria MakroTherm</h1>
            <h2 className="text-3xl font-semibold mb-6">
              Brama MakroTherm XXL
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Bramy MakroTherm XXL zbudowane są z ultraciepłych paneli stalowych
              o grubości 60 [mm] wypełnionych pianką poliuretanową.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              {details.map((detail, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={bannerImage}
            alt="Brama MakroTherm XXL"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const InnovoPanelSection = () => {
  const bannerImage =
    "https://www.wisniowski.pl/api/preview/9e/9e37bc17-d20b-4e91-8190-155c33447204.jpg?w=1080&q=95";

  const details = [
    "Elastyczna osłona międzypanelowa.",
    "Aluminiowy profil mocujący elastyczne osłony.",
    "Pięć warstw blachy w miejscu mocowania zawiasów.",
    "Uszczelnienie międzypanelowe.",
    "Ukryty zawias.",
    "Pianka poliuretanowa.",
  ];

  return (
    <div className="container mx-auto px-8 md:px-24 py-12 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={bannerImage}
            alt="Panel INNOVO 60mm"
            className="w-full h-auto object-contain"
          />
        </div>

        {/* Text Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">Rewolucja ciepła</h1>
            <h2 className="text-3xl font-semibold mb-6">Panel INNOVO 60mm</h2>
            <p className="text-lg leading-relaxed mb-4">
              Płaszcz bram MakroTherm zbudowany jest z paneli INNOVO o grubości
              60 mm i współczynniku przenikania ciepła U=0,33 [W/m2xK]. Dzięki
              zastosowaniu termoizolowanych paneli oraz systemów uszczelnień,
              wyeliminowaliśmy straty ciepła w najbardziej newralgicznych
              miejscach skrzydła, zapewniając bramom przemysłowym parametry
              pozwalające na utrzymanie optymalnej temperatury wewnątrz
              pomieszczeń.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              {details.map((detail, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

const MakroProSection = () => {
  const bannerImage =
    "https://www.wisniowski.pl/api/preview/1a/1a3b9f57-eab9-4e27-96e9-48f5aec9c50d.png?w=1080&q=95";

  const details = [
    "W wyposażeniu standardowym zestaw uszczelnień ThermoSet ™: czterokomorowe, dwulistkowe uszczelki termiczne boczne; dwulistkowa uszczelka górna; uszczelnienia narożnikowe.",
    "Współczynnik przenikania ciepła dla panelu Up=0,48 [W/m2xK].",
    "Grubość ościeżnicy 2 [mm] / prowadnicy 2 [mm].",
    "Osłony boczne paneli i wzmocnienia w kolorze skrzydła bramy.",
    "Tulejowane, ciche łożyskowane rolki prowadzące.",
    "Podwójne zabezpieczenie prowadnic uniemożliwiające wypadnięcie rolek prowadzących.",
    "Zabezpieczenie: w przypadku pęknięcia linki (2 szt.), zabezpieczenie przeciw skutkom pęknięcia sprężyny (na każdą ze sprężyn).",
    "Gwarantowana liczba cykli 25 000, opcjonalnie: 50 000, 100 000 i ponad 100 000.",
    "Wodoszczelność klasa 2.",
    "Odporność na obciążenie wiatrem klasa 3.",
    "Przepuszczalność powietrza klasa 4.",
    "Izolacyjność akustyczna Rw=23/24 [dB] (bez drzwi przejściowych / z drzwiami przejściowymi).",
    "Hałas funkcjonalny bramy: 24/36 [dB] (z napędem elektrycznym SE8.60 FU / SE9.24).",
    "Reakcja na ogień NRO: B, s2, d0.",
    "Brama w wersji ręcznej wyposażona jest w rygiel (zasuwę ręczną).",
  ];

  return (
    <div className="container mx-auto px-8 md:px-24 py-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">Seria MakroPro 2.0</h1>
            <h2 className="text-3xl font-semibold mb-6">MakroPro 2.0</h2>
            <p className="text-lg leading-relaxed mb-4">
              Bramy MakroPro 2.0 zbudowane są z ciepłych paneli stalowych o
              grubości 40 [mm] wypełnionych pianką poliuretanową.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              {details.map((detail, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={bannerImage}
            alt="MakroPro 2.0"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const MakroProAluSection = () => {
  const bannerImage =
    "https://www.wisniowski.pl/api/preview/bc/bc290b67-68fc-4acb-930c-cdf3a9ad92cb.png?w=1080&q=95";

  const details = [
    "W wyposażeniu standardowym zestaw uszczelnień ThermoSet ™: czterokomorowe, dwulistkowe uszczelki termiczne boczne; dwulistkowa uszczelka górna; uszczelnienia narożnikowe.",
    "Grubość ościeżnicy 2 [mm] / prowadnicy 2 [mm].",
    "Wzmocnienia paneli w kolorze skrzydła bramy.",
    "Tulejowane, ciche łożyskowane rolki prowadzące.",
    "Podwójne zabezpieczenie prowadnic uniemożliwiające wypadnięcie rolek prowadzących.",
    "Zabezpieczenie: w przypadku pęknięcia linki (2 szt.), zabezpieczenie przeciw skutkom pęknięcia sprężyny (na każdą ze sprężyn).",
    "Gwarantowana liczba cykli 25 000, opcjonalnie: 50 000, 100 000 i ponad 100 000.",
    "Wodoszczelność klasa 2.",
    "Odporność na obciążenie wiatrem klasa 3.",
    "Przepuszczalność powietrza klasa 4.",
    "Izolacyjność akustyczna Rw=23/25 [dB] (bez drzwi przejściowych / z drzwiami przejściowymi).",
    "Reakcja na ogień NRO: B, s2, d0.",
    "Brama w wersji ręcznej wyposażona jest w rygiel (zasuwę ręczną).",
  ];

  return (
    <div className="container mx-auto px-8 md:px-24 py-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">Seria MakroPro Alu 2.0</h1>
            <h2 className="text-3xl font-semibold mb-6">MakroPro Alu 2.0</h2>
            <p className="text-lg leading-relaxed mb-4">
              Bramy zbudowane są z paneli aluminiowych 40 [mm] bez przegrody
              termicznej, wypełnionych przeszkleniami akrylowymi. Dolny panel
              stalowy.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              {details.map((detail, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={bannerImage}
            alt="MakroPro Alu 2.0"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const MakroProAluIsoSection = () => {
  const bannerImage =
    "https://www.wisniowski.pl/api/preview/d4/d401d8d0-75a7-4da2-9663-8a074051e861.png?w=1080&q=95";

  const details = [
    "Zestaw uszczelnień ThermoSet™: czterokomorowe, dwulistkowe uszczelki termiczne boczne, dwulistkowa uszczelka górna, uszczelnienia narożnikowe.",
    "Współczynnik przenikania ciepła – zgodny z tabliczką znamionową bramy.",
    "Grubość ościeżnicy 2 [mm] / prowadnicy 2 [mm].",
    "Wzmocnienia paneli w kolorze skrzydła bramy.",
    "Tulejowane, ciche łożyskowane rolki prowadzące.",
    "Podwójne zabezpieczenie prowadnic uniemożliwiające wypadnięcie rolek prowadzących.",
    "Zabezpieczenia: w przypadku pęknięcia linki (2 szt.), zabezpieczenie przeciw skutkom pęknięcia sprężyny (na każdą ze sprężyn).",
    "Gwarantowana liczba cykli 25 000, opcjonalnie: 50 000, 100 000 i ponad 100 000.",
    "Wodoszczelność – klasa 3.",
    "Przepuszczalność powietrza – klasa 4.",
    "Izolacyjność akustyczna Rw=23 [dB].",
    "Odporność na obciążenie wiatrem – klasa 4.",
    "Brama w wersji ręcznej wyposażona jest w rygiel (zasuwę ręczną).",
  ];

  return (
    <div className="container mx-auto px-8 md:px-24 py-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">Seria MakroPro 2.0</h1>
            <h2 className="text-3xl font-semibold mb-6">
              MakroPro 2.0 ALU ISO
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Bramy zbudowane są z paneli aluminiowych 40 [mm] z przegrodą
              termiczną, wypełnionych przeszkleniami akrylowymi. Dolny panel
              stalowy.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              {details.map((detail, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={bannerImage}
            alt="MakroPro 2.0 ALU ISO"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const MakroPro2ElhSection = () => {
  const bannerImage =
    "https://www.wisniowski.pl/api/preview/04/04e341c0-8910-421e-930a-00d1c862df04.jpg?w=1080&q=95";

  return (
    <div className="container mx-auto px-8 md:px-24 py-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">Seria MakroPro 2.0</h1>
            <h2 className="text-3xl font-semibold mb-6">MakroPro 2.0 ELH</h2>
            <p className="text-lg leading-relaxed mb-4">
              Brama MakroPro 2.0 ELH została zaprojektowana tak, by można było
              uzupełnić ją o indywidualne wypełnienie. Oznacza to, że jej
              skrzydło może z zewnątrz wyglądać dokładnie tak, jak oczekuje tego
              projektant lub inwestor.
            </p>
            <p className="text-lg leading-relaxed mb-4">
              Możliwości są niemal nieograniczone. Front pokryty płytkami,
              łupkiem lub panelami z tworzywa sztucznego? Dlaczego nie „wtopić”
              bramy w tło – by stworzyć efekt idealnie spójnej fasady? To
              olbrzymie możliwości dla architektów i przedsiębiorstw, które chcą
              mocno podkreślić swoje przywiązanie do piękna.
            </p>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={bannerImage}
            alt="MakroPro 2.0 ELH"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const MakroPro100Section = () => {
  const bannerImage =
    "https://www.wisniowski.pl/api/preview/bf/bfa6fc66-9671-4592-9e6f-24683634d50d.png?w=1080&q=95";

  const details = [
    "Gwarantowana liczba cykli 100 000.",
    "Napęd elektryczny GFA seria SI w standardzie.",
    "W wyposażeniu standardowym zestaw uszczelnień ThermoSet ™: czterokomorowe, dwulistkowe uszczelki termiczne boczne; dwulistkowa uszczelka górna; uszczelnienia narożnikowe.",
    "Współczynnik przenikania ciepła dla panelu Up=0,48 [W/m2xK].",
    "Grubość ościeżnicy 2 [mm] / prowadnicy 2 [mm].",
    "Tulejowane, ciche łożyskowane rolki prowadzące.",
    "Osłony boczne paneli w kolorze skrzydła bramy.",
    "Podwójne zabezpieczenie prowadnic uniemożliwiające wypadnięcie rolek prowadzących.",
    "Zabezpieczenie: w przypadku pęknięcia linki (2 szt.).",
    "Wodoszczelność klasa 3.",
    "Odporność na obciążenie wiatrem klasa 3.",
    "Przepuszczalność powietrza klasa 4.",
    "Izolacyjność akustyczna Rw=23/24 [dB] (bez drzwi przejściowych / z drzwiami przejściowymi).",
    "Reakcja na ogień NRO: B, s2, d0.",
  ];

  return (
    <div className="container mx-auto px-8 md:px-24 py-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">Seria MakroPro 100 2.0</h1>
            <h2 className="text-3xl font-semibold mb-6">MakroPro 100 2.0</h2>
            <p className="text-lg leading-relaxed mb-4">
              Bramy MakroPro 100 2.0 zbudowane są z ciepłych paneli stalowych o
              grubości 40 [mm] wypełnionych pianką poliuretanową.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              {details.map((detail, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={bannerImage}
            alt="MakroPro 100 2.0"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};

const MakroPro100AluSection = () => {
  const bannerImage =
    "https://www.wisniowski.pl/api/preview/2c/2c19ba9f-0431-44fc-972f-0a52dbcc3ba7.png?w=1080&q=95";

  const details = [
    "Gwarantowana liczba cykli 100 000.",
    "Napęd elektryczny GFA seria SI.",
    "W wyposażeniu standardowym zestaw uszczelnień ThermoSet™: czterokomorowe, dwulistkowe uszczelki termiczne boczne; dwulistkowa uszczelka górna; uszczelnienia narożnikowe.",
    "Współczynnik przenikania ciepła – zgodny z tabliczką znamionową bramy.",
    "Zabezpieczenia: w przypadku pęknięcia linki (2 szt.).",
    "Grubość ościeżnicy 2 [mm] / prowadnicy 2 [mm].",
    "Tulejowane, ciche łożyskowane rolki prowadzące.",
    "Podwójne zabezpieczenie prowadnic uniemożliwiające wypadnięcie rolek prowadzących.",
    "Wodoszczelność klasa 2.",
    "Odporność na obciążenie wiatrem klasa 3.",
    "Odporność na obciążenie wiatrem klasa 4 (dla bram ze wzmocnieniami).",
    "Przepuszczalność powietrza klasa 4.",
    "Izolacyjność akustyczna Rw=23/24 [dB] (bez drzwi przejściowych / z drzwiami przejściowymi).",
  ];

  return (
    <div className="container mx-auto px-8 md:px-24 py-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Text Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl font-bold mb-4">Seria MakroPro 100 2.0</h1>
            <h2 className="text-3xl font-semibold mb-6">
              MakroPro 100 Alu 2.0
            </h2>
            <p className="text-lg leading-relaxed mb-4">
              Bramy zbudowane są z paneli aluminiowych 40 [mm] bez przegrody
              termicznej, wypełnionych przeszkleniami akrylowymi. Dolny panel
              stalowy.
            </p>
            <ul className="list-disc pl-6 space-y-4">
              {details.map((detail, index) => (
                <li key={index} className="text-lg text-gray-700">
                  {detail}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={bannerImage}
            alt="MakroPro 100 Alu 2.0"
            className="w-full h-auto object-contain"
          />
        </div>
      </div>
    </div>
  );
};
