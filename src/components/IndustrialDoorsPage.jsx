import { motion } from "framer-motion";

const IndustrialDoorsPage = () => {
  const doorsData = [
    {
      type: "Bramy segmentowe",
      models: [
        {
          name: "MakroPro 2.0",
          description:
            "Bramy MakroPro 2.0 zbudowane są z ciepłych paneli stalowych o grubości 40 [mm] wypełnionych pianką poliuretanową. ",
          image:
            "https://www.wisniowski.pl/api/preview/1a/1a3b9f57-eab9-4e27-96e9-48f5aec9c50d.png?w=1080&q=95",
        },
        {
          name: "MakroPro ALU 2.0",
          description:
            "Bramy zbudowane są z paneli aluminiowych 40 [mm] bez przegrody termicznej, wypełnionych przeszkleniami akrylowymi. Dolny panel stalowy.",
          image:
            "https://www.wisniowski.pl/api/preview/bc/bc290b67-68fc-4acb-930c-cdf3a9ad92cb.png?w=1080&q=95",
        },
        {
          name: "MakroPro 2.0 ALU ISO",
          description:
            "Bramy zbudowane są z paneli aluminiowych 40 [mm] z przegrodą termiczną, wypełnionych przeszkleniami akrylowymi. Dolny panel stalowy.",
          image:
            "https://www.wisniowski.pl/api/preview/d4/d401d8d0-75a7-4da2-9663-8a074051e861.png?w=1080&q=95",
        },
        {
          name: "MakroPro 2.0 ELH",
          description:
            "Brama MakroPro 2.0 ELH została zaprojektowana tak, by można było uzupełnić ją o indywidualne wypełnienie. Oznacza to, że jej skrzydło może z zewnątrz może wyglądać dokładnie tak, jak oczekuje tego projektant lub inwestor.",
          image:
            "https://www.wisniowski.pl/api/preview/04/04e341c0-8910-421e-930a-00d1c862df04.jpg?w=1080&q=95",
        },
        {
          name: "MakroTherm 2.0",
          description:
            "Bramy MakroTherm 2.0 zbudowane są z ultraciepłych paneli stalowych o grubości 60 [mm] wypełnionych pianką poliuretanową. ",
          image:
            "https://www.wisniowski.pl/api/preview/a8/a894f404-8ebb-4e17-9405-9801272952a9.png?w=1080&q=95",
        },
        {
          name: "MakroPro 100 2.0",
          description:
            "Bramy MakroPro 100 2.0 zbudowane są z ciepłych paneli stalowych o grubości 40 [mm] wypełnionych pianką poliuretanową.",
          image:
            "https://www.wisniowski.pl/api/preview/bf/bfa6fc66-9671-4592-9e6f-24683634d50d.png?w=1080&q=95",
        },
        {
          name: "MakroPro 100 ALU 2.0",
          description:
            "Bramy zbudowane są z paneli aluminiowych 40 [mm] bez przegrody termicznej, wypełnionych przeszkleniami akrylowymi. Dolny panel stalowy.",
          image:
            "https://www.wisniowski.pl/api/preview/2c/2c19ba9f-0431-44fc-972f-0a52dbcc3ba7.png?w=1080&q=95",
        },
      ],
    },

    {
      type: "Bramy roletowe",
      models: [
        {
          name: "Bramy roletowe",
          description:
            "Funkcjonalne bramy roletowe zapewniające oszczędność miejsca i łatwość użytkowania. Idealne dla magazynów i zakładów przemysłowych.",
          image:
            "https://www.wisniowski.pl/api/preview/85/85225844-bd80-4c88-8466-fbdd64a96100.jpg?w=1920&q=100",
        },
      ],
    },
  ];

  return (
    <motion.div
      className="bg-gray-100"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Sekcja główna */}
      <header className="bg-[#1F1F1F] text-white text-center py-8">
        <h1 className="text-3xl font-bold">Bramy Przemysłowe</h1>
        <p className="text-lg mt-2">
          Oferujemy szeroki wybór bram przemysłowych, dopasowanych do każdego
          obiektu.
        </p>
      </header>

      {/* Typy bram przemysłowych */}
      <div className="container mx-auto px-4 py-8 space-y-12">
        {doorsData.map((category, index) => (
          <section key={index}>
            <h2 className="text-2xl font-semibold mb-4">{category.type}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {category.models.map((door, idx) => (
                <motion.div
                  key={idx}
                  className="bg-white shadow-lg rounded-lg p-6"
                  whileHover={{ scale: 1.05 }}
                >
                  <img
                    src={door.image}
                    alt={door.name}
                    className="w-full h-[200px] object-contain rounded-lg mb-4"
                  />
                  <h3 className="text-xl font-semibold">{door.name}</h3>
                  <p className="text-gray-700 mt-2">{door.description}</p>
                </motion.div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </motion.div>
  );
};

export default IndustrialDoorsPage;
