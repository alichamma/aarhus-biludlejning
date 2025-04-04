'use client';

export default function HowItWorks() {
  const scrollToCars = () => {
    const element = document.getElementById('biler');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
            Så nemt er det at komme bag rattet
          </h2>
          <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Tre hurtige trin – så er du kørende. Ingen bøvl. Kun frihed på fire hjul.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {/* Step 1 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-blue-50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group-hover:scale-[1.03]">
              <div className="w-16 h-16 bg-[#00E676] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl font-bold">1</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Find din bil</h3>
              <p className="text-gray-600 text-center">
                Gennemse vores udvalg – alle biler er klar til afhentning i dag.
              </p>
            </div>
          </div>

          {/* Step 2 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-blue-50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group-hover:scale-[1.03]">
              <div className="w-16 h-16 bg-[#00E676] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl font-bold">2</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Vælg din periode</h3>
              <p className="text-gray-600 text-center">
                Uge, måned eller mere? Du vælger selv, vi klarer resten.
              </p>
            </div>
          </div>

          {/* Step 3 */}
          <div className="relative group">
            <div className="absolute -inset-1 bg-blue-50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
            <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100 group-hover:scale-[1.03]">
              <div className="w-16 h-16 bg-[#00E676] rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-white text-2xl font-bold">3</span>
              </div>
              <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">Kør afsted</h3>
              <p className="text-gray-600 text-center">
                Hent bilen på vores adresse i Aarhus. Nøglen er klar – det tager under 5 minutter.
              </p>
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <button 
            onClick={scrollToCars}
            className="bg-[#00E676] text-white px-8 py-4 rounded-xl font-bold hover:bg-[#00D96C] transition-all duration-300 shadow-lg hover:shadow-xl"
          >
            Se vores biler →
          </button>
        </div>
      </div>
    </section>
  );
} 