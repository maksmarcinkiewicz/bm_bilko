
function WhyBM() {
  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-3xl font-bold text-center mb-6">Dlaczego B&M?</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <div className="p-4 border rounded-lg shadow-sm bg-gray-100 text-center">
            <h3 className="text-lg font-semibold">Najwyższa jakość</h3>
            <p className="text-sm mt-2">Produkty spełniające wszystkie standardy.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-100 text-center">
            <h3 className="text-lg font-semibold">Dostosowane rozwiązania</h3>
            <p className="text-sm mt-2">Idealne dla każdego klienta.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm bg-gray-100 text-center">
            <h3 className="text-lg font-semibold">Profesjonalizm</h3>
            <p className="text-sm mt-2">Doświadczony zespół specjalistów.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default WhyBM;
