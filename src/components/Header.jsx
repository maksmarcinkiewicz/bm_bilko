import { motion } from "framer-motion";
import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";
import BMLogo from "../assets/bm_logo_cut.png";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation(); // For active link detection

  const closeMenu = () => setIsOpen(false); // Funkcja zamykająca menu

  return (
    <header className="bg-white p-4 md:px-12 border-b-[1px] border-gray-200 flex items-center justify-between relative z-50">
      <Link to="/" className="text-xl font-bold text-gray-800">
        <motion.img src={BMLogo} alt="B&M Logo" className="w-12 md:w-20" whileHover={{ scale: 1.1 }} />
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
          <NavLink
            key={link.text}
            text={link.text}
            to={link.to}
            isActive={location.pathname === link.to} // Highlight active link
          />
        ))}
      </div>
      <NavMenu isOpen={isOpen} currentPath={location.pathname} closeMenu={closeMenu} />
    </header>
  );
};

const NavLink = ({ text, to, isActive, onClick }) => (
  <motion.div className="relative" whileHover={{ scale: 1.1 }}>
    <Link
      to={to}
      onClick={onClick} // Zamykamy menu po kliknięciu
      className={`font-medium text-gray-700 hover:text-[#8DA21A] transition ${
        isActive ? "text-[#8DA21A]" : ""
      }`}
    >
      {text}
    </Link>
    <motion.div
      layoutId="underline"
      className="absolute left-0 right-0 h-[2px] bg-[#8DA21A]"
      initial={false}
      animate={{
        scaleX: isActive ? 1 : 0,
        opacity: isActive ? 1 : 0,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
    />
  </motion.div>
);

const NavMenu = ({ isOpen, currentPath, closeMenu }) => (
  <motion.div
    variants={menuVariants}
    initial="closed"
    animate={isOpen ? "open" : "closed"}
    className="absolute bg-white shadow-lg left-0 right-0 top-full origin-top flex flex-col gap-4 p-4 z-50"
  >
    {navLinks.map((link) => (
      <NavLink
        key={link.text}
        text={link.text}
        to={link.to}
        isActive={currentPath === link.to}
        onClick={closeMenu} // Wywołaj funkcję zamykającą menu
      />
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
      duration: 0.4,
      when: "afterChildren",
      ease: [0.25, 0.1, 0.25, 1], 
      staggerChildren: 0.1,
    },
  },
};

export default Header;
