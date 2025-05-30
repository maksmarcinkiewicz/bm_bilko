import { useState, useRef, useEffect } from "react";

const VIDEO_SRC =
  "https://media.wisniowski.pl/b8/b8587e6f-f685-44ce-a6b4-b58b179cfb6d.mp4";
const POSTER_SRC =
  "https://media.wisniowski.pl/b8/b8587e6f-f685-44ce-a6b4-b58b179cfb6d.mp4"; // użyj właściwego posteru, jeśli masz jpg/png

const PrimeBlackEditionVideo = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalVideoRef = useRef(null);

  // Gdy otworzymy overlay, automatycznie zaczynamy odtwarzanie
  useEffect(() => {
    if (isOpen && modalVideoRef.current) {
      modalVideoRef.current.play();
    }
  }, [isOpen]);

  return (
    <section className="w-full bg-white">
      {/* Tekst nad wideo */}
      <div className="px-4 py-12 md:px-24 md:py-24 text-center">
        <h2 className="text-5xl font-light mb-4">PRIME Black Edition</h2>
        <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed text-lg">
          Gdy chcesz się wyróżnić, poznaj bramę PRIME w wersji Black Edition.
          Głęboka czerń wewnętrznej części płaszcza oraz detale: okucia, osłony,
          szyny, prowadnice i ościeżnice w tym samym kolorze podkreślą wyjątkowy
          design Twojego garażu.
        </p>
      </div>

      {/* Podgląd wideo z przyciskiem PLAY */}
      <div className="relative w-full h-0 pb-[56.25%] overflow-hidden">
        <video
          src={VIDEO_SRC}
          poster={POSTER_SRC}
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover"
        />
        <button
          onClick={() => setIsOpen(true)}
          className="absolute inset-0 flex justify-center items-center"
        >
          <span className="w-16 h-16 rounded-full border-2 border-white flex justify-center items-center">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="white"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </span>
        </button>
      </div>

      {/* Overlay pełnoekranowe */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex justify-center items-center z-50">
          {/* Przycisk zamknięcia */}
          <button
            onClick={() => {
              setIsOpen(false);
              // zatrzymaj odtwarzanie
              if (modalVideoRef.current) {
                modalVideoRef.current.pause();
                modalVideoRef.current.currentTime = 0;
              }
            }}
            className="absolute top-6 right-6 text-white p-2"
          >
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>

          {/* Wideo z kontrolkami */}
          <video
            ref={modalVideoRef}
            src={VIDEO_SRC}
            controls
            className="max-w-full max-h-full object-contain"
          />
        </div>
      )}
    </section>
  );
};

export default PrimeBlackEditionVideo;
