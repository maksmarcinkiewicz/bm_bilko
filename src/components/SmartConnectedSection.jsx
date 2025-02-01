import { useNavigate } from "react-router-dom";

const SmartConnectedSection = () => {
  const navigate = useNavigate();

  const options = [
    {
      title: "WIŚNIOWSKI Connected",
      description:
        "Na dobry początek. Odkryj nową jakość w standardzie z bramami garażowymi WIŚNIOWSKI. Ciesz się inteligentnymi rozwiązaniami w Twoim domu zupełnie za darmo.",
      image:
        "https://www.wisniowski.pl/api/preview/46/4642fc05-2db3-489f-8b5d-2c4503cb2697.jpg", // przykładowy link
      onClick: () => navigate("/wisniowski-connected"),
    },
    {
      title: "TaHoma switch by Somfy",
      description:
        "Twój inteligentny dom. Połącz inteligentne urządzenia w Twoim domu za pomocą jednej aplikacji.",
      image:
        "https://www.wisniowski.pl/api/preview/a2/a2997af0-be68-481d-b421-b894c5c00307.jpg", // przykładowy link
      onClick: () => navigate("/tahoma-switch"),
    },
  ];

  return (
    <div className="md:px-24 px-4 py-12 bg-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-1">
        {options.map((option, index) => (
          <div
            key={index}
            className="relative cursor-pointer bg-gray-200 rounded-sm overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            onClick={option.onClick}
          >
            <img
              src={option.image}
              alt={option.title}
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gray-900 bg-opacity-50 flex flex-col justify-center items-start p-8 text-white">
              <h2 className="text-3xl font-semibold mb-4">{option.title}</h2>
              <p className="text-lg">{option.description}</p>
              <button className="mt-4 md:mt-16 px-4 py-2 bg-white text-black rounded-sm hover:bg-gray-200">
                Dowiedz się więcej
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartConnectedSection;
