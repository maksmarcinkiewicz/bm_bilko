
function HeroBanner() {
  return (
    <section className="bg-gray-200 py-8">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-2xl md:text-4xl font-bold mb-4">Witamy w B&M</h1>
        <p className="text-sm md:text-lg mb-6">Najlepsze rozwiązania dla Twojego domu i firmy</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <img src="/path/to/photo1.jpg" alt="Zdjęcie 1" className="w-full rounded-lg shadow-md" />
          <img src="/path/to/photo2.jpg" alt="Zdjęcie 2" className="w-full rounded-lg shadow-md" />
          <img src="/path/to/photo3.jpg" alt="Zdjęcie 3" className="w-full rounded-lg shadow-md" />
        </div>
      </div>
    </section>
  );
}

export default HeroBanner;
