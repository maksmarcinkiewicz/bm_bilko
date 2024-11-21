function InspirationSection() {
  const images = [
    "https://via.placeholder.com/300x400?text=Zdjęcie+1",
    "https://via.placeholder.com/300x400?text=Zdjęcie+2",
    "https://via.placeholder.com/300x400?text=Zdjęcie+3",
    "https://via.placeholder.com/300x400?text=Zdjęcie+4",
    "https://via.placeholder.com/300x400?text=Zdjęcie+5",
  ];

  return (
    <section className="bg-gray-800 text-white py-12 px-4">
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Inspiracje</h2>
        <p className="text-lg md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          Jesteśmy pewni, że nasze porady i inspiracje pomogą Wam osiągnąć cel i
          stworzyć dom, który nie będzie tylko budynkiem. Czujcie się jak u
          siebie – czerpcie pełnymi garściami z materiałów, które stworzyliśmy
          specjalnie dla Was!
        </p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-lg overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
          >
            <img
              src={image}
              alt={`Inspiracja ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}

export default InspirationSection;
