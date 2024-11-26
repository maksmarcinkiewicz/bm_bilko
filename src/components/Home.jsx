import WhyBM from "./WhyBM";
import ContactForm from "./ContactForm";
import HeroCarousel from "./HeroCarousel";
import ProjectsShowcase from "./ProjectsShowcase";
import InspirationSection from "./InspirationSection";
import Realizations from "./Realizations";

import { motion } from "framer-motion";

function Home() {
  return (
    <motion.div
      className="text-gray-900"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      <main>
        <HeroCarousel />
        <Realizations />
        <WhyBM />
        <ProjectsShowcase />
        <InspirationSection />
        <ContactForm />
      </main>
    </motion.div>
  );
}
export default Home;
