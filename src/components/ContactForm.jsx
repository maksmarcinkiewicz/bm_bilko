function ContactSection() {
  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center lg:items-start">
        {/* Lewa strona: Zdjęcie i tekst */}
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0 lg:pr-8">
          <div className="relative">
            <img
              src="https://via.placeholder.com/600x400?text=Biuro+Kontaktowe"
              alt="Zdjęcie biura"
              className="rounded-lg shadow-lg w-full"
            />
            <div className="absolute top-0 left-0 bg-blue-600 bg-opacity-70 text-white p-6 rounded-lg">
              <h3 className="text-2xl font-bold mb-2">Skontaktuj się z nami</h3>
              <p className="text-sm leading-relaxed">
                Masz pytania? Napisz do nas, a nasz zespół odpowie na Twoje
                zapytania tak szybko, jak to możliwe. Możesz również zadzwonić
                pod numer: <strong>+48 123 456 789</strong>.
              </p>
            </div>
          </div>
        </div>

        {/* Prawa strona: Formularz */}
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-lg shadow-lg">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
            Zapytaj o wycenę
          </h2>
          <form className="space-y-4">
            <input
              type="text"
              placeholder="Imię i nazwisko"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="email"
              placeholder="Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <textarea
              placeholder="Twoja wiadomość"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
            />
            <button
              type="submit"
              className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
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
