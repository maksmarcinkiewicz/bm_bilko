import { motion } from "framer-motion";
import { Link } from "react-router-dom";

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

const GarageDoorItem = ({ model, image, description, tags }) => (
  <motion.div
    className="flex flex-col md:flex-row bg-white shadow-lg rounded-sm overflow-hidden mb-8 transform hover:scale-105 transition duration-300 cursor-pointer"
    whileHover={{ scale: 1.02 }}
  >
    <img
      src={image}
      alt={`Brama ${model}`}
      className="w-full md:w-1/2 h-[300px] object-cover"
    />
    <div className="p-6 flex flex-col justify-between">
      <h3 className="text-2xl font-bold text-[#1F1F1F] mb-4">{model}</h3>
      <p className="text-gray-700 mb-4">{description}</p>

      <Link to={`/bramy-garazowe/${model.toLowerCase()}`}>
        <button className="bg-[#3B3B1D] text-white font-semibold px-6 py-2 rounded-sm shadow-md">
          Dowiedz się więcej
        </button>
      </Link>
    </div>
  </motion.div>
);

const garageDoors = [
  {
    model: "Prime",
    image:
      "https://www.wisniowski.pl/api/preview/e9/e95654a4-4773-4a2d-bf7a-ccfd97674751.jpg?w=1920&q=75",
    description:
      "Ekskluzywna brama garażowa o wyjątkowym designie. Łączy estetykę z najnowszymi technologiami.",
  },
  {
    model: "UniTherm",
    image:
      "https://www.bartal.pl/wp-content/webp-express/webp-images/uploads/2024/01/Wisniowski-brama-segmentowa-Unitherm-Lublin.jpg.webp",
    description:
      "Nowoczesna brama garażowa o wysokiej izolacji termicznej. Idealna do energooszczędnych domów.",
  },
  {
    model: "UniPro",
    image:
      "https://www.wisniowski.pl/api/preview/2f/2f767200-a2ff-4770-a4f4-7d11893c9c3e.jpg?w=1920&q=75",
    description: "Wszechstronna brama garażowa, odpowiednia dla każdego domu.",
  },
];

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
          />
        ))}
      </div>
    </motion.div>
  );
};

export default GarageDoorsPage;
