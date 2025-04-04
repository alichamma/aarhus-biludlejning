'use client';

import Image from 'next/image';

export default function Hero() {
  const scrollToCars = () => {
    const element = document.getElementById('biler');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative h-[800px] md:h-[600px] overflow-hidden bg-gradient-to-br from-[#00E69D] to-[#00D9C6]">
      <div className="absolute inset-0 opacity-30">
        <Image
          src="/hero-bg.jpg"
          alt="Hero baggrund"
          fill
          className="object-cover object-[center_15%]"
          priority
        />
      </div>
      <div className="absolute inset-0 flex items-center justify-center px-4 pb-32 md:pb-0">
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Frihed på fire hjul – med bilabonnement i Aarhus
          </h1>
          <p className="text-xl md:text-2xl mb-8 flex flex-col gap-2">
            <span>Få din egen bil på månedsleje – uden udbetaling, uden binding.</span>
            <span>Du kører bare. Vi klarer resten.</span>
          </p>
          <button 
            onClick={scrollToCars}
            className="bg-white text-[#00E69D] px-8 py-4 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 mb-8"
          >
            🚗 Kom i gang – vælg bil og kør i dag!
          </button>
          
          {/* USP badges */}
          <div className="flex flex-col md:flex-row justify-center items-center gap-3 max-w-4xl mx-auto">
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-2.5 rounded-full text-white w-full md:w-auto">
              <span className="text-lg">✅</span>
              <span className="text-base">Ingen skjulte gebyrer</span>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-2.5 rounded-full text-white w-full md:w-auto">
              <span className="text-lg">✅</span>
              <span className="text-base">Fuld forsikring & service inkluderet</span>
            </div>
            <div className="flex items-center gap-3 bg-white/20 backdrop-blur-sm px-6 py-2.5 rounded-full text-white w-full md:w-auto">
              <span className="text-lg">✅</span>
              <span className="text-base">Afmeld når som helst</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Bølge SVG */}
      <div className="absolute bottom-0 left-0 w-full">
        <svg 
          viewBox="0 0 1440 320" 
          className="w-full h-24 md:h-32"
          preserveAspectRatio="none"
        >
          <path 
            fill="#FFFFFF" 
            fillOpacity="1" 
            d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          />
        </svg>
      </div>
    </div>
  );
} 