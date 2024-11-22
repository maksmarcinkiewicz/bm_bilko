import React from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      {/* Nagłówek */}
      <header className="bg-blue-600 text-white py-8">
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center text-4xl font-bold"
        >
          Skontaktuj się z nami
        </motion.h1>
      </header>

      <main className="container mx-auto px-6 py-12 space-y-12">
        {/* Sekcja kontaktu */}
        <section className="grid lg:grid-cols-2 gap-8">
          {/* Formularz kontaktowy */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white shadow-md rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Wyślij wiadomość
            </h2>
            <form className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Imię i nazwisko
                </label>
                <input
                  type="text"
                  id="name"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Wpisz swoje imię"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Wpisz swój email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Wiadomość
                </label>
                <textarea
                  id="message"
                  rows="4"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-blue-500 focus:border-blue-500"
                  placeholder="Wpisz swoją wiadomość"
                ></textarea>
              </div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                type="submit"
                className="w-full bg-blue-600 text-white py-2 px-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Wyślij
              </motion.button>
            </form>
          </motion.div>

          {/* Zdjęcie biura */}
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <img
              src="https://via.placeholder.com/600x400"
              alt="Zdjęcie biura"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </section>

        {/* Sekcja z mapą i zdjęciem */}
        <section className="grid lg:grid-cols-2 gap-8 items-center">
          {/* Informacje o biurze */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
            className="bg-white shadow-md rounded-lg p-8"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-800">
              Nasze biuro
            </h2>
            <p className="text-gray-600 mb-4">
              Znajdujemy się w centrum miasta. Zapraszamy do kontaktu lub
              odwiedzin.
            </p>
            <div className="space-y-4">
              <div>
                <p className="font-semibold text-gray-700">Adres:</p>
                <p className="text-gray-600">
                  Ul. Przykładowa 10, 00-001 Warszawa
                </p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Telefon:</p>
                <p className="text-gray-600">+48 123 456 789</p>
              </div>
              <div>
                <p className="font-semibold text-gray-700">Email:</p>
                <p className="text-gray-600">kontakt@firma.pl</p>
              </div>
            </div>
          </motion.div>
          {/* Mapa Google */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-white shadow-md rounded-lg overflow-hidden"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2436.608560464706!2d21.01222911580094!3d52.22967597975726!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x471ecc669d6325df%3A0x9c548f0c20203b3!2sPa%C5%82ac%20Kultury%20i%20Nauki!5e0!3m2!1spl!2spl!4v1636141444923!5m2!1spl!2spl"
              width="100%"
              height="300"
              allowFullScreen=""
              loading="lazy"
              title="Lokalizacja biura"
            ></iframe>
          </motion.div>
        </section>
      </main>
    </div>
  );
};

export default ContactPage;
