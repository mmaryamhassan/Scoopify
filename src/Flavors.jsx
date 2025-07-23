import React, { useState } from 'react';
import ChocolateFlavor  from './assets/chocolate.jpg';
import StrawberryFlavor from './assets/Strawww.jpeg';
import MixFruit         from './assets/mango.jpg';
import PistaFlavor from './assets/pista.jpg'

const FLAVORS = [
  { src: ChocolateFlavor,  alt: 'Chocolate ice-cream' },
  { src: StrawberryFlavor, alt: 'Strawberry ice-cream' },
  { src: MixFruit,         alt: 'Mix-fruit ice-cream' },
  { src: PistaFlavor,      alt: 'Pista ice-cream' },
];

const ChevronLeft  = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Flavors = () => {
  const [index, setIndex] = useState(0);

  const next = () => setIndex((i) => (i + 1) % FLAVORS.length);
  const prev = () => setIndex((i) => (i - 1 + FLAVORS.length) % FLAVORS.length);

  return (
    <section id="flavors" className="min-h-[35rem] md:min-h-[35rem] flex flex-col items-center justify-center py-2 px-6">
      <h1 className="font-extrabold text-4xl md:text-5xl text-center mb-8">
        <span className="bg-gradient-to-r from-red-400 to-pink-500 bg-clip-text text-transparent">
          Discover Your Next Favorite Flavor!
        </span>
      </h1>

      <div className="relative w-full max-w-lg md:max-w-4xl lg:max-w-3xl">
        <img
          src={FLAVORS[index].src}
          alt={FLAVORS[index].alt}
          className="w-full h-full max-h-[28rem] md:max-h-[32rem] lg:max-h-[36rem] object-cover rounded-3xl shadow-2xl transition-all duration-500 ease-out hover:scale-105 hover:shadow-[0_20px_40px_-10px_rgba(0,0,0,0.4)] hover:brightness-110"/>

        <button onClick={prev}
          className="absolute top-1/2 -left-4 md:-left-5 -translate-y-1/2 bg-white/80 backdrop-blur-sm cursor-pointer rounded-full p-2.5 shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
          aria-label="Previous flavor">
          <ChevronLeft />
        </button>

        <button onClick={next}
          className="absolute top-1/2 -right-4 md:-right-5 -translate-y-1/2 bg-white/80 backdrop-blur-sm rounded-full p-2.5 cursor-pointer shadow-lg hover:bg-white focus:outline-none focus:ring-2 focus:ring-pink-400 transition-all"
          aria-label="Next flavor">
          <ChevronRight />
        </button>

        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex space-x-2">
          {FLAVORS.map((_, i) => (
            <button
              key={i}
              onClick={() => setIndex(i)}
              className={`w-2.5 h-2.5 rounded-full transition-colors ${
                i === index ? 'bg-pink-500' : 'bg-gray-300 hover:bg-gray-400'
              }`}
              aria-label={`Go to flavor ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Flavors;