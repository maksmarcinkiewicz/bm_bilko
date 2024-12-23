import { motion } from "framer-motion";

const GarageDoorBanner = () => {
  const bannerImages = [
    "https://www.wisniowski.pl/api/preview/4b/4bec2a48-10a1-4220-9cb4-2e9036f814cc.jpg?w=1920&q=100",
    "https://www.wisniowski.pl/api/preview/55/55c860f0-caa3-42d4-b091-44e95af31244.jpg?w=1920&q=100",
    "https://www.wisniowski.pl/api/preview/1e/1e7e2913-0c98-4e58-a944-efb5647ec211.jpg?w=1920&q=100",
  ];

  return (
    <div className="w-full overflow-hidden">
      <div className="relative flex justify-center">
        {bannerImages.map((src, idx) => (
          <img
            key={idx}
            src={src}
            alt={`Baner ${idx + 1}`}
            className="w-full h-[400px] object-cover"
          />
        ))}
      </div>
    </div>
  );
};

// Komponent dla Pojedynczej Bramy
const GarageDoorItem = ({ model, image, description, tags }) => (
  <div className="flex flex-col md:flex-row bg-white shadow-md rounded-lg overflow-hidden mb-8">
    <img
      src={image}
      alt={`Brama ${model}`}
      className="w-full md:w-1/2 h-[300px] object-cover"
    />
    <div className="p-6 flex flex-col justify-between">
      <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">{model}</h3>
      <p className="text-gray-700 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 bg-gray-200 text-gray-800 text-sm rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  </div>
);

// Dane Bramy
const garageDoors = [
  {
    model: "UniTherm",
    image:
      "https://www.wisniowski.pl/api/preview/39/393920d4-a135-4f91-a328-2df84f397a54.jpg?w=1920&q=75",
    description:
      "Nowoczesna brama garażowa o wysokiej izolacji termicznej. Idealna do energooszczędnych domów.",
    tags: ["Kolory: Biały, Szary, Antracyt", "Wzory: Kaseton, Gładki"],
  },
  {
    model: "UniPro",
    image:
      "https://www.wisniowski.pl/api/preview/2f/2f767200-a2ff-4770-a4f4-7d11893c9c3e.jpg?w=1920&q=75",
    description: "Wszechstronna brama garażowa, odpowiednia dla każdego domu.",
    tags: ["Kolory: Czerwony, Brązowy", "Wzory: Przetłoczenia poziome"],
  },
  {
    model: "Prime",
    image:
      "https://www.wisniowski.pl/api/preview/e9/e95654a4-4773-4a2d-bf7a-ccfd97674751.jpg?w=1920&q=75",
    description:
      "Ekskluzywna brama garażowa o wyjątkowym designie. Łączy estetykę z najnowszymi technologiami.",
    tags: ["Kolory: Antracyt, Czarny", "Funkcje: Automatyka Smart"],
  },
];

// Sekcja SmartConnected

const SmartConnectedSection = () => (
  <div className="bg-gray-100 py-12">
    <div className="container mx-auto px-4 flex flex-col justify-center items-center">
      <h2 className="text-3xl font-bold text-center mb-8 text-[#1F1F1F]">
        Wiśniowski SmartConnected
      </h2>
      <p className="text-gray-700 text-center mb-8 max-w-2xl ">
        Odkryj nowoczesne rozwiązania SmartConnected, które pozwalają na zdalne
        sterowanie bramami garażowymi z dowolnego miejsca na świecie. Zwiększ
        bezpieczeństwo i komfort dzięki technologii Wiśniowski Connected.
      </p>
    </div>
    <div className="flex justify-center">
      <div className="w-full max-w-4xl" style={{ aspectRatio: "16 / 9" }}>
        <iframe
          className="w-full h-full rounded-lg shadow-lg"
          src="https://www.youtube.com/embed/nOLVEo00upc" // Przykładowy ID filmu
          title="Wiśniowski SmartConnected Video"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  </div>
);

const GarageDoorsPage = () => {
  return (
    <motion.div
      className="bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <GarageDoorBanner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-[#1F1F1F] mb-12">
          Bramy Garażowe
        </h1>
        {garageDoors.map((door, index) => (
          <GarageDoorItem
            key={index}
            model={door.model}
            image={door.image}
            description={door.description}
            tags={door.tags}
          />
        ))}
      </div>
      <SmartConnectedSection />
    </motion.div>
  );
};

export default GarageDoorsPage;
