import Link from 'next/link';
import { FaFacebook, FaInstagram, FaLinkedin, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16">
          {/* Om os sektion */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Om Aarhus Biludlejning</h3>
            <p className="text-gray-300">
              Din pålidelige partner i biludlejning i Aarhus. Vi tilbyder et bredt udvalg af biler til enhver behov.
            </p>
          </div>

          {/* Hurtige links */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Hurtige Links</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/biler" className="text-gray-300 hover:text-white transition">
                  Vores Biler
                </Link>
              </li>
              <li>
                <Link href="/priser" className="text-gray-300 hover:text-white transition">
                  Priser
                </Link>
              </li>
              <li>
                <Link href="/om-os" className="text-gray-300 hover:text-white transition">
                  Om Os
                </Link>
              </li>
              <li>
                <Link href="/kontakt" className="text-gray-300 hover:text-white transition">
                  Kontakt
                </Link>
              </li>
            </ul>
          </div>

          {/* Kontakt information */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Kontakt</h3>
            <ul className="space-y-4">
              <li className="flex items-center space-x-3">
                <FaPhone className="text-gray-300" />
                <span className="text-gray-300">+45 12 34 56 78</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaEnvelope className="text-gray-300" />
                <span className="text-gray-300">info@aarhusbiludlejning.dk</span>
              </li>
              <li className="flex items-center space-x-3">
                <FaMapMarkerAlt className="text-gray-300" />
                <span className="text-gray-300">Aarhus C, 8000</span>
              </li>
            </ul>
          </div>

          {/* Sociale medier */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold">Følg Os</h3>
            <div className="flex space-x-8">
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaFacebook size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaInstagram size={24} />
              </a>
              <a href="#" className="text-gray-300 hover:text-white transition">
                <FaLinkedin size={24} />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-20 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {new Date().getFullYear()} Aarhus Biludlejning. Alle rettigheder forbeholdes.
            </p>
            <div className="flex space-x-8 mt-4 md:mt-0">
              <Link href="/privatlivspolitik" className="text-gray-400 hover:text-white text-sm">
                Privatlivspolitik
              </Link>
              <Link href="/vilkår" className="text-gray-400 hover:text-white text-sm">
                Vilkår og Betingelser
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 