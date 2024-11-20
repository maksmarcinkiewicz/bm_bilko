
function ContactForm() {
  return (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6">Zapytaj o wycenę</h2>
        <form className="max-w-md mx-auto space-y-4">
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
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Wyślij
          </button>
        </form>
      </div>
    </section>
  );
}

export default ContactForm;
