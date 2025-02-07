const InspirationBottom = () => {
  const images = [
    {
      src: "https://www.wisniowski.pl/api/preview/7d/7dcf2288-8847-487d-91da-459bc2e7a82e.jpg?w=384&q=95",
      colSpan: "col-span-0",
      rowSpan: "row-span-0",
    },
    {
      src: "https://www.wisniowski.pl/api/preview/63/637cae03-e82c-481a-8ad1-943de10ea49b.jpg?w=384&q=95",
      colSpan: "col-span-0",
      rowSpan: "row-span-0",
    },
    {
      src: "https://www.wisniowski.pl/api/preview/16/160e983a-807a-4817-a8f4-9cc92b0b3319.jpg?w=384&q=95",
      colSpan: "col-span-0",
      rowSpan: "row-span-0",
    },
    {
      src: "https://www.wisniowski.pl/api/preview/9e/9e4a8230-5a74-4b87-8557-621bffe910c7.jpg?w=384&q=95",
      colSpan: "col-span-0",
      rowSpan: "row-span-0",
    },
    {
      src: "https://www.wisniowski.pl/api/preview/bd/bdeee00c-4319-4438-8b58-1bec97f27be6.jpg?w=384&q=95",
      colSpan: "col-span-0",
      rowSpan: "row-span-0",
    },
    {
      src: "https://www.wisniowski.pl/api/preview/dc/dcd9fc4c-28ef-4585-9578-673b848ec0e8.jpg?w=384&q=95",
      colSpan: "col-span-0",
      rowSpan: "row-span-0",
    },
    {
      src: "https://www.wisniowski.pl/api/preview/ff/ff1a7fe6-ced7-4081-b142-d07bcdc44cb3.jpg?w=384&q=95",
      colSpan: "col-span-0",
      rowSpan: "row-span-0",
    },
    {
      src: "https://www.wisniowski.pl/api/preview/02/028d0dd7-35c5-47e0-a322-0a5aa5ed8def.jpg?w=384&q=95",
      colSpan: "col-span-0",
      rowSpan: "row-span-0",
    },
  ];

  return (
    <div className="pt-12">
      <h2 className="md:px-24 text-5xl font-semibold  mb-4 px-4">Inspiracje</h2>
      <p className="md:px-24 text-gray-700 mb-8 text-xl px-4">
        Zainspiruj się naszymi realizacjami
      </p>
      <div className="grid grid-cols-4 grid-rows-2 gap-1">
        {images.map((image, index) => (
          <div
            key={index}
            className={`${image.colSpan} ${image.rowSpan} overflow-hidden `}
          >
            <img
              src={image.src}
              alt={`Inspiracja ${index + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InspirationBottom;
