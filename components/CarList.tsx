'use client'

import { useEffect, useState } from 'react'
import { FaGasPump, FaCogs, FaUsers, FaCalendarAlt, FaSearch, FaCheck } from 'react-icons/fa'
import { ArrowRightIcon } from '@heroicons/react/24/outline'
import { supabase } from '@/lib/supabaseClient'
import { Car } from '@/types/car'

interface Filters {
  transmission: string
  fuel: string
  type: string
  search: string
}

export default function CarList() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState(true)
  const [filters, setFilters] = useState<Filters>({
    transmission: 'alle',
    fuel: 'alle',
    type: 'alle',
    search: ''
  })

  useEffect(() => {
    async function fetchCars() {
      try {
        console.log('Starter hentning af biler...')
        const { data, error } = await supabase
          .from('cars')
          .select('*')
          .eq('is_active', true)
          .order('created_at', { ascending: false })

        if (error) {
          console.error('Supabase fejl:', error)
          throw error
        }
        
        console.log('Modtaget data:', data)
        setCars(data || [])
      } catch (error) {
        console.error('Fejl ved hentning af biler:', error)
      } finally {
        setLoading(false)
      }
    }

    fetchCars()
  }, [])

  const filteredCars = cars.filter(car => {
    return (
      (filters.transmission === 'alle' || car.transmission === filters.transmission) &&
      (filters.fuel === 'alle' || car.fuel_type === filters.fuel) &&
      (filters.type === 'alle' || car.type === filters.type) &&
      (filters.search === '' || 
        car.brand.toLowerCase().includes(filters.search.toLowerCase()) ||
        car.model.toLowerCase().includes(filters.search.toLowerCase()) ||
        car.year.toString().includes(filters.search))
    )
  })

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#00E69D]"></div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-12">
      {/* Filter Header */}
      <div className="mb-12 text-center">
        <div className="inline-block">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-[#00E6A0] to-[#00c78a] bg-clip-text text-transparent">
            Vores biludvalg
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#00E6A0] to-[#00c78a] mx-auto rounded-full"></div>
        </div>
        <p className="text-gray-600 max-w-2xl mx-auto mt-6 text-lg">
          Find den bil der passer til dine behov. Vi tilbyder et bredt udvalg af biler til både korte og lange udlejningsperioder.
        </p>
      </div>

      {/* Filter Bar */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <select
          className="p-2 rounded-lg border border-gray-200 focus:border-[#00E69D] focus:ring-2 focus:ring-[#00E69D]/20"
          value={filters.transmission}
          onChange={(e) => setFilters({...filters, transmission: e.target.value})}
        >
          <option value="alle">Alle gear</option>
          <option value="Automatisk">Automatisk</option>
          <option value="Manuel">Manuel</option>
        </select>

        <select
          className="p-2 rounded-lg border border-gray-200 focus:border-[#00E69D] focus:ring-2 focus:ring-[#00E69D]/20"
          value={filters.fuel}
          onChange={(e) => setFilters({...filters, fuel: e.target.value})}
        >
          <option value="alle">Alle brændstoffer</option>
          <option value="Benzin">Benzin</option>
          <option value="Diesel">Diesel</option>
          <option value="El">El</option>
        </select>

        <select
          className="p-2 rounded-lg border border-gray-200 focus:border-[#00E69D] focus:ring-2 focus:ring-[#00E69D]/20"
          value={filters.type}
          onChange={(e) => setFilters({...filters, type: e.target.value})}
        >
          <option value="alle">Alle typer</option>
          <option value="Hatchback">Hatchback</option>
          <option value="SUV">SUV</option>
          <option value="Sedan">Sedan</option>
          <option value="Van">Van</option>
        </select>

        <div className="lg:col-span-2 relative">
          <input
            type="text"
            placeholder="Søg efter model eller årgang..."
            className="w-full p-2 pl-10 rounded-lg border border-gray-200 focus:border-[#00E69D] focus:ring-2 focus:ring-[#00E69D]/20"
            value={filters.search}
            onChange={(e) => setFilters({...filters, search: e.target.value})}
          />
          <FaSearch className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCars.map(car => (
          <div 
            key={car.id}
            className="bg-white rounded-xl overflow-hidden shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all duration-300"
          >
            {/* Car Image */}
            <div className="relative h-48">
              <img 
                src={car.main_image_url} 
                alt={`${car.brand} ${car.model}`}
                className="w-full h-full object-cover"
              />
              {car.is_available ? (
                <span className="absolute top-4 right-4 bg-[#00E69D] text-white px-3 py-1 rounded-full text-sm">
                  Ledig nu
                </span>
              ) : (
                <span className="absolute top-4 right-4 bg-gray-500 text-white px-3 py-1 rounded-full text-sm">
                  Optaget
                </span>
              )}
            </div>

            {/* Car Info */}
            <div className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#1C1C1E]">
                    {car.brand} {car.model}
                  </h3>
                  <p className="text-gray-600">{car.year}</p>
                </div>
                <div className="text-right">
                  <p className="text-lg font-bold text-[#00E69D]">
                    {car.price_per_day} kr/dag
                  </p>
                  <p className="text-sm text-gray-600">
                    {car.price_per_month} kr/måned
                  </p>
                </div>
              </div>

              {car.short_description && (
                <p className="text-gray-600 mb-4">{car.short_description}</p>
              )}

              {/* Specs */}
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center gap-2 text-gray-600">
                  <FaCalendarAlt className="text-[#00E69D]" />
                  <span>{car.year}</span>
                </div>
                {car.transmission && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaCogs className="text-[#00E69D]" />
                    <span>{car.transmission}</span>
                  </div>
                )}
                {car.seats && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaUsers className="text-[#00E69D]" />
                    <span>{car.seats} sæder</span>
                  </div>
                )}
                {car.fuel_type && (
                  <div className="flex items-center gap-2 text-gray-600">
                    <FaGasPump className="text-[#00E69D]" />
                    <span>{car.fuel_type}</span>
                  </div>
                )}
              </div>

              {/* Badges */}
              <div className="flex flex-wrap gap-2 mb-6">
                <span className="bg-[#00E69D]/10 text-[#00E69D] px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <FaCheck className="text-xs" />
                  Inkl. forsikring
                </span>
                <span className="bg-[#00E69D]/10 text-[#00E69D] px-3 py-1 rounded-full text-sm flex items-center gap-1">
                  <FaCheck className="text-xs" />
                  Professionelt rengjort
                </span>
              </div>

              {/* CTA Button */}
              <button 
                className="w-full bg-[#00E69D] text-white py-3 rounded-lg font-semibold hover:bg-[#00D9C6] transition-colors duration-300 flex items-center justify-center gap-2"
                disabled={!car.is_available}
              >
                Book denne bil
                <ArrowRightIcon className="w-5 h-5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
} 