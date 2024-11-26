import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { motion } from "framer-motion";

import "swiper/css";
import "swiper/css/navigation";

// Komponent bannera
const FenceBanner = () => {
  const bannerImages = [
    "https://www.wisniowski.pl/api/preview/43/43ab9e98-fe4a-469f-b18b-dac01b98db70.jpg?w=1200&q=95",
    "https://www.wisniowski.pl/api/preview/61/61f32a49-4edc-43db-bee0-d376aca0e01e.jpg?w=1200&q=95",
    "https://www.wisniowski.pl/api/preview/11/11a6c9d4-8b9d-44e8-944e-320360702d60.jpg?w=1920&q=100",
  ];

  return (
    <motion.div
      className="w-full overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <div className="relative">
        <div className="flex">
          {bannerImages.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`Ogrodzenie ${idx + 1}`}
              className="w-full h-[400px] object-cover"
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

// Uniwersalny slider
const UniversalSlider = ({ title, products }) => {
  return (
    <div className="bg-gray-100 py-8">
      <h2 className="text-2xl font-bold text-center mb-8">{title}</h2>
      <Swiper
        modules={[Navigation]}
        navigation
        spaceBetween={50}
        slidesPerView={1}
        className="w-full"
      >
        {products.map((product, index) => (
          <SwiperSlide key={index}>
            <div className="flex flex-col md:flex-row items-center bg-white shadow-md rounded-lg p-6">
              {/* Zdjęcie */}
              <img
                src={product.image}
                alt={`Ogrodzenie ${product.model}`}
                className="w-full md:w-1/2 h-[300px] object-contain rounded-lg mb-4 md:mb-0 md:mr-6"
              />
              {/* Opis */}
              <div className="text-center md:text-left md:w-1/2">
                <h3 className="text-lg font-semibold text-blue-700">
                  Model {product.model}
                </h3>
                <p className="text-gray-700">{product.description}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

// Dane dla poszczególnych kategorii
const ModernProducts = [
  {
    model: "AW.10.110",
    image:
      "https://www.wisniowski.pl/api/preview/ad/ad52a66f-5eec-4a36-aef5-5d34ccabea91.png?w=1080&q=95",
    description: "15 wzorów, różne rodzaje wypełnień",
  },
  {
    model: "AW.10.111",
    image:
      "https://www.wisniowski.pl/api/preview/e6/e683ca05-6627-4bb0-964e-56e9ac575a1f.png?w=1080&q=95",
    description: "15 wzorów, różne rodzaje wypełnień",
  },
  {
    model: "AW.10.112",
    image:
      "https://www.wisniowski.pl/api/preview/4b/4b09e27d-12bd-4e16-be08-d51a8e8f959e.png?w=1080&q=95",
    description: "15 wzorów, różne rodzaje wypełnień",
  },
  {
    model: "AW.10.114",
    image:
      "https://www.wisniowski.pl/api/preview/22/225b47cc-bf83-44b8-9c94-fb8d1c1bf2e4.png?w=1080&q=95",
    description: "15 wzorów, różne rodzaje wypełnień",
  },
  {
    model: "AW.10.115",
    image:
      "https://www.wisniowski.pl/api/preview/80/8043dec4-196f-4a08-afdb-e6c8b916346b.png?w=1080&q=95",
    description: "15 wzorów, różne rodzaje wypełnień",
  },
];

const HomeInclusiveProducts = [
  {
    model: "AW.10.200",
    image:
      "https://www.wisniowski.pl/api/preview/0d/0dd0ddb7-ab51-4f2d-ae6c-29ab48ef1721.png?w=1080&q=95",
    description: "Aplikacje ozdobne, personalizacja paneli",
  },
  {
    model: "AW.10.228",
    image:
      "https://www.wisniowski.pl/api/preview/fa/faa938c9-5103-4d47-ad09-1d76a1df36e1.png?w=1080&q=95",
    description: "Aplikacje ozdobne, personalizacja paneli",
  },
  {
    model: "AW.10.229",
    image:
      "https://www.wisniowski.pl/api/preview/1d/1d57c010-a4ad-4059-9dac-24f9a3e9b4ef.png?w=1080&q=95",
    description: "Aplikacje ozdobne, personalizacja paneli",
  },
  {
    model: "AW.10.230",
    image:
      "https://www.wisniowski.pl/api/preview/6e/6e2732a6-e6ad-4118-8fc1-423cb05a7ab5.png?w=1080&q=95",
    description: "Aplikacje ozdobne, personalizacja paneli",
  },
  {
    model: "AW.10.233",
    image:
      "https://www.wisniowski.pl/api/preview/a2/a28595a7-05ae-48f2-9e42-60b3f21a7f7d.png?w=1080&q=95",
    description: "Aplikacje ozdobne, personalizacja paneli",
  },
];

const LuxProducts = [
  {
    model: "AW.10.31",
    image:
      "https://www.wisniowski.pl/api/preview/76/76151298-2cc5-49ce-9ac6-867145418eaf.png?w=1080&q=95",
    description: "Ekskluzywne wzory, wysoka jakość wykończenia",
  },
  {
    model: "AW.10.33",
    image:
      "https://www.wisniowski.pl/api/preview/75/755a5f02-cf4e-4ecd-9de7-fc50f538ebd9.png?w=1080&q=95",
    description: "Ekskluzywne wzory, wysoka jakość wykończenia",
  },
  {
    model: "AW.10.34",
    image:
      "https://www.wisniowski.pl/api/preview/10/10ffdf32-57c3-4a7c-9ac9-e9a713d4f14c.png?w=1080&q=95",
    description: "Ekskluzywne wzory, wysoka jakość wykończenia",
  },
  {
    model: "AW.10.39",
    image:
      "https://www.wisniowski.pl/api/preview/35/35d5c17a-76ba-4801-8931-e26565a66708.png?w=1080&q=95",
    description: "Ekskluzywne wzory, wysoka jakość wykończenia",
  },
  {
    model: "AW.10.45",
    image:
      "https://www.wisniowski.pl/api/preview/ad/adce4f5d-ba62-4680-a8a9-f8b745a863ea.png?w=1080&q=95",
    description: "Ekskluzywne wzory, wysoka jakość wykończenia",
  },
  {
    model: "AW.10.46",
    image:
      "https://www.wisniowski.pl/api/preview/ec/ec35f9e6-3cb4-4842-a568-f09efd33047c.png?w=1080&q=95",
    description: "Ekskluzywne wzory, wysoka jakość wykończenia",
  },
];

const ClassicProducts = [
  {
    model: "AW.10.01",
    image:
      "https://www.wisniowski.pl/api/preview/4d/4db3d60d-ba84-4dc2-9a4e-756c1db2e905.png?w=1080&q=95",
    description: "13 wzorów, klasyczna estetyka i solidne wykonanie",
  },
  {
    model: "AW.10.02",
    image:
      "https://www.wisniowski.pl/api/preview/55/55054c67-b743-44fe-96f1-409572b0c8e8.png?w=1080&q=95",
    description: "13 wzorów, klasyczna estetyka i solidne wykonanie",
  },
  {
    model: "AW.10.04",
    image:
      "https://www.wisniowski.pl/api/preview/20/208de1a4-9066-401d-983c-5afdd3bfad44.png?w=1080&q=95",
    description: "13 wzorów, klasyczna estetyka i solidne wykonanie",
  },
  {
    model: "AW.10.05",
    image:
      "https://www.wisniowski.pl/api/preview/b9/b96860bf-39e6-4fd4-a47a-d8a35a3aa1f5.png?w=1080&q=95",
    description: "13 wzorów, klasyczna estetyka i solidne wykonanie",
  },
  {
    model: "AW.10.06",
    image:
      "https://www.wisniowski.pl/api/preview/70/7094775a-386d-47c4-b37d-0b5942b6549f.png?w=1080&q=95",
    description: "13 wzorów, klasyczna estetyka i solidne wykonanie",
  },
];

const StyleProducts = [
  {
    model: "AW.10.07",
    image:
      "https://www.wisniowski.pl/api/preview/f2/f2157663-4709-42de-9752-92da1fec703c.png?w=1080&q=95",
    description: "Stylowe wzory, wyjątkowe wykończenia, trwałe materiały",
  },
  {
    model: "AW.10.08",
    image:
      "https://www.wisniowski.pl/api/preview/bf/bf8f9d8d-c7db-4e0f-b540-f79a8285d930.png?w=1080&q=95",
    description: "Stylowe wzory, wyjątkowe wykończenia, trwałe materiały",
  },
  {
    model: "AW.10.09",
    image:
      "https://www.wisniowski.pl/api/preview/bb/bb48b859-2e9c-4aa2-8573-2f92ae152990.png?w=1080&q=95",
    description: "Stylowe wzory, wyjątkowe wykończenia, trwałe materiały",
  },
  {
    model: "AW.10.12",
    image:
      "https://www.wisniowski.pl/api/preview/63/63c933aa-8b3f-48b2-a1a2-2626845f45fb.png?w=1080&q=95",
    description: "Stylowe wzory, wyjątkowe wykończenia, trwałe materiały",
  },
  {
    model: "AW.10.14",
    image:
      "https://www.wisniowski.pl/api/preview/3a/3a2863dd-75a4-459b-a4d1-443889ee317b.png?w=1080&q=95",
    description: "Stylowe wzory, wyjątkowe wykończenia, trwałe materiały",
  },
];

const VarioProducts = [
  {
    model: "AW.10.81",
    image:
      "https://www.wisniowski.pl/api/preview/e5/e56266a3-c879-4fb5-a2e8-81e19d4bb7a4.png?w=1080&q=95",
    description: "Nowoczesne wzory z możliwością personalizacji.",
  },
  {
    model: "AW.10.82",
    image:
      "https://www.wisniowski.pl/api/preview/f2/f2b2c28a-d801-4b9c-8185-4a41c175d9b9.png?w=1080&q=95",
    description: "Nowoczesne wzory z możliwością personalizacji.",
  },
  {
    model: "AW.10.83",
    image:
      "https://www.wisniowski.pl/api/preview/17/17268ef6-d6cb-4c5b-8fe9-cfe4d9426338.png?w=1080&q=95",
    description: "Nowoczesne wzory z możliwością personalizacji.",
  },
  {
    model: "AW.10.84",
    image:
      "https://www.wisniowski.pl/api/preview/32/328ce645-da2e-4820-88fc-11ba5d067477.png?w=1080&q=95",
    description: "Nowoczesne wzory z możliwością personalizacji.",
  },
];

const PremiumProducts = [
  {
    model: "AW.10.63",
    image:
      "https://www.wisniowski.pl/api/preview/6b/6bd5fa0a-8522-45ee-aba2-9f21d2384660.png?w=1080&q=95",
    description: "Elegancka kolekcja o nowoczesnym designie.",
  },
  {
    model: "AW.10.64",
    image:
      "https://www.wisniowski.pl/api/preview/d9/d91b5fa2-5ec3-46bc-bd3c-434532bb7ea6.png?w=1080&q=95",
    description: "Elegancka kolekcja o nowoczesnym designie.",
  },
  {
    model: "AW.10.65",
    image:
      "https://www.wisniowski.pl/api/preview/80/806fe030-900a-4a9c-8c2b-6bbc5873ca01.png?w=1080&q=95",
    description: "Elegancka kolekcja o nowoczesnym designie.",
  },
  {
    model: "AW.10.66",
    image:
      "https://www.wisniowski.pl/api/preview/ce/cef210bc-6afb-41cb-85d7-f9ce42defbfd.png?w=1080&q=95",
    description: "Elegancka kolekcja o nowoczesnym designie.",
  },
  {
    model: "AW.10.67",
    image:
      "https://www.wisniowski.pl/api/preview/39/39e4e86c-54da-4b99-a6fe-b04070925f65.png?w=1080&q=95",
    description: "Elegancka kolekcja o nowoczesnym designie.",
  },
  {
    model: "AW.10.68",
    image:
      "https://www.wisniowski.pl/api/preview/93/93732024-845a-4dee-8b56-cf6972a3ca82.png?w=1080&q=95",
    description: "Elegancka kolekcja o nowoczesnym designie.",
  },
  {
    model: "AW.10.69",
    image:
      "https://www.wisniowski.pl/api/preview/92/92564492-501d-486c-86ea-749830c804b3.png?w=1080&q=95",
    description: "Elegancka kolekcja o nowoczesnym designie.",
  },
];

const BasicProducts = [
  {
    model: "AW.10.90",
    image:
      "https://www.wisniowski.pl/api/preview/4b/4b9c3a5a-25bf-47ec-9b3f-2fd1e0ffdbe9.png?w=1080&q=95",
    description: "Proste i funkcjonalne ogrodzenia o atrakcyjnej cenie.",
  },
  {
    model: "AW.10.91",
    image:
      "https://www.wisniowski.pl/api/preview/a4/a4b81c66-1f99-4f1c-a1c6-00fe40fbfd7f.png?w=1080&q=95",
    description: "Proste i funkcjonalne ogrodzenia o atrakcyjnej cenie.",
  },
  {
    model: "AW.10.92",
    image:
      "https://www.wisniowski.pl/api/preview/75/7577eba0-6cde-47f9-890f-e136a270a82d.png?w=1080&q=95",
    description: "Proste i funkcjonalne ogrodzenia o atrakcyjnej cenie.",
  },
  {
    model: "AW.10.93",
    image:
      "https://www.wisniowski.pl/api/preview/f3/f359c10f-b70b-4080-8e22-29159749d275.png?w=1080&q=95",
    description: "Proste i funkcjonalne ogrodzenia o atrakcyjnej cenie.",
  },
  {
    model: "AW.10.94",
    image:
      "https://www.wisniowski.pl/api/preview/5b/5b2cdeb7-6363-4c90-a4ae-c3a15e86d09a.png?w=1080&q=95",
    description: "Proste i funkcjonalne ogrodzenia o atrakcyjnej cenie.",
  },
];

// Strona z ogrodzeniami
const FencesPage = () => {
  return (
    <div className="bg-gray-100">
      {/* Baner */}
      <FenceBanner />

      {/* Slidery */}
      <div className="container mx-auto px-4 py-8">
        <UniversalSlider title="Ogrodzenia Modern" products={ModernProducts} />
        <UniversalSlider
          title="Ogrodzenia Home Inclusive"
          products={HomeInclusiveProducts}
        />
        <UniversalSlider title="Ogrodzenia Lux" products={LuxProducts} />
        <UniversalSlider
          title="Ogrodzenia Classic"
          products={ClassicProducts}
        />
        <UniversalSlider title="Ogrodzenia Style" products={StyleProducts} />
        <UniversalSlider title="Ogrodzenia Vario" products={VarioProducts} />
        <UniversalSlider
          title="Ogrodzenia Premium"
          products={PremiumProducts}
        />
        <UniversalSlider title="Ogrodzenia Basic" products={BasicProducts} />
      </div>
    </div>
  );
};

export default FencesPage;
