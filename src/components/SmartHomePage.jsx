import { motion } from "framer-motion";
import InspirationBottom from "./InspirationBottom";

const SmartHomePage = () => {
  return (
    <motion.div
      className="bg-gray-100 text-gray-800 md:mt-32"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <TahomaSwitchSection />
      <BenefitsSection />
      <SmartProductsSection />
      <InspirationBottom />
    </motion.div>
  );
};

export default SmartHomePage;

// TahomaSwitchSection.js
const TahomaSwitchSection = () => {
  return (
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
  );
};

// BenefitsSection.js
const BenefitsSection = () => {
  const benefits = [
    {
      title: "Kompatybilność",
      description:
        "Twoja wygoda i bezpieczeństwo są najważniejsze. Z aplikacją sterujesz bramą wjazdową, bramą garażową, drzwiami, roletami, drzwiami tarasowymi HST i innymi urządzeniami domowymi. To optymalizacja działań za pomocą jednego, intuicyjnego interfejsu.",
      icon: "https://example.com/icon1.png", // Replace with actual icon URL
    },
    {
      title: "Zdalna kontrola",
      description:
        "Kontrolujesz stan swojego domu oraz automatyzujesz działanie inteligentnych urządzeń domowych z dowolnego miejsca na świecie. Dzięki aplikacji masz pełny dostęp do informacji o stanie domu, możesz zdalnie włączać i wyłączać urządzenia i tworzyć harmonogramy ich działania.",
      icon: "https://example.com/icon2.png", // Replace with actual icon URL
    },
    {
      title: "Asystent głosowy",
      description:
        "Sterujesz urządzeniami domowymi za pomocą głosu po podłączeniu asystenta głosowego, dzięki czemu zyskujesz wygodną i intuicyjną możliwość sterowania urządzeniami w Twoim domu – bez konieczności sięgania po pilot. Wystarczy wydać odpowiednie polecenie głosowe, aby asystent je wykonał.",
      icon: "https://example.com/icon3.png", // Replace with actual icon URL
    },
    {
      title: "Bezpieczeństwo",
      description:
        "Chronisz aplikację indywidualnym hasłem, co uniemożliwia do niej dostęp osobom nieuprawnionym, a tym samym zapewnia bezpieczeństwo Twojemu domowi i jego mieszkańcom. Dane są przechowywane w chmurze na serwerach zlokalizowanych w Europie.",
      icon: "https://example.com/icon4.png", // Replace with actual icon URL
    },
  ];

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">
          Twoje korzyści z aplikacją TaHoma Switch
        </h2>
        <p className="mb-12 text-lg">
          Pobierz aplikację i korzystaj ze wszystkich funkcjonalności domowych
          urządzeń gdziekolwiek jesteś.
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="p-8 bg-white rounded-lg shadow-lg">
              <img
                src={benefit.icon}
                alt={benefit.title}
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-2xl font-bold mb-4">{benefit.title}</h3>
              <p className="text-gray-700">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const SmartProductsSection = () => {
  const products = [
    {
      title: "Brama garażowa",
      image: "https://sklep.wisniowski.pl/img/products/38/85/8_org.jpg",
      description:
        "Bramy segmentowe i uchylne z napędem MOTO io lub METRO Smart io. Bramy roletowe z centralą sterującą ROLLIXO Smart io.",
    },
    {
      title: "Drzwi zewnętrzne",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTpwbXzyDe_PydOBOFVe8VJ8C2BTpK2oAwZ1g&s",
      description:
        "Drzwi z zamkiem elektrycznym Autotronic lub Multitronic w wersji io.",
    },
    {
      title: "Drzwi tarasowe HST",
      image:
        "https://www.aluplast.com.pl/images/image-576x591/catalog/2482/aluplast-hst-mob_63af540d32ac97_17511315.jpg.jpg",
      description:
        "Drzwi tarasowe automatyczne z napędem i sterownikiem smart.",
    },
    {
      title: "Brama ogrodzeniowa przesuwna",
      image: "https://example.com/placeholder-gate.jpg", // Replace with actual image
      description:
        "Brama przesuwna z napędem AWo 2018 Pro io, AWo 2018 Elixo io.",
    },
  ];

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-8">
          smartProdukty WIŚNIOWSKI
        </h2>
        <p className="mb-12 text-lg">
          Poznaj rozwiązania, które zmienią Twój dom
        </p>
        <div className="grid md:grid-cols-4 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="p-8 bg-gray-50 rounded-lg shadow-lg text-center"
            >
              <img
                src={product.image}
                alt={product.title}
                className="w-full h-40 object-cover mb-4 rounded-lg"
              />
              <h3 className="text-xl font-bold mb-2">{product.title}</h3>
              <p className="text-gray-700 text-sm">{product.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
