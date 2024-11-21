import { FaCheckCircle, FaCogs, FaUsers } from "react-icons/fa"; // Import ikon z react-icons

function WhyBM() {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        {/* Główna sekcja */}
        <div className="flex flex-col lg:flex-row items-center lg:items-start">
          {/* Tekst po lewej stronie */}
          <div className="lg:w-1/2 text-center lg:text-left mb-8 lg:mb-0">
            <img
              src="https://lh3.googleusercontent.com/p/AF1QipPsFn_LrgHwsewD-Lus6-3VMJScWv6bVT_CzLwF=s680-w680-h510"
              alt="Biuro B&M"
              className="w-full rounded-lg shadow-md mb-6"
            />

            <h2 className="text-2xl md:text-4xl font-bold mb-4">
              Dlaczego B&M?
            </h2>
            <p className="text-base md:text-lg text-gray-600 mb-6">
              B&M to firma, która od lat dostarcza rozwiązania najwyższej
              jakości, łącząc profesjonalizm z innowacyjnym podejściem. Jesteśmy
              dumni z tego, że możemy oferować produkty spełniające najwyższe
              standardy oraz indywidualnie dopasowane do potrzeb każdego
              klienta.
            </p>
            <p className="text-base md:text-lg text-gray-600">
              Nasz zespół składa się z wykwalifikowanych specjalistów, którzy z
              pasją realizują swoją pracę. Dzięki temu jesteśmy w stanie
              sprostać nawet najbardziej wymagającym projektom.
            </p>
          </div>

          {/* Kafelki po prawej stronie */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 lg:w-1/2 gap-4">
            <div className="p-6 border rounded-lg shadow-sm bg-gray-100 flex items-center">
              <FaCheckCircle className="text-blue-500 text-3xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Najwyższa jakość</h3>
                <p className="text-sm mt-2 text-gray-600">
                  Nasze produkty spełniają wszystkie standardy jakościowe,
                  zapewniając trwałość i niezawodność.
                </p>
              </div>
            </div>

            <div className="p-6 border rounded-lg shadow-sm bg-gray-100 flex items-center">
              <FaCogs className="text-green-500 text-3xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">
                  Dostosowane rozwiązania
                </h3>
                <p className="text-sm mt-2 text-gray-600">
                  Oferujemy produkty dostosowane do indywidualnych potrzeb i
                  wymagań każdego klienta.
                </p>
              </div>
            </div>

            <div className="p-6 border rounded-lg shadow-sm bg-gray-100 flex items-center">
              <FaUsers className="text-orange-500 text-3xl mr-4" />
              <div>
                <h3 className="text-lg font-semibold">Profesjonalizm</h3>
                <p className="text-sm mt-2 text-gray-600">
                  Nasz zespół specjalistów jest zawsze gotowy, by sprostać
                  oczekiwaniom naszych klientów.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyBM;
