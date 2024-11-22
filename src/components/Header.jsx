import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";
import BMLogo from "../assets/bm_logo_cut.png";
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white p-4 md:px-12 border-b-[1px] border-gray-200 flex items-center justify-between relative z-50">
      <Link to="/" className="text-xl font-bold text-gray-800">
        <img src={BMLogo} alt="B&M Logo" className="w-12 md:w-20" />
      </Link>
      <motion.button
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="block text-gray-950 text-2xl lg:hidden"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <FiMenu />
      </motion.button>
      <div className="hidden lg:flex items-center gap-6">
        {navLinks.map((link) => (
          <NavLink key={link.text} text={link.text} to={link.to} />
        ))}
      </div>
      <NavMenu isOpen={isOpen} />
    </header>
  );
};

const NavLink = ({ text, to }) => (
  <Link
    to={to}
    className="font-medium text-gray-700 hover:text-indigo-600 transition"
  >
    {text}
  </Link>
);

const NavMenu = ({ isOpen }) => (
  <motion.div
    variants={menuVariants}
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    className="absolute bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4 p-4 z-50"
  >
    {navLinks.map((link) => (
      <Link
        key={link.text}
        to={link.to}
        className="text-lg font-medium text-gray-800 hover:text-indigo-600 transition"
      >
        {link.text}
      </Link>
    ))}
  </motion.div>
);

const navLinks = [
  { text: "Okna i drzwi", to: "/okna-i-drzwi" },
  { text: "Bramy garażowe", to: "/bramy-garazowe" },
  { text: "Bramy przemysłowe", to: "/bramy-przemyslowe" },
  { text: "Drzwi zewnętrzne", to: "/drzwi-zewnetrzne" },
  { text: "Rolety i żaluzje", to: "/rolety-i-zaluzje" },
  { text: "Ogrodzenia", to: "/ogrodzenia" },
  { text: "Ogrody zimowe", to: "/ogrody-zimowe" },
  { text: "Inteligentny dom", to: "/inteligentny-dom" },
  { text: "Kontakt", to: "/kontakt" },
];

const menuVariants = {
  open: {
    scaleY: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.1,
    },
  },
  closed: {
    scaleY: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.1,
    },
  },
};

export default Header;
