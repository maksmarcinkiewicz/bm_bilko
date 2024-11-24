import officeImg from "../assets/inside_office.png";

function ContactSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Lewa strona: Zdjęcie i tekst */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <div className="relative">
            <img
              src={officeImg}
              alt="Zdjęcie biura"
              className="rounded-lg shadow-lg w-full pt-14"
            />
            <div className="absolute top-0 left-0 bg-[#1F1F1F] bg-opacity-70 text-white p-6 rounded-lg">
              <h3 className="text-xl font-bold mb-2">Skontaktuj się z nami</h3>
              <p className="text-xs leading-relaxed">
                Masz pytania? Napisz do nas, a nasz zespół odpowie na Twoje
                zapytania tak szybko, jak to możliwe. Możesz również zadzwonić
                pod numer: <strong>+48 123 456 789</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Prawa strona: Formularz */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-[#3B3B1D] mb-6">
            Zapytaj o wycenę
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="w-full p-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3B3B1D]"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3B3B1D]"
            />
            <textarea
              placeholder="Twoja wiadomość"
              className="w-full p-3 border rounded-sm focus:outline-none focus:ring-2 focus:ring-[#3B3B1D]"
              rows="5"
            />
            <button
              type="submit"
              className="w-full bg-[#3B3B1D] text-white py-3 rounded-sm hover:[#3B3B1D] focus:outline-none focus:ring-2 focus:ring-[#3B3B1D]"
            >
              Wyślij
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;
