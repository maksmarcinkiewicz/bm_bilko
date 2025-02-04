import { motion } from "framer-motion";
import { useRef } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import InspirationBottom from "./InspirationBottom";
const DoorsPage = () => {
  return (
    <motion.div
      className="bg-gray-100 text-gray-800"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <HeroSectionCreo />
      <ModelsSection title="Kolekcja CREO" models={creoModels} />
      <HeroSectionNova />
      <ModelsSection title="Kolekcja NOVA" models={novaModels} />
      <ModelsSection title="Kolekcja Glass Line" models={glassLineModels} />
      <HeroSectionPirue />
      <ModelsSection title="Kolekcja PIRUE" models={pirueModels} />
      <InspirationBottom />
    </motion.div>
  );
};

const HeroSectionCreo = () => (
  <div
    className="relative bg-cover bg-center h-[80vh] flex items-center justify-center"
    style={{
      backgroundImage:
        "url('https://www.wisniowski.pl/api/preview/72/724aaa54-9865-4b67-88d7-17e8264f5b59.jpg?w=1920&q=75')",
    }}
  >
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
    <div className="relative text-center text-white">
      <h1 className="text-5xl font-extrabold mb-6 drop-shadow-lg">
        Drzwi wejściowe CREO
      </h1>
      <p className="text-lg font-light max-w-2xl mx-auto drop-shadow-lg">
        Łączą w sobie wysoką termoizolację z bezpieczeństwem i Twoją wizją domu.
      </p>
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
    image: "/api/preview/0f/0f59589d-28e4-48b9-849c-5b43cf66d5e4.jpg",
    name: "NOVA | 006",
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
    image: "/api/preview/38/3857315a-afb6-4e72-bcd5-030dc67afb16.jpg",
    name: "NOVA | 017",
  },
  {
    image: "/api/preview/32/322e09aa-6b34-4bcf-9543-0f9918d58e8d.jpg",
    name: "NOVA | 018",
  },
  {
    image: "/api/preview/d2/d2349eba-a5ca-4653-a8ff-83033a2e0cca.jpg",
    name: "NOVA | 019",
  },
  {
    image: "/api/preview/76/76296d6a-4504-486c-9ba1-f9c173c091ea.jpg",
    name: "NOVA | 020",
  },
  {
    image: "/api/preview/8d/8d3d05fe-26e1-40a4-9487-3317a33f5385.jpg",
    name: "NOVA | 021",
  },
  {
    image: "/api/preview/2b/2b1c5b16-2488-426c-a504-1911bc7af839.jpg",
    name: "NOVA | 022",
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
    image: "/api/preview/db/db91c8d1-1bf1-458e-8f3c-ee47aabcb826.jpg",
    name: "NOVA | 026",
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
    image: "/api/preview/ff/ffb1cd0e-388b-4634-a051-e2004e36e98a.jpg",
    name: "NOVA | 030",
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
    image: "/api/preview/54/54852b24-411f-4e15-9c03-6a362dc2fe67.jpg",
    name: "NOVA | 036",
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

export default DoorsPage;
