import { motion } from "framer-motion";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import InspirationBottom from "./InspirationBottom";
const DoorsPage = () => {
  const woodenSectionRef = useRef(null);

  const goToWooden = () => {
    woodenSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <motion.div
      className="bg-gray-100 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <button
        onClick={goToWooden}
        className="sticky top-32 left-0 w-72 bg-white/90 backdrop-blur flex flex-col items-center py-2 z-50 shadow-md"
      >
        <span className="text-sm font-bold uppercase tracking-widest">
          Drzwi drewniane
        </span>
        <span className="text-xs text-gray-600">Realizacje</span>
      </button>
      <HeroSectionCreo />
      <div className="w-full overflow-hidden">
        <img
          src="https://www.wisniowski.pl/api/preview/d4/d41f2a75-636e-4a57-9857-715fe5c4a043.jpg?w=1920&q=75"
          alt="Drzwi Creo – dodatkowa prezentacja"
          className="w-2/3 h-full mt-4 md:mt-8"
        />
      </div>
      <ModelsSection title="Kolekcja CREO" models={creoModels} />
      <HeroSectionNova />
      <div className="w-full overflow-hidden">
        <img
          src="https://s3.eu-central-1.amazonaws.com/pressland-cms/cache/article_show_section_image/ni/render-nova-015.jpeg"
          alt="Drzwi Creo – dodatkowa prezentacja"
          className="w-2/3 h-full mt-4 md:mt-8"
        />
      </div>
      <ModelsSection title="Kolekcja NOVA" models={novaModels} />
      <ModelsSection title="Kolekcja Glass Line" models={glassLineModels} />
      <HeroSectionPirue />
      <div className="w-full overflow-hidden">
        <img
          src="https://www.wisniowski.pl/api/preview/37/37bf3f2a-812a-4ca1-ad26-aae5d42658a8.jpg?w=1920&q=100"
          alt="Drzwi Creo – dodatkowa prezentacja"
          className="w-2/3 h-full mt-4 md:mt-8"
        />
      </div>
      <ModelsSection title="Kolekcja PIRUE" models={pirueModels} />
      <HeroSectionNobe />
      <div className="w-full overflow-hidden">
        <img
          src="https://www.wisniowski.pl/api/preview/34/341ced78-85b5-4a39-b7eb-779cefbd8ac0.jpg?w=1920&q=75"
          alt="Drzwi Creo – dodatkowa prezentacja"
          className="w-2/3 h-full mt-4 md:mt-8"
        />
      </div>
      <ModelsSection title="Kolekcja NOBE" models={nobeModels} />
      {/* --- sekcja Realizacje – drzwi drewniane --- */}
      <section ref={woodenSectionRef} className="py-16 bg-gray-100">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-center mb-8"
        >
          Realizacje — drzwi drewniane
        </motion.h2>

        {/* podmień src na swoje zdjęcia realizacji */}
        <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-8 gap-6 px-4">
          {[
            "https://i.postimg.cc/QxDg2WRJ/image.png",
            "https://i.postimg.cc/tRFR117f/image.png",
            "https://i.postimg.cc/xTR0RWv3/image.png",
            "https://i.postimg.cc/4xxXFBwk/image.png",
            "https://i.postimg.cc/R0j9h9m4/image.png",
            "https://i.postimg.cc/Gtj1Xyym/image.png",
            "https://i.postimg.cc/pX2vpqwh/image.png",
            "https://i.postimg.cc/xTt2HLQs/image.png",
            "https://i.postimg.cc/N0rqWVHV/image.png",
            "https://i.postimg.cc/k4Qr5bwv/image.png",
            "https://i.postimg.cc/90C6wQn5/image.png",
            "https://i.postimg.cc/bNNXzdn1/image.png",
            "https://i.postimg.cc/GhMW9rPV/image.png",
            "https://i.postimg.cc/pL43YZ6B/image.png",
            "https://i.postimg.cc/3wGVLGMQ/image.png",
            "https://i.postimg.cc/hjqwNGgz/image.png",
            "https://i.postimg.cc/sxjLD0M3/image.png",
            "https://i.postimg.cc/yxLbJXRc/image.png",
            "https://i.postimg.cc/PfycFh7J/image.png",
            "https://i.postimg.cc/GhSfdKd1/image.png",
            "https://i.postimg.cc/XYRDyvrH/image.png",
            "https://i.postimg.cc/zB5t0PST/image.png",
            "https://i.postimg.cc/nzkd5Y0g/image.png",
          ].map((src, i) => (
            <motion.img
              key={i}
              src={src}
              alt={`Realizacja ${i + 1}`}
              className="h-64 object-contain rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
            />
          ))}
        </div>
      </section>
      <HeroSectionCal />
      <ModelsSection2 title="Kolekcja CAL" models={calModels} />

      <InspirationBottom />
    </motion.div>
  );
};

const HeroSectionCreo = () => (
  <div>
    {/* -- główny hero */}
    <div
      className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://www.wisniowski.pl/api/preview/72/724aaa54-9865-4b67-88d7-17e8264f5b59.jpg?w=1920&q=75')",
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative text-center text-white px-4">
        <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
          Drzwi wejściowe CREO
        </h1>
        <p className="text-lg font-light max-w-2xl mx-auto drop-shadow-lg">
          Łączą w sobie wysoką termoizolację z bezpieczeństwem i Twoją wizją
          domu.
        </p>
      </div>
    </div>
  </div>
);

const HeroSectionNova = () => (
  <div
    className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
    style={{
      backgroundImage:
        "url('https://www.wisniowski.pl/api/preview/8d/8ddc8be4-fc43-4176-aa35-52ed49d27c6f.jpg?w=1920&q=75')",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative text-center text-white">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        Drzwi wejściowe NOVA
      </h1>
      <p className="text-lg font-light max-w-2xl mx-auto drop-shadow-lg">
        NOVA – to kompletne rozwiązanie dla domu. W standardzie posiadają ciepłą
        i trwałą ościeżnicę aluminiową. Stalowe skrzydło zapewnia bezpieczeństwo
        i doskonale izoluje od hałasu, chłodu i wilgoci.
      </p>
    </div>
  </div>
);

const HeroSectionPirue = () => (
  <div
    className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
    style={{
      backgroundImage:
        "url('https://www.wisniowski.pl/api/preview/81/814bc1b5-4b45-4723-89a9-25e04518fed3.jpg?w=1920&q=75')",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative text-center text-white">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        Drzwi wejściowe PIRUE
      </h1>
      <p className="text-lg font-light max-w-2xl mx-auto drop-shadow-lg">
        PIRUE to połączenie nowoczesnego designu, precyzji wykonania oraz
        niezrównanej funkcjonalności. Zawias PIVOT umożliwia płynne otwieranie
        drzwi o największych gabarytach.
      </p>
    </div>
  </div>
);

const HeroSectionNobe = () => (
  <div
    className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
    style={{
      backgroundImage:
        "url('https://www.wisniowski.pl/api/preview/dd/dd9cff9e-91a2-4e6e-83cf-cc4b3a79fa57.jpg?w=1920&q=75')",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative text-center text-white">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        Drzwi wejściowe NOBE
      </h1>
      <p className="text-lg font-light max-w-2xl mx-auto drop-shadow-lg">
        Łączą w sobie solidną konstrukcję i rozwiązania dla bezpieczeństwa z
        nowoczesnym designem.
      </p>
    </div>
  </div>
);

const HeroSectionCal = () => (
  <div className="relative bg-cover bg-center h-[40vh] flex items-center justify-center">
    <div className="relative text-center text-black">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        Drzwi zewnętrzne drewniane CAL
      </h1>
    </div>
  </div>
);

const ModelsSection = ({ title, models }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6; // Przewija o 60% szerokości ekranu
      if (direction === "left") {
        scrollRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="bg-white py-16 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">{title}</h2>

        {/* Strzałki do przesuwania */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-400 hidden md:flex"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-400 hidden md:flex"
        >
          <FiChevronRight size={24} />
        </button>

        {/* Karuzela modeli */}
        <div
          ref={scrollRef}
          className="overflow-x-scroll no-scrollbar flex space-x-6 px-4 md:px-12 py-4 scroll-smooth snap-x"
        >
          {models.map((model, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-gray-50 rounded-lg shadow-lg text-center p-4"
            >
              <img
                src={`https://www.wisniowski.pl${model.image}`}
                alt={model.name}
                className="h-96 object-cover rounded-t-lg"
              />
              <h3 className="text-lg md:text-xl font-bold mt-3 mb-2">
                {model.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ModelsSection2 = ({ title, models }) => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const { scrollLeft, clientWidth } = scrollRef.current;
      const scrollAmount = clientWidth * 0.6; // Przewija o 60% szerokości ekranu
      if (direction === "left") {
        scrollRef.current.scrollTo({
          left: scrollLeft - scrollAmount,
          behavior: "smooth",
        });
      } else {
        scrollRef.current.scrollTo({
          left: scrollLeft + scrollAmount,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section className="bg-white py-16 relative">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-extrabold mb-6">{title}</h2>

        {/* Strzałki do przesuwania */}
        <button
          onClick={() => scroll("left")}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-400 hidden md:flex"
        >
          <FiChevronLeft size={24} />
        </button>
        <button
          onClick={() => scroll("right")}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-300 p-3 rounded-full shadow-md hover:bg-gray-400 hidden md:flex"
        >
          <FiChevronRight size={24} />
        </button>

        {/* Karuzela modeli */}
        <div
          ref={scrollRef}
          className="overflow-x-scroll no-scrollbar flex space-x-6 px-4 md:px-12 py-4 scroll-smooth snap-x"
        >
          {models.map((model, index) => (
            <div
              key={index}
              className="flex-shrink-0 bg-gray-50 rounded-lg shadow-lg text-center p-4"
            >
              <img
                src={`${model.image}`}
                alt={model.name}
                className="h-96 object-cover rounded-t-lg"
              />
              <h3 className="text-lg md:text-xl font-bold mt-3 mb-2">
                {model.name}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const creoModels = [
  {
    image:
      "/api/preview/cf/cf2d2906-8d13-4ffa-868d-a2d605b4c85a.jpg?w=3840&q=95",
    name: "CREO | 801",
  },
  {
    image:
      "/api/preview/e7/e78a5f19-646c-476e-9480-81d7debce060.jpg?w=3840&q=95",
    name: "CREO | 802",
  },
  {
    image:
      "/api/preview/93/93b47752-1b25-4c67-bdef-1d30d503c976.jpg?w=3840&q=95",
    name: "CREO | 803",
  },
  {
    image:
      "/api/preview/5f/5fd20925-8a60-49e5-b855-e93db0c9f5af.jpg?w=3840&q=95",
    name: "CREO | 701",
  },
  {
    image:
      "/api/preview/f2/f26aa2c6-da94-41a4-bd95-1327c05eee37.jpg?w=3840&q=95",
    name: "CREO | 702",
  },
  {
    image:
      "/api/preview/d6/d6953731-f119-4f90-a1f4-aa1f97d1b2a4.jpg?w=3840&q=95",
    name: "CREO | 703",
  },
  {
    image:
      "/api/preview/a6/a6f80651-5268-4d14-9261-8ef18c361c14.jpg?w=3840&q=95",
    name: "CREO | 601",
  },
  {
    image:
      "/api/preview/bb/bbab12ff-e5a2-44b0-8884-082e8003557b.jpg?w=3840&q=95",
    name: "CREO | 602",
  },
  {
    image:
      "/api/preview/ed/eddd397d-90a6-4b1e-956c-5d1fd0a370d5.jpg?w=3840&q=95",
    name: "CREO | 603",
  },
  {
    image:
      "/api/preview/31/31d7b91a-44a9-4f24-bed2-3f12c94d6c58.jpg?w=3840&q=95",
    name: "CREO | 501",
  },
  {
    image:
      "/api/preview/0d/0ddf775c-a787-4de9-b3f6-ca961cf2cb45.jpg?w=3840&q=95",
    name: "CREO | 502",
  },
  {
    image:
      "/api/preview/dd/dd0d11d0-a182-4932-9936-520eaf421a43.jpg?w=3840&q=95",
    name: "CREO | 503",
  },
  {
    image:
      "/api/preview/9b/9ba31903-f6fc-4583-a771-6157edda2ad4.jpg?w=3840&q=95",
    name: "CREO | 504",
  },
  {
    image:
      "/api/preview/bf/bfaef3d3-42bb-4449-b680-188471a9f4eb.jpg?w=3840&q=95",
    name: "CREO | 401",
  },
  {
    image:
      "/api/preview/1a/1ac6d3dc-90ed-4b0d-b44f-58c398981613.jpg?w=3840&q=95",
    name: "CREO | 402",
  },
  {
    image:
      "/api/preview/82/82e5f27b-4d23-4503-83fc-f3a97a12257e.jpg?w=3840&q=95",
    name: "CREO | 403",
  },
  {
    image:
      "/api/preview/8d/8d4af527-7a02-40a8-9728-199c51ab15af.jpg?w=3840&q=95",
    name: "CREO | 411",
  },
  {
    image:
      "/api/preview/93/933574d1-1ed4-4ef6-a17b-3770fa5d58c2.jpg?w=3840&q=95",
    name: "CREO | 412",
  },
  {
    image:
      "/api/preview/3b/3bed7fe4-14b6-4da4-b791-c31b8c027208.jpg?w=3840&q=95",
    name: "CREO | 413",
  },
  {
    image:
      "/api/preview/6f/6f8927c7-7435-4519-b0e6-69c6a04de605.jpg?w=3840&q=95",
    name: "CREO | 414",
  },
  {
    image:
      "/api/preview/26/2607ec67-77f9-4f3b-b201-345259248b59.jpg?w=3840&q=95",
    name: "CREO | 415",
  },
  {
    image:
      "/api/preview/8d/8df3f777-1a9c-4a54-a492-1446d47577bf.jpg?w=3840&q=95",
    name: "CREO | 310",
  },
  {
    image:
      "/api/preview/88/8820f593-0c69-483c-8122-3f757b26b095.jpg?w=3840&q=95",
    name: "CREO | 311",
  },
  {
    image:
      "/api/preview/96/96af64d2-3296-41c8-9b36-a43e2ca764d3.jpg?w=3840&q=95",
    name: "CREO | 312",
  },
  {
    image:
      "/api/preview/a1/a1c48bc4-a2b5-4307-9dc9-ca3fabd240d8.jpg?w=3840&q=95",
    name: "CREO | 313",
  },
  {
    image:
      "/api/preview/90/90e4894d-1f9f-4801-809c-ce20fbfbdcf0.jpg?w=3840&q=95",
    name: "CREO | 314",
  },
  {
    image:
      "/api/preview/46/46188486-b0ec-4b9b-b558-bdee01bbfdf2.jpg?w=3840&q=95",
    name: "CREO | 315",
  },
  {
    image:
      "/api/preview/bc/bc14ab23-7a7b-4fb5-8f97-3f1ab23c1bba.jpg?w=3840&q=95",
    name: "CREO | 316",
  },
  {
    image:
      "/api/preview/82/824696ff-d5d0-4272-8749-c197fc415ee3.jpg?w=3840&q=95",
    name: "CREO | 317",
  },
];

const novaModels = [
  {
    image: "/api/preview/1f/1f80acfd-89f7-4484-89bc-ef0739d7d22e.jpg",
    name: "NOVA | 001",
  },
  {
    image: "/api/preview/10/105f0779-7447-4168-a580-d519c35548ff.jpg",
    name: "NOVA | 002",
  },
  {
    image: "/api/preview/93/93a267e6-205b-44e8-a04b-78b0e8c7269f.jpg",
    name: "NOVA | 003",
  },
  {
    image: "/api/preview/f1/f16df656-5769-4d5a-974c-94ccdf1df4d1.jpg",
    name: "NOVA | 004",
  },
  {
    image: "/api/preview/01/01af3d1a-7702-474f-86fe-d12cc4c50904.jpg",
    name: "NOVA | 005",
  },

  {
    image: "/api/preview/10/104049c1-9e35-47f9-ac3e-9a20e729a8e8.jpg",
    name: "NOVA | 007",
  },
  {
    image: "/api/preview/35/35a22584-4e30-44d4-9cd3-687905c3c96e.jpg",
    name: "NOVA | 008",
  },
  {
    image: "/api/preview/73/73fda5d2-87a1-40f5-8bd5-2f2e66eeb6c7.jpg",
    name: "NOVA | 009",
  },
  {
    image: "/api/preview/8d/8df5f2bf-65a2-4387-8eda-d22717038e5b.jpg",
    name: "NOVA | 010",
  },
  {
    image: "/api/preview/17/170ebc3e-4e20-47a4-abed-32016d8b5297.jpg",
    name: "NOVA | 011",
  },
  {
    image: "/api/preview/b9/b99bdb10-6b59-4702-9ea0-958cadc13b7b.jpg",
    name: "NOVA | 012",
  },
  {
    image: "/api/preview/a5/a5c802bb-ecb7-4ccf-8540-e2fd39da6f7c.jpg",
    name: "NOVA | 013",
  },
  {
    image: "/api/preview/1b/1b47215d-b74b-492b-a555-70cbeede8274.jpg",
    name: "NOVA | 014",
  },
  {
    image: "/api/preview/1f/1f5a10fb-c08c-4694-bc20-33c335ab4698.jpg",
    name: "NOVA | 015",
  },
  {
    image: "/api/preview/8e/8e71b590-3896-4354-b0d4-ccd658212bc4.jpg",
    name: "NOVA | 016",
  },

  {
    image: "/api/preview/32/322e09aa-6b34-4bcf-9543-0f9918d58e8d.jpg",
    name: "NOVA | 018",
  },

  {
    image: "/api/preview/76/76296d6a-4504-486c-9ba1-f9c173c091ea.jpg",
    name: "NOVA | 020",
  },

  {
    image: "/api/preview/ce/ce7dce2f-cf57-4226-8f9e-2b34eec5581d.jpg",
    name: "NOVA | 023",
  },
  {
    image: "/api/preview/94/9458567e-8707-4451-8ceb-2fc587652f6f.jpg",
    name: "NOVA | 024",
  },
  {
    image: "/api/preview/dd/dd8313cd-43c5-4a6b-8a11-f685da89c015.jpg",
    name: "NOVA | 025",
  },

  {
    image: "/api/preview/60/609a82d8-5849-429c-8e48-a0bc47474b5a.jpg",
    name: "NOVA | 027",
  },
  {
    image: "/api/preview/53/53be9cfb-e83e-467f-82f4-75da7167f05e.jpg",
    name: "NOVA | 028",
  },
  {
    image: "/api/preview/c6/c61e0d58-96c3-4ecd-95bf-c2358a62f71e.jpg",
    name: "NOVA | 029",
  },

  {
    image: "/api/preview/72/7208dd67-bb54-4fd5-8eb4-e296aded85c2.jpg",
    name: "NOVA | 031",
  },
  {
    image: "/api/preview/22/22fcea89-a804-4fe8-acf4-b73b012cd15e.jpg",
    name: "NOVA | 032",
  },
  {
    image: "/api/preview/9a/9a250097-1929-4768-8013-3dba73acecb8.jpg",
    name: "NOVA | 033",
  },
  {
    image: "/api/preview/96/965a89ea-4404-47c6-b5b2-1119f3095e93.jpg",
    name: "NOVA | 034",
  },
  {
    image: "/api/preview/62/626b62e8-acaf-4730-bd8c-afd3fb51ac79.jpg",
    name: "NOVA | 035",
  },

  {
    image: "/api/preview/54/5465c54f-00eb-4746-a428-24bb5a2e9881.jpg",
    name: "NOVA | 037",
  },
  {
    image: "/api/preview/3c/3c525674-cdf7-439a-86b7-9a62210371a4.jpg",
    name: "NOVA | 038",
  },
  {
    image: "/api/preview/f4/f43e4c54-9730-4315-bf92-fe8fe1543946.jpg",
    name: "NOVA | 039",
  },
  {
    image:
      "/api/preview/46/46d8a065-f43c-4e26-a726-12171513ab5a.jpg?w=1920&q=95",
    name: "NOVA | 044",
  },
  {
    image:
      "/api/preview/05/058c235b-ea3b-438d-8476-e83907a2151b.jpg?w=1920&q=95",
    name: "NOVA | 045",
  },
  {
    image:
      "/api/preview/81/81cfe4b5-de60-4bf9-9e90-7abad58d6d2d.jpg?w=1920&q=95",
    name: "NOVA | 046",
  },
  {
    image:
      "/api/preview/88/88679008-87ff-4a86-be00-c4f303599014.jpg?w=1920&q=95",
    name: "NOVA | 047",
  },
  {
    image:
      "/api/preview/23/23282cc9-0564-483a-b7cc-41acf79a50c9.jpg?w=1920&q=95",
    name: "NOVA | U01",
  },
  {
    image:
      "/api/preview/72/72cbaaee-ec83-4cd5-a142-db3073e11ed6.jpg?w=1920&q=95",
    name: "NOVA | U02",
  },
  {
    image:
      "/api/preview/ef/ef5fb642-44a2-4b1c-b622-f6e7269f9009.jpg?w=1920&q=95",
    name: "NOVA | U03",
  },
  {
    image:
      "/api/preview/4c/4c0827fa-c810-49cb-9580-dec4586cf009.jpg?w=1920&q=95",
    name: "NOVA | U04",
  },
  {
    image:
      "/api/preview/9d/9d74668d-e224-4e5f-a4c4-abb1fd56dec8.jpg?w=1920&q=95",
    name: "NOVA | U05",
  },
  {
    image:
      "/api/preview/d9/d9bd7017-cd0f-4121-b5a9-a22ad5657d53.jpg?w=1920&q=95",
    name: "NOVA | R01",
  },
  {
    image:
      "/api/preview/8c/8c9d8cd7-2212-46d1-bba4-113c6ed157ca.jpg?w=1920&q=95",
    name: "NOVA | R01S",
  },
  {
    image:
      "/api/preview/f2/f29b7bfd-1855-4e77-8e9f-cc34ff498df6.jpg?w=1920&q=95",
    name: "NOVA | R02",
  },
  {
    image:
      "/api/preview/32/32490a4e-2ab5-4b71-888a-5c3c37681c1b.jpg?w=1920&q=95",
    name: "NOVA | R02S",
  },
  {
    image:
      "/api/preview/f0/f0db5e70-2993-4cda-b646-5f6f06743f54.jpg?w=1920&q=95",
    name: "NOVA | R03",
  },
  {
    image:
      "/api/preview/c3/c3699e78-2bde-4f4d-8c83-10ae298205ce.jpg?w=1920&q=95",
    name: "NOVA | R03S",
  },
  {
    image:
      "/api/preview/39/39d6d892-0d5b-4ef9-8bac-945ec8e1a6e2.jpg?w=1920&q=95",
    name: "NOVA | R04",
  },
  {
    image:
      "/api/preview/63/634ff550-bbd7-4abd-b2f0-0fc8e58b74d7.jpg?w=1920&q=95",
    name: "NOVA | R04S",
  },
];

const glassLineModels = [
  {
    image: "/api/preview/81/8134b160-c0ba-4a71-a402-10be30d9938c.jpg",
    name: "NOVA | 040",
  },
  {
    image: "/api/preview/c2/c2a5d246-8383-41de-818a-db698ff33cde.jpg",
    name: "NOVA | 041",
  },
  {
    image: "/api/preview/80/801f04d3-b1cf-4df8-86d1-4e15b534ff9a.jpg",
    name: "NOVA | 042",
  },
  {
    image: "/api/preview/a5/a512abf5-ca99-4a8b-9ea2-bc2d94be2835.jpg",
    name: "NOVA | 043",
  },
];

const pirueModels = [
  {
    image: "/api/preview/ef/efa6333a-860c-4f71-8b66-5e06e6da42af.jpg",
    name: "PIRUE | 001",
  },
  {
    image: "/api/preview/38/38256e7c-320a-4663-882c-1ca61b6f7882.jpg",
    name: "PIRUE | 002",
  },
  {
    image: "/api/preview/91/91c40aba-9876-45ff-ae04-b47428f32c6f.jpg",
    name: "PIRUE | 003",
  },
  {
    image: "/api/preview/2a/2a0e0699-a03b-4051-8794-1ffd6942fc31.jpg",
    name: "PIRUE | 004",
  },
  {
    image: "/api/preview/51/518d54a2-3f04-4f4d-8935-b2fef172b385.jpg",
    name: "PIRUE | 005",
  },
  {
    image: "/api/preview/66/666f666f-7409-4f2f-9c2d-9b0336d2a310.jpg",
    name: "PIRUE | 006",
  },
  {
    image: "/api/preview/5b/5b264410-8e80-44a6-b928-fc280185986d.jpg",
    name: "PIRUE | 007",
  },
  {
    image: "/api/preview/c3/c32b90b8-dc97-4ea3-8cd1-ac323165efea.jpg",
    name: "PIRUE | 008",
  },
  {
    image: "/api/preview/4f/4f716dd0-e5c6-452c-ac45-c6f0f63eca61.jpg",
    name: "PIRUE | 101",
  },
  {
    image: "/api/preview/9f/9ff9727e-5646-4362-b832-812b9f23f02c.jpg",
    name: "PIRUE | 102",
  },
];

const nobeModels = [
  {
    image: "/api/preview/ef/efa6333a-860c-4f71-8b66-5e06e6da42af.jpg",
    name: "PIRUE | 001",
  },
  {
    image: "/api/preview/4e/4e5c7854-7475-4052-af11-4d354221430e.jpg",
    name: "NOBE | 100",
  },
  {
    image: "/api/preview/9f/9fefb21e-9978-4f77-9f9e-750ace9eebb0.jpg",
    name: "NOBE | 101",
  },
  {
    image: "/api/preview/c9/c9af078b-c5ba-42b0-8afa-3e8b4fccd209.jpg",
    name: "NOBE | 102",
  },
  {
    image: "/api/preview/36/36f9ad25-2023-46e8-9cf6-6dd1720795f3.jpg",
    name: "NOBE | 103",
  },
  {
    image: "/api/preview/76/76b39de4-c571-4d3f-9a3c-f5a1eb2eb05e.jpg",
    name: "NOBE | 104",
  },
  {
    image: "/api/preview/0b/0bdf5884-362c-4752-8cf3-c3edcf2de0fb.jpg",
    name: "NOBE | 105",
  },
  {
    image: "/api/preview/6d/6d94c029-2198-4aee-ab7b-bcfea0a73a53.jpg",
    name: "NOBE | 106",
  },
  {
    image: "/api/preview/bd/bdd2a956-2d63-4ba2-9f5d-8e8c2244524c.jpg",
    name: "NOBE | 107",
  },
  {
    image: "/api/preview/81/81c157bb-b40e-424a-bdac-6afe1bd3f1c5.jpg",
    name: "NOBE | 108",
  },
  {
    image: "/api/preview/fc/fcc5fa1c-513a-42ad-9a47-2f289f717973.jpg",
    name: "NOBE | 109",
  },
  {
    image: "/api/preview/4a/4a19db63-4402-4a1e-be41-860513fead4c.jpg",
    name: "NOBE | 110",
  },
  {
    image: "/api/preview/2f/2f82d014-56ac-4152-862a-472628e4f8fe.jpg",
    name: "NOBE | 111",
  },
  {
    image: "/api/preview/bd/bd357224-d046-44b9-b7fe-96d6b940d428.jpg",
    name: "NOBE | 112",
  },
  {
    image: "/api/preview/44/44860734-2c1e-4be4-b402-57a3916b2bc6.jpg",
    name: "NOBE | 113",
  },
  {
    image: "/api/preview/79/795cb981-47a6-4def-84cd-8acf606c26b5.jpg",
    name: "NOBE | 114",
  },
  {
    image: "/api/preview/fd/fd6d7f0f-042f-4cba-b570-1ed5e2cf4829.jpg",
    name: "NOBE | 115",
  },
];

const calModels = [
  {
    image:
      "https://www.drzwi-cal.pl/wp-content/uploads/2023/04/2fd5b861-fc1f-4cf6-b27a-05094ab6fc4a-960x700.jpg",
    name: "Vintage",
  },
  {
    image:
      "https://www.drzwi-cal.pl/wp-content/uploads/2020/09/kolora-960x700.jpg",
    name: "Kolora",
  },
  {
    image:
      "https://www.drzwi-cal.pl/wp-content/uploads/2023/07/arche_zielonkawa_wiz-960x700.jpg",
    name: "Idylla",
  },
  {
    image: "https://www.drzwi-cal.pl/wp-content/uploads/2019/02/alutherm-1.jpg",
    name: "Alutherm",
  },
  {
    image: "https://www.drzwi-cal.pl/wp-content/uploads/2019/02/rycerska.jpg",
    name: "Rycerska",
  },
  {
    image:
      "https://www.drzwi-cal.pl/wp-content/uploads/2023/04/b2d4eb87-3b38-4f7f-aedb-a150f3cac679-960x700.jpg",
    name: "Muzyczna",
  },
  {
    image:
      "https://www.drzwi-cal.pl/wp-content/uploads/2021/03/zlicv4_2019_08_13a-960x700.jpg",
    name: "Arbo",
  },
  {
    image: "https://www.drzwi-cal.pl/wp-content/uploads/2019/02/klasyczna.jpg",
    name: "Klasyczna",
  },
];

export default DoorsPage;
