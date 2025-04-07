import React from 'react';
import Hero from '../components/Hero';
import CarList from '@/components/CarList'
import Navigation from '@/components/Navigation'
import { FaCar, FaCalendarAlt, FaSearch, FaStar, FaMapMarkerAlt, FaPhone, FaEnvelope, FaFacebook, FaInstagram, FaTwitter, FaBuilding } from 'react-icons/fa'
import { ChevronDownIcon, CheckCircleIcon, ClockIcon, ShieldCheckIcon, CurrencyDollarIcon, SparklesIcon, ArrowRightIcon } from '@heroicons/react/24/outline'
import Image from 'next/image'
import HowItWorks from '../components/HowItWorks'

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F8F9FA]">
      <Navigation />

      {/* Add padding to account for fixed navbar */}
      <div className="pt-20">
        <Hero />

        {/* Car List Section */}
        <section id="biler" className="py-20 bg-gradient-to-b from-white via-gray-50 to-white">
          <div className="container mx-auto px-4">
            <CarList />
          </div>
        </section>

        {/* How It Works Section */}
        <HowItWorks />

        {/* Benefits Section */}
        <section id="fordele" className="py-20 bg-gradient-to-b from-white via-[#111973]/5 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-[#111973]">
                Frihed og tryghed i hver kilometer
              </h2>
              <div className="h-1 w-24 bg-[#111973] mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Din bil, din frihed – uden bekymringer
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                { 
                  icon: <CheckCircleIcon className="w-8 h-8" />, 
                  title: "Fleksibilitet uden grænser",
                  text: "Ændre planer? Ingen problem. Afbestil eller ændre din reservation helt gratis"
                },
                { 
                  icon: <ShieldCheckIcon className="w-8 h-8" />, 
                  title: "Tryghed på hver tur",
                  text: "Kør med ro i sindet – komplet forsikring og 24/7 vejhjælp er inkluderet"
                },
                { 
                  icon: <CurrencyDollarIcon className="w-8 h-8" />, 
                  title: "Transparente priser",
                  text: "Ingen overraskelser – du betaler kun det aftalte beløb, uden skjulte gebyrer"
                },
                { 
                  icon: <ClockIcon className="w-8 h-8" />, 
                  title: "Altid til rådighed",
                  text: "Vores team står klar til at hjælpe dig – døgnet rundt, året rundt"
                },
                { 
                  icon: <SparklesIcon className="w-8 h-8" />, 
                  title: "Moderne komfort",
                  text: "Nye, veludstyrede biler med alt det moderne sikkerhedsudstyr du har brug for"
                },
                { 
                  icon: <CheckCircleIcon className="w-8 h-8" />, 
                  title: "Personlig service",
                  text: "Vi tilpasser os dine behov – for at gøre din biloplevelse helt perfekt"
                }
              ].map((benefit, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-[#111973]/5 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-[#111973]/10 group-hover:scale-[1.03]">
                    <div className="w-16 h-16 bg-[#111973] rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-[#111973] mb-4 text-center group-hover:text-[#111973] transition-colors duration-300">{benefit.title}</h3>
                    <p className="text-gray-600 text-center group-hover:text-gray-800 transition-colors duration-300">{benefit.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Why Customers Choose Us Section */}
        <section className="py-20 bg-gradient-to-b from-white via-indigo-50 to-white">
          <div className="container mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-4 text-indigo-900">
                Derfor vælger kunder os
              </h2>
              <div className="h-1 w-24 bg-indigo-500 mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Vores kunder vælger os igen og igen – her er hvorfor:
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { 
                  icon: <ClockIcon className="w-8 h-8" />, 
                  title: "Klar til afhentning i dag",
                  points: [
                    "Ingen ventetid på bilen",
                    "Alle biler er klar til afhentning",
                    "Nem og hurtig udlevering"
                  ]
                },
                { 
                  icon: <CurrencyDollarIcon className="w-8 h-8" />, 
                  title: "Alt inkluderet i prisen",
                  points: [
                    "Ingen skjulte gebyrer",
                    "Forsikring og service inkluderet",
                    "Fast månedlig pris"
                  ]
                },
                { 
                  icon: <CheckCircleIcon className="w-8 h-8" />, 
                  title: "Fleksibel leje uden binding",
                  points: [
                    "Ingen bindingstid",
                    "Gratis afbestilling",
                    "Tilpas lejeperioden til dine behov"
                  ]
                }
              ].map((benefit, index) => (
                <div key={index} className="relative group">
                  <div className="absolute -inset-1 bg-indigo-50 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                  <div className="relative bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-indigo-100 group-hover:scale-[1.03]">
                    <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mb-6 mx-auto group-hover:animate-pulse">
                      {benefit.icon}
                    </div>
                    <h3 className="text-xl font-bold text-indigo-900 mb-4 text-center group-hover:text-indigo-700 transition-colors duration-300">{benefit.title}</h3>
                    <ul className="space-y-3">
                      {benefit.points.map((point, i) => (
                        <li key={i} className="flex items-start text-gray-600 group-hover:text-gray-800 transition-colors duration-300">
                          <span className="w-2 h-2 bg-indigo-500 rounded-full mt-2 mr-3"></span>
                          {point}
                        </li>
                      ))}
                    </ul>
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
                    <p className="text-gray-600 text-lg italic">&ldquo;{review.text}&rdquo;</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#111973] to-[#0d1459] bg-clip-text text-transparent">
                Ofte stillede spørgsmål
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#111973] to-[#0d1459] mx-auto rounded-full mb-6"></div>
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
                },
                { 
                  question: "Kan jeg leje som udenlandsk statsborger?", 
                  answer: "Ja, det er muligt. Du skal medbringe gyldigt kørekort, pas og bevis på adresse. Vi accepterer internationale kørekort, så længe de er på engelsk eller dansk, eller ledsaget af en officiel oversættelse." 
                },
                { 
                  question: "Er der kilometerbegrænsning?", 
                  answer: "Ja, der er en daglig kilometerbegrænsning på 100 km. Dette er inkluderet i prisen. Hvis du kører mere, kan du tilkøbe ekstra kilometer til en fordelagtig pris." 
                },
                { 
                  question: "Hvad hvis bilen går i stykker under lejeperioden?", 
                  answer: "Vi tilbyder 24/7 vejhjælp og service. Hvis der opstår problemer, ringer du blot til vores servicehotline, og vi hjælper dig med det samme. Ved større problemer får du en erstatningsbil." 
                },
                { 
                  question: "Er rengøring inkluderet?", 
                  answer: "Ja, grundig rengøring er inkluderet i prisen. Vi leverer bilen i pæn stand, og forventer at du afleverer den i samme stand. Ved ekstraordinær beskidthed kan der tilkomme et rengøringsgebyr." 
                },
                { 
                  question: "Hvilke dokumenter skal jeg medbringe?", 
                  answer: "Du skal medbringe gyldigt kørekort, ID (pas eller kørekort) og et kreditkort i dit eget navn. Ved erhvervsleje skal du også have en underskrevet fuldmagt fra virksomheden." 
                }
              ].map((faq, index) => (
                <div key={index} className="mb-6">
                  <div className="relative group">
                    <div className="absolute -inset-1 bg-gray-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                    <div className="relative bg-white p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                      <h3 className="text-xl font-bold text-[#1C1C1E] mb-4">{faq.question}</h3>
                      <p className="text-gray-600">{faq.answer}</p>
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
              <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#111973] to-[#0d1459] bg-clip-text text-transparent">
                Kontakt os
              </h2>
              <div className="h-1 w-24 bg-gradient-to-r from-[#111973] to-[#0d1459] mx-auto rounded-full mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg">
                Vi er altid klar til at hjælpe dig med din biludlejning
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              <div className="relative group">
                <div className="absolute -inset-1 bg-gray-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#111973] to-[#0d1459] rounded-full flex items-center justify-center mr-4">
                      <FaMapMarkerAlt className="text-[#111973]" />
                    </div>
                    <p className="text-[#1C1C1E] text-lg">Randersvej 80, 8200 Aarhus</p>
                  </div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#111973] to-[#0d1459] rounded-full flex items-center justify-center mr-4">
                      <FaPhone className="text-[#111973]" />
                    </div>
                    <p className="text-[#1C1C1E] text-lg whitespace-nowrap font-bold">91 82 59 95</p>
                  </div>
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#111973] to-[#0d1459] rounded-full flex items-center justify-center mr-4">
                      <FaEnvelope className="text-[#111973]" />
                    </div>
                    <p className="text-[#1C1C1E] text-lg">kontakt@aabiludlejning.dk</p>
                  </div>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-[#111973] to-[#0d1459] rounded-full flex items-center justify-center mr-4">
                      <FaBuilding className="text-[#111973]" />
                    </div>
                    <p className="text-[#1C1C1E] text-lg">CVR: 45216149</p>
                  </div>
                </div>
              </div>
              
              <div className="relative group">
                <div className="absolute -inset-1 bg-gray-100 rounded-2xl blur opacity-0 group-hover:opacity-100 transition duration-300"></div>
                <div className="relative bg-white p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 h-full flex items-center justify-center">
                  <div className="w-full h-full">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2220.8394722227204!2d10.198880777025693!3d56.17716775922531!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x464c3fc8fd4df891%3A0x11623babf1eebe94!2sRandersvej%2080%2C%208200%20Aarhus!5e0!3m2!1sda!2sdk!4v1743766125087!5m2!1sda!2sdk"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      className="rounded-xl"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-gradient-to-b from-[#1C1C1E] to-[#0A0A0A] text-white py-20">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
              {/* Company Info */}
              <div className="space-y-6">
                <h3 className="text-3xl font-bold bg-gradient-to-r from-[#111973] to-[#0d1459] bg-clip-text text-transparent">
                  Aarhus Biludlejning
                </h3>
                <p className="text-gray-400 max-w-md">
                  Din pålidelige biludlejning i Aarhus. Vi tilbyder fleksible løsninger til både private og erhvervskunder.
                </p>
                <div className="flex items-center space-x-4">
                  <FaBuilding className="text-[#111973]" />
                  <span className="text-gray-400">CVR: 45216149</span>
                </div>
                <div className="flex items-center space-x-4">
                  <FaPhone className="text-[#111973]" />
                  <span className="text-gray-400">91 82 59 95</span>
                </div>
              </div>

              {/* Quick Links */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white">Hurtige Links</h4>
                <ul className="space-y-4">
                  <li>
                    <a href="#biler" className="text-gray-400 hover:text-[#111973] transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-[#111973] rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                      Vores Biler
                    </a>
                  </li>
                  <li>
                    <a href="#fordele" className="text-gray-400 hover:text-[#111973] transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-[#111973] rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                      Fordele
                    </a>
                  </li>
                  <li>
                    <a href="#faq" className="text-gray-400 hover:text-[#111973] transition-colors duration-300 flex items-center gap-2 group">
                      <span className="w-2 h-2 bg-[#111973] rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                      FAQ
                    </a>
                  </li>
                </ul>
              </div>

              {/* Contact Info */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white">Kontakt</h4>
                <ul className="space-y-4">
                  <li className="flex items-center space-x-3">
                    <FaMapMarkerAlt className="text-[#111973]" />
                    <span className="text-gray-400">Randersvej 80, 8200 Aarhus</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaPhone className="text-[#111973]" />
                    <span className="text-gray-400">91 82 59 95</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <FaEnvelope className="text-[#111973]" />
                    <span className="text-gray-400">kontakt@aabiludlejning.dk</span>
                  </li>
                </ul>
              </div>

              {/* Social Media */}
              <div className="space-y-6">
                <h4 className="text-xl font-semibold text-white">Følg Os</h4>
                <div className="flex space-x-4">
                  <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#111973] to-[#0d1459] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:rotate-12">
                    <FaFacebook className="text-xl" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#111973] to-[#0d1459] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:-rotate-12">
                    <FaInstagram className="text-xl" />
                  </a>
                  <a href="#" className="w-12 h-12 rounded-full bg-gradient-to-br from-[#111973] to-[#0d1459] flex items-center justify-center text-white hover:scale-110 transition-transform duration-300 hover:rotate-12">
                    <FaTwitter className="text-xl" />
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
