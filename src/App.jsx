import Header from "./components/Header";
import HeroBanner from "./components/HeroBanner";
import WhyBM from "./components/WhyBM";
import ContactForm from "./components/ContactForm";

function App() {
  return (
    <div className="bg-gray-50 text-gray-900">
      <Header />
      <main>
        <HeroBanner />
        <WhyBM />
        <ContactForm />
      </main>
    </div>
  );
}

export default App;
