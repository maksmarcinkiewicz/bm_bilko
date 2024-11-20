import HeroBanner from "./HeroBanner";
import WhyBM from "./WhyBM";
import ContactForm from "./ContactForm";
import HeroCarousel from "./HeroCarousel";

function Home() {
    return(<div className="bg-gray-50 text-gray-900">
        <main>
         <HeroCarousel />
          <WhyBM />
          <ContactForm />
        </main>
      </div>)
}
export default Home