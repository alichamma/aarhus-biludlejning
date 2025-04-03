import { Car } from '@/types/car';
import Image from 'next/image';

interface AdminCarListProps {
  cars: Car[];
  onDelete: (id: string) => void;
  onEdit: (car: Car) => void;
}

export default function AdminCarList({ cars, onDelete, onEdit }: AdminCarListProps) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {cars.map((car) => (
        <div key={car.id} className="bg-white rounded-lg shadow-md overflow-hidden">
          <div className="relative h-48 w-full">
            <Image
              src={car.main_image_url}
              alt={car.model}
              fill
              className="object-cover"
            />
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold mb-2">
              {car.brand} {car.model}
            </h3>
            <p className="text-gray-600 mb-2">Årgang: {car.year}</p>
            <p className="text-gray-600 mb-2">Pris pr. dag: {car.price_per_day} kr.</p>
            <p className="text-gray-600 mb-2">Pris pr. måned: {car.price_per_month} kr.</p>
            <div className="flex justify-end space-x-2 mt-4">
              <button
                onClick={() => onEdit(car)}
                className="bg-blue-500 text-white px-3 py-1 rounded"
              >
                Rediger
              </button>
              <button
                onClick={() => onDelete(car.id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Slet
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
} 