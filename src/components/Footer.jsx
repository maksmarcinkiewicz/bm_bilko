function Footer() {
  return (
    <footer className="bg-[#1F1F1F] text-white">
      <div className="container mx-auto py-10 px-8">
        {/* Górna sekcja z informacjami */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Informacje o firmie */}
          <div>
            <h2 className="text-lg font-bold mb-4">B&M - Twoje rozwiązania</h2>
            <p className="text-sm text-gray-400">
              Jesteśmy liderem w dostarczaniu wysokiej jakości okien, drzwi,
              bram garażowych, oraz systemów inteligentnego domu. Zapewniamy
              najlepsze rozwiązania dla Twojego domu i ogrodu.
            </p>
          </div>

          {/* Linki nawigacyjne */}
          <div>
            <h2 className="text-lg font-bold mb-4">Nawigacja</h2>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <a href="/okna-i-drzwi" className="hover:text-gray-300">
                  Okna i Drzwi
                </a>
              </li>
              <li>
                <a href="/bramy-garazowe" className="hover:text-gray-300">
                  Bramy Garażowe
                </a>
              </li>
              <li>
                <a href="/drzwi-zewnetrzne" className="hover:text-gray-300">
                  Drzwi Zewnętrzne
                </a>
              </li>
              <li>
                <a href="/rolety-i-zaluzje" className="hover:text-gray-300">
                  Rolety i Żaluzje
                </a>
              </li>
              <li>
                <a href="/ogrodzenia" className="hover:text-gray-300">
                  Ogrodzenia
                </a>
              </li>
              <li>
                <a href="/ogrody-zimowe" className="hover:text-gray-300">
                  Ogrody Zimowe
                </a>
              </li>
              <li>
                <a href="/inteligentny-dom" className="hover:text-gray-300">
                  Inteligentny Dom
                </a>
              </li>
              <li>
                <a href="/kontakt" className="hover:text-gray-300">
                  Kontakt
                </a>
              </li>
            </ul>
          </div>

          {/* Kontakt */}
          <div>
            <h2 className="text-lg font-bold mb-4">Kontakt</h2>
            <ul className="text-sm text-gray-400 space-y-2">
              <li>
                <span className="font-semibold text-white">Adres:</span> ul.
                Przykładowa 1, 00-123 Warszawa
              </li>
              <li>
                <span className="font-semibold text-white">Telefon:</span>{" "}
                <a href="tel:+48123456789" className="hover:text-gray-300">
                  +48 123 456 789
                </a>
              </li>
              <li>
                <span className="font-semibold text-white">E-mail:</span>{" "}
                <a href="mailto:kontakt@bm.pl" className="hover:text-gray-300">
                  kontakt@bm.pl
                </a>
              </li>
              <li>
                <span className="font-semibold text-white">
                  Godziny otwarcia:
                </span>{" "}
                Pon-Pt: 8:00 - 16:00
              </li>
            </ul>
          </div>
        </div>

        {/* Dolna sekcja z prawami autorskimi */}
        <div className="border-t border-gray-700 mt-8 pt-4">
          <p className="text-center text-sm text-gray-500">
            &copy; {new Date().getFullYear()} B&M. Wszelkie prawa zastrzeżone.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
