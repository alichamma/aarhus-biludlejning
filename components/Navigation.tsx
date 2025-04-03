'use client'

import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'
import { FaCar } from 'react-icons/fa'

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsMenuOpen(false)
    }
  }

  const handleCall = () => {
    window.location.href = 'tel:+4591825995'
  }

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 backdrop-blur-md shadow-lg z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <FaCar className="text-3xl text-[#00E6A0]" />
            <span className="text-2xl font-bold text-[#00E6A0]">
              Aarhus Biludlejning
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button 
              onClick={() => scrollToSection('biler')}
              className="text-[#1C1C1E] hover:text-[#00E6A0] transition-colors font-medium"
            >
              Se biler
            </button>
            <button 
              onClick={() => scrollToSection('fordele')}
              className="text-[#1C1C1E] hover:text-[#00E6A0] transition-colors font-medium"
            >
              Fordele
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="text-[#1C1C1E] hover:text-[#00E6A0] transition-colors font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="text-[#1C1C1E] hover:text-[#00E6A0] transition-colors font-medium"
            >
              Kontakt
            </button>
            <div className="w-px h-6 bg-gray-200 mx-4"></div>
            <button 
              onClick={handleCall}
              className="text-[#1C1C1E] hover:text-[#00E6A0] transition-colors font-medium flex items-center space-x-2"
            >
              <span className="text-lg font-semibold tracking-wide">91 82 59 95</span>
              <span className="text-sm text-gray-500">Ring til os</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <button 
              onClick={handleCall}
              className="bg-[#00E6A0] text-white px-4 py-1.5 rounded-lg hover:bg-[#00c78a] transition-colors shadow-md hover:shadow-lg font-medium flex items-center space-x-2"
            >
              <span className="text-sm">91 82 59 95</span>
            </button>
            <button 
              className="text-[#1C1C1E] hover:text-[#00E6A0] transition-colors"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Bars3Icon className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white/95 backdrop-blur-md shadow-lg rounded-b-lg`}>
          <div className="px-4 py-4 space-y-4">
            <button 
              onClick={() => scrollToSection('biler')}
              className="block w-full text-left text-[#1C1C1E] hover:text-[#00E6A0] transition-colors font-medium"
            >
              Se biler
            </button>
            <button 
              onClick={() => scrollToSection('fordele')}
              className="block w-full text-left text-[#1C1C1E] hover:text-[#00E6A0] transition-colors font-medium"
            >
              Fordele
            </button>
            <button 
              onClick={() => scrollToSection('faq')}
              className="block w-full text-left text-[#1C1C1E] hover:text-[#00E6A0] transition-colors font-medium"
            >
              FAQ
            </button>
            <button 
              onClick={() => scrollToSection('kontakt')}
              className="block w-full text-left text-[#1C1C1E] hover:text-[#00E6A0] transition-colors font-medium"
            >
              Kontakt
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
} 