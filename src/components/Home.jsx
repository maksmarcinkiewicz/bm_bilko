import WhyBM from "./WhyBM";
import ContactForm from "./ContactForm";
import HeroCarousel from "./HeroCarousel";
import ProjectsShowcase from "./ProjectsShowcase";
import InspirationSection from "./InspirationSection";

function Home() {
  return (
    <div className="text-gray-900">
      <main>
        <HeroCarousel />
        <WhyBM />
        <ProjectsShowcase />
        <InspirationSection />
        <ContactForm />
      </main>
    </div>
  );
}
export default Home;
