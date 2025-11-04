import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState } from "react";

export default function Carousel({ children: slides }) {
  const [curr, setCurr] = useState(0);

  const prev = () =>
    setCurr((curr) => (curr === 0 ? slides.length - 1 : curr - 1));

  const next = () =>
    setCurr((curr) => (curr === slides.length - 1 ? 0 : curr + 1));

  return (
    <div className="relative w-full max-w-4xl mx-auto overflow-hidden rounded-2xl shadow-lg">
      {/* Container dos slides */}
      <div
        className="flex transition-transform ease-out duration-500"
        style={{
          transform: `translateX(-${curr * 100}%)`,
          width: `${slides.length * 100}%`,
        }}
      >
        {slides.map((slide, index) => (
          <div key={index} className="w-full flex-shrink-0 flex justify-center">
            {slide}
          </div>
        ))}
      </div>

      {/* Botão anterior */}
      <button
        onClick={prev}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full text-gray-800 shadow-lg hover:scale-110 transition"
      >
        <ChevronLeft size={30} />
      </button>

      {/* Botão próximo */}
      <button
        onClick={next}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/90 p-3 rounded-full text-gray-800 shadow-lg hover:scale-110 transition"
      >
        <ChevronRight size={30} />
      </button>

      {/* Indicadores */}
      <div className="absolute bottom-3 flex justify-center w-full gap-2">
        {slides.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-all ${
              curr === i ? "bg-gray-800 scale-110" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}