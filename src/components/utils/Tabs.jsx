import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Tabs = ({ activeTab, setActiveTab }) => {
  const [isScrollingUp, setIsScrollingUp] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isAtTop, setIsAtTop] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsScrollingUp(true);
      } else {
        setIsScrollingUp(false);
      }

      setIsAtTop(currentScrollY === 0);
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <motion.div className="fixed left-0 right-0 bg-white shadow-md border-b border-gray-300 transition-all duration-300 z-50 top-20 md:top-24 mt-8">
      <div className="container mx-auto px-4 md:px-8 lg:px-24">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 md:gap-4 py-3">
          {tabList.map((tab) => (
            <button
              key={tab.id}
              className={`py-2 px-4 md:px-6 rounded-sm transition-all font-medium text-sm md:text-base whitespace-nowrap text-center ${
                activeTab === tab.id
                  ? "bg-gray-900 text-white shadow-lg"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const tabList = [
  { id: "MakroPro", label: "MakroPro 2.0" },
  { id: "MakroTherm", label: "MakroTherm 2.0" },
  { id: "MakroPro100", label: "MakroPro 100 2.0" },
  { id: "Automation", label: "Automatyka" },
];

export default Tabs;
