import React from "react";

// Sekcja Banerowa
const GarageDoorBanner = () => {
  const bannerImages = [
    "/images/garage1.jpg",
    "/images/garage2.jpg",
    "/images/garage3.jpg",
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
      <h3 className="text-2xl font-bold text-blue-700 mb-4">{model}</h3>
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
    image: "/images/unitherm.jpg",
    description:
      "Nowoczesna brama garażowa o wysokiej izolacji termicznej. Idealna do energooszczędnych domów.",
    tags: ["Kolory: Biały, Szary, Antracyt", "Wzory: Kaseton, Gładki"],
  },
  {
    model: "UniPro",
    image: "/images/unipro.jpg",
    description:
      "Wszechstronna brama garażowa, odpowiednia dla każdego domu. Wyróżnia się trwałością i łatwością obsługi.",
    tags: ["Kolory: Czerwony, Brązowy", "Wzory: Przetłoczenia poziome"],
  },
  {
    model: "Prime",
    image: "/images/prime.jpg",
    description:
      "Ekskluzywna brama garażowa o wyjątkowym designie. Łączy estetykę z najnowszymi technologiami.",
    tags: ["Kolory: Antracyt, Czarny", "Funkcje: Automatyka Smart"],
  },
];

// Sekcja SmartConnected
const SmartConnectedSection = () => (
  <div className="bg-gray-100 py-12">
    <div className="container mx-auto px-4">
      <h2 className="text-3xl font-bold text-center mb-8 text-blue-700">
        Wiśniowski SmartConnected
      </h2>
      <p className="text-gray-700 text-center mb-8">
        Odkryj nowoczesne rozwiązania SmartConnected, które pozwalają na zdalne
        sterowanie bramami garażowymi i drzwiami z dowolnego miejsca na świecie.
        Zwiększ bezpieczeństwo i komfort dzięki technologii Wiśniowski
        Connected.
      </p>
    </div>
  </div>
);

// Strona Główna
const GarageDoorsPage = () => {
  return (
    <div className="bg-gray-100">
      <GarageDoorBanner />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-blue-700 mb-12">
          Nasze Bramy Garażowe
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
    </div>
  );
};

export default GarageDoorsPage;
