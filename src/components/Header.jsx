import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="bg-gray-900 text-white">
      <div className="container mx-auto flex justify-between items-center p-4">
        <div className="text-xl font-bold"><Link to="/">B&M</Link></div>
        <nav>
          <ul className="hidden md:flex space-x-6 text-sm">
            <li><Link to="/okna-i-drzwi" className="hover:text-gray-400">Okna i drzwi</Link></li>
            <li><Link to="/bramy-garazowe" className="hover:text-gray-400">Bramy garażowe</Link></li>
            <li><Link to="/drzwi-zewnetrzne" className="hover:text-gray-400">Drzwi zewnętrzne</Link></li>
            <li><Link to="/rolety-i-zaluzje" className="hover:text-gray-400">Rolety i żaluzje</Link></li>
            <li><Link to="/ogrodzenia" className="hover:text-gray-400">Ogrodzenia</Link></li>
            <li><Link to="/ogrody-zimowe" className="hover:text-gray-400">Ogrody zimowe</Link></li>
            <li><Link to="/inteligentny-dom" className="hover:text-gray-400">Inteligentny dom</Link></li>
            <li><Link to="/kontakt" className="hover:text-gray-400">Kontakt</Link></li>
          </ul>
          <div className="block md:hidden">
            <button className="text-gray-400 focus:outline-none">
              <svg className="w-6 h-6" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
