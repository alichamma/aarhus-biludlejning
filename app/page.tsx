import CarList from '@/components/CarList'
import Navigation from '@/components/Navigation'
import { FaCar, FaCalendarAlt, FaSearch, FaCheck, FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa'
import { ChevronDownIcon, CheckCircleIcon, ClockIcon, ShieldCheckIcon, CurrencyDollarIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Navigation />

      {/* Add padding to account for fixed navbar */}
      <div className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[600px] overflow-hidden">
          {/* Animated Gradient Background */}
          <div className="absolute inset-0 bg-gradient-to-br from-[#00E69D] to-[#00D9C6] animate-gradient" />
          
          {/* Visual Element */}
          <div className="absolute right-0 top-0 h-full w-1/3 md:w-1/2 opacity-90">
            <img 
              src="/hero-illustration.png" 
              alt="Biludlejning i Aarhus" 
              className="h-full w-full object-cover object-left"
            />
          </div>
          
          {/* Content */}
          <div className="container mx-auto px-4 h-full flex flex-col justify-center items-center text-center relative z-10">
            {/* Customer Rating */}
            <div className="text-white/80 text-sm md:text-base mb-4">
              ⭐️⭐️⭐️⭐️⭐️ 4.9 / 5 fra 120+ glade kunder
            </div>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white drop-shadow-lg">
              Lej din bil nemt i Aarhus
            </h1>
            <p className="text-xl md:text-2xl mb-12 text-white/90 max-w-3xl">
              Fra kun 249 kr/dag – forsikring og 100 km inkluderet
            </p>

            {/* CTA Button */}
            <button 
              className="w-full md:w-auto bg-white text-[#00E69D] px-8 py-5 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl text-lg mb-8 flex items-center justify-center gap-2 hover:scale-105 group"
            >
              🚗 Find din bil nu – det tager under 1 minut!
              <ArrowRightIcon className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
            </button>

            {/* Benefits Badges */}
            <div className="flex flex-wrap justify-center gap-4 max-w-3xl mb-8">
              {[
                { emoji: "🔄", text: "Gratis afbestilling" },
                { emoji: "🛡️", text: "Fuld forsikring" },
                { emoji: "💰", text: "Lave priser" }
              ].map((benefit, index) => (
                <div key={index} className="flex items-center gap-2 bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white/90 text-sm">
                  <span>{benefit.emoji}</span>
                  <span>{benefit.text}</span>
                </div>
              ))}
            </div>

            {/* Scroll Indicator */}
            <div className="text-white/80 text-sm flex flex-col items-center gap-2 animate-bounce-slow">
              <span>↓ Scroll ned og se udvalget</span>
            </div>
          </div>

          {/* Wave SVG */}
          <div className="absolute bottom-0 left-0 w-full">
            <svg 
              viewBox="0 0 1440 320" 
              className="w-full h-24 md:h-32"
              preserveAspectRatio="none"
            >
              <path 
                fill="#F8F9FA" 
                fillOpacity="1" 
                d="M0,96L48,112C96,128,192,160,288,160C384,160,480,128,576,112C672,96,768,96,864,112C960,128,1056,160,1152,160C1248,160,1344,128,1392,112L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
              />
            </svg>
          </div>
        </section>

        {/* Car List Section */}
        <section id="biler" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="container mx-auto px-4">
            <CarList />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-blue-900">
                Sådan fungerer det
              </h2>
              <div className="h-1 w-24 bg-blue-500 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Tre enkle trin til at få din lejebil
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Step 1 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-blue-50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <FaSearch className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">1. Vælg din bil</h3>
                  <p className="text-gray-600 text-center">
                    Gennemse vores udvalg af biler og find den der passer til dine behov.
                  </p>
                </div>
              </div>

              {/* Step 2 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-blue-50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <FaCalendarAlt className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">2. Vælg periode</h3>
                  <p className="text-gray-600 text-center">
                    Vælg din ønskede udlejningsperiode. Vi tilbyder fleksible lejeperioder.
                  </p>
                </div>
              </div>

              {/* Step 3 */}
              <div className="relative group">
                <div className="absolute -inset-1 bg-blue-50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-blue-100">
                  <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                    <FaCar className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-bold text-blue-900 mb-4 text-center">3. Afhent din bil</h3>
                  <p className="text-gray-600 text-center">
                    Kom og hent din bil på vores adresse i Aarhus.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section id="fordele" className="py-20 bg-gradient-to-b from-white via-emerald-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-emerald-900">
                Fordele ved Aarhus Biludlejning
              </h2>
              <div className="h-1 w-24 bg-emerald-500 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Alt hvad du har brug for i en biludlejning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: <CheckCircleIcon className="w-8 h-8" />, 
                  title: "Gratis afbestilling",
                  text: "Afbestil gratis op til 24 timer før afhentning"
                },
                { 
                  icon: <ShieldCheckIcon className="w-8 h-8" />, 
                  title: "Fuld forsikring",
                  text: "Komplet forsikring inkluderet i prisen"
                },
                { 
                  icon: <CurrencyDollarIcon className="w-8 h-8" />, 
                  title: "Lave priser",
                  text: "Konkurrencedygtige priser uden skjulte gebyrer"
                },
                { 
                  icon: <ClockIcon className="w-8 h-8" />, 
                  title: "24/7 service",
                  text: "Altid tilgængelig kundeservice"
                },
                { 
                  icon: <SparklesIcon className="w-8 h-8" />, 
                  title: "Nye biler",
                  text: "Moderne og velholdte biler"
                },
                { 
                  icon: <CheckCircleIcon className="w-8 h-8" />, 
                  title: "Fleksibilitet",
                  text: "Tilpas lejeperioden til dine behov"
                }
              ].map((benefit, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-emerald-50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-emerald-100">
                    <div className="w-16 h-16 bg-emerald-500 rounded-full flex items-center justify-center mb-6 mx-auto">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-emerald-900 mb-4 text-center">{benefit.title}</h3>
                    <p className="text-gray-600 text-center">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Reviews Section */}
        <section className="py-20 bg-gradient-to-b from-white via-indigo-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-900">
                Hvad vores kunder siger
              </h2>
              <div className="h-1 w-24 bg-indigo-500 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Læs hvad vores kunder siger om deres oplevelse
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  name: "Anders M.", 
                  text: "Fantastisk service og gode priser. Vil helt sikkert bruge dem igen!", 
                  avatar: "AM",
                  rating: 5
                },
                { 
                  name: "Sarah K.", 
                  text: "Meget professionel behandling og en flot bil. Kan varmt anbefales.", 
                  avatar: "SK",
                  rating: 5
                },
                { 
                  name: "Mikkel P.", 
                  text: "Nem booking og god kommunikation. Perfekt oplevelse.", 
                  avatar: "MP",
                  rating: 5
                }
              ].map((review, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-indigo-50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100">
                    <div className="flex items-center mb-6">
                      <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center text-white text-xl font-bold mr-4">
                        {review.avatar}
                      </div>
                      <div>
                        <p className="font-bold text-indigo-900 text-lg">{review.name}</p>
                        <div className="flex mt-2">
                          {[...Array(review.rating)].map((_, i) => (
                            <FaStar key={i} className="text-yellow-400 w-5 h-5" />
                          ))}
                        </div>
                      </div>
                    </div>
                    <p className="text-gray-600 text-lg italic">"{review.text}"</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 bg-gradient-to-b from-white via-blue-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00E6A0] to-[#00c78a] bg-clip-text text-transparent">
                Ofte stillede spørgsmål
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#00E6A0] to-[#00c78a] mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Find svar på de mest almindelige spørgsmål om biludlejning
              </p>
            </div>
            
            <div className="max-w-3xl mx-auto">
              {[
                { 
                  question: "Hvad er minimumsalderen for at leje en bil?", 
                  answer: "Minimumsalderen er 21 år. Du skal også have haft kørekort i mindst 2 år." 
                },
                { 
                  question: "Hvilke betalingsmetoder accepterer I?", 
                  answer: "Vi accepterer alle større kreditkort (Visa, Mastercard, American Express) og MobilePay. Betaling foregår sikkert gennem vores online system." 
                },
                { 
                  question: "Kan jeg afbestille min reservation?", 
                  answer: "Ja, du kan afbestille gratis op til 24 timer før afhentning. Ved afbestilling senere end 24 timer før, vil der blive opkrævet et mindre gebyr." 
                }
              ].map((faq, index) => (
                <div key={index} className="mb-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gray-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                      <div className="flex justify-between items-center">
                        <h3 className="text-xl font-bold text-[#1C1C1E]">{faq.question}</h3>
                        <ChevronDownIcon className="w-6 h-6 text-[#00E6A0] transform group-hover:rotate-180 transition-transform duration-300" />
                      </div>
                      <p className="mt-4 text-gray-600">{faq.answer}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="kontakt" className="py-20 bg-gradient-to-b from-white via-indigo-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00E6A0] to-[#00c78a] bg-clip-text text-transparent">
                Kontakt os
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#00E6A0] to-[#00c78a] mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Vi er altid klar til at hjælpe dig med din biludlejning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gray-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00E6A0] to-[#00c78a] rounded-full flex items-center justify-center mr-4">
                      <FaMapMarkerAlt className="text-white text-xl" />
                    </div>
                    <p className="text-[#1C1C1E] text-lg">Biludlejningsvej 1, 8000 Aarhus C</p>
                  </div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00E6A0] to-[#00c78a] rounded-full flex items-center justify-center mr-4">
                      <FaPhone className="text-white text-xl" />
                    </div>
                    <p className="text-[#1C1C1E] text-lg">+45 12 34 56 78</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#00E6A0] to-[#00c78a] rounded-full flex items-center justify-center mr-4">
                      <FaEnvelope className="text-white text-xl" />
                    </div>
                    <p className="text-[#1C1C1E] text-lg">info@aarhusbiludlejning.dk</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gray-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 bg-gradient-to-r from-[#00E6A0] to-[#00c78a] rounded-full flex items-center justify-center mx-auto mb-6">
                      <FaMapMarkerAlt className="text-white text-2xl" />
                    </div>
                    <p className="text-[#1C1C1E] text-lg">Google Maps embed</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-[#1C1C1E] to-[#0A0A0A] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="flex flex-col md:flex-row gap-12">
              {/* Company Info */}
              <div className="flex-1">
                <h3 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00E6A0] to-[#00c78a] bg-clip-text text-transparent">
                  Aarhus Biludlejning
                </h3>
                <p className="text-gray-400 mb-4 max-w-md">Din pålidelige biludlejning i Aarhus. Vi tilbyder fleksible løsninger til både private og erhvervskunder.</p>
                <p className="text-gray-400">CVR: 12345678</p>
              </div>

              {/* Links & Hours */}
              <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h4 className="text-xl font-semibold mb-6 text-white">Links</h4>
                  <ul className="space-y-4">
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                        <span className="w-2 h-2 bg-[#00E6A0] rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                        Om os
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                        <span className="w-2 h-2 bg-[#00E6A0] rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                        Vilkår
                      </a>
                    </li>
                    <li>
                      <a href="#" className="text-gray-400 hover:text-white transition-colors duration-300 flex items-center gap-2 group">
                        <span className="w-2 h-2 bg-[#00E6A0] rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                        Privatlivspolitik
                      </a>
                    </li>
                  </ul>
                </div>

                <div>
                  <h4 className="text-xl font-semibold mb-6 text-white">Åbningstider</h4>
                  <ul className="space-y-4">
                    <li className="flex justify-between items-center">
                      <span className="text-gray-400">Mandag - Fredag</span>
                      <span className="text-white font-medium">8-18</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-400">Lørdag</span>
                      <span className="text-white font-medium">9-14</span>
                    </li>
                    <li className="flex justify-between items-center">
                      <span className="text-gray-400">Søndag</span>
                      <span className="text-white font-medium">Lukket</span>
                    </li>
                  </ul>
                </div>
              </div>

              {/* Social Media */}
              <div className="flex-1">
                <h4 className="text-xl font-semibold mb-6 text-white">Følg os</h4>
                <div className="flex flex-wrap gap-4">
                  <a href="#" className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00E6A0] to-[#00c78a] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:rotate-12">
                    <FaFacebook className="text-2xl" />
                  </a>
                  <a href="#" className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00E6A0] to-[#00c78a] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:-rotate-12">
                    <FaInstagram className="text-2xl" />
                  </a>
                  <a href="#" className="w-14 h-14 rounded-full bg-gradient-to-br from-[#00E6A0] to-[#00c78a] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:rotate-12">
                    <FaTwitter className="text-2xl" />
                  </a>
                </div>
              </div>
            </div>

            {/* Copyright */}
            <div className="mt-20 pt-8 border-t border-gray-800 text-center">
              <p className="text-gray-400">
                &copy; {new Date().getFullYear()} Aarhus Biludlejning. Alle rettigheder forbeholdes.
              </p>
            </div>
          </div>
        </footer>
      </div>
    </main>
  )
}
