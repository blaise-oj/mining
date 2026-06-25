import { useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

import hero1 from "../assets/hero1.jpg";
import hero2 from "../assets/hero2.jpg";
import hero3 from "../assets/hero3.jpg";

const slides = [
  {
    image: hero1,
    smallTitle: "Welcome to",
    title: "State Department for Mining",
    subtitle: "Promote sustainable development of the extractives sector",
  },
  {
    image: hero2,
    smallTitle: "Explore",
    title: "Blue Economy Services",
    subtitle: "Supporting fisheries, maritime growth and coastal development",
  },
  {
    image: hero3,
    smallTitle: "Track Your",
    title: "Agency Application Status",
    subtitle: "Use your tracking number to follow your request progress",
  },
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all duration-[1400ms] ease-in-out ${
            index === current
              ? "opacity-100 scale-100 z-10"
              : "opacity-0 scale-110 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />

          <div className="absolute inset-0 bg-black/25"></div>

          <div className="absolute inset-0 flex items-center justify-center text-center text-white px-4">
            <div
              className={`transition-all duration-1000 ${
                index === current
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
            >
              <p className="text-4xl font-light mb-1">{slide.smallTitle}</p>

              <h1 className="text-5xl font-extrabold drop-shadow-lg">
                {slide.title}
              </h1>

              <p className="text-xl mt-3 drop-shadow-md">
                {slide.subtitle}
              </p>

              <button className="mt-5 bg-[#ef2b0c] hover:bg-[#c92106] text-white font-bold px-7 py-3 rounded-sm transition">
                READMORE
              </button>
            </div>
          </div>
        </div>
      ))}

      <button
        onClick={prevSlide}
        className="absolute left-5 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white w-10 h-10 flex items-center justify-center"
      >
        <ChevronLeft size={28} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-5 top-1/2 -translate-y-1/2 z-30 bg-white/90 hover:bg-white w-10 h-10 flex items-center justify-center"
      >
        <ChevronRight size={28} />
      </button>

      <div className="absolute bottom-5 left-1/2 -translate-x-1/2 z-30 flex gap-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`h-1 transition-all ${
              index === current ? "w-8 bg-white" : "w-6 bg-white/60"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;