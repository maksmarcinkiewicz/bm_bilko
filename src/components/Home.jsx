import HeroBanner from "./HeroBanner";
import WhyBM from "./WhyBM";
import ContactForm from "./ContactForm";

function Home() {
    return(<div className="bg-gray-50 text-gray-900">
        <main>
          <HeroBanner />
          <WhyBM />
          <ContactForm />
        </main>
      </div>)
}
export default Home