function InspirationSection() {
  const images = [
    "https://www.winart.com.pl/assets/1-xFLK_-XZ.jpg",
    "https://www.winart.com.pl/assets/2-jfyQXQG0.jpg",
    "https://www.winart.com.pl/assets/3-XqjfoUkc.jpg",
    "https://www.winart.com.pl/assets/5-8hP6LR54.jpg",
    "https://www.winart.com.pl/assets/7-fXMZYDEe.jpg",
  ];

  return (
    <section className="bg-[#1F1F1F] text-white py-12 px-4">
      <div className="mb-8">
        <h2 className="text-2xl md:text-4xl font-bold mb-4 md:px-12">
          Inspiracje
        </h2>
        <p className="text-md text-justify md:text-xl font-light leading-relaxed max-w-2xl mx-auto">
          Jesteśmy pewni, że nasze porady i inspiracje pomogą Wam osiągnąć cel i
          stworzyć dom, który nie będzie tylko budynkiem.
        </p>
      </div>
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 max-w-7xl mx-auto">
        {images.map((image, index) => (
          <div
            key={index}
            className="rounded-sm overflow-hidden shadow-lg transform hover:scale-105 transition duration-300"
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
