import { useState, useEffect } from 'react';
import { Car } from '@/types/car';
import { createBrowserClient } from '@supabase/ssr';

interface AdminCarFormProps {
  car?: Car | null;
  onSuccess: () => void;
  onCancel: () => void;
}

export default function AdminCarForm({ car, onSuccess, onCancel }: AdminCarFormProps) {
  const [formData, setFormData] = useState<Partial<Car>>({
    brand: '',
    model: '',
    year: new Date().getFullYear(),
    price_per_day: 0,
    price_per_month: 0,
    main_image_url: '',
    description: '',
    features: {},
    is_available: true,
  });

  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  useEffect(() => {
    if (car) {
      setFormData(car);
    }
  }, [car]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      if (car) {
        // Update existing car
        const { error } = await supabase
          .from('cars')
          .update(formData)
          .eq('id', car.id);

        if (error) throw error;
      } else {
        // Create new car
        const { error } = await supabase
          .from('cars')
          .insert([formData]);

        if (error) throw error;
      }

      onSuccess();
    } catch (error) {
      console.error('Error saving car:', error);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6">
        {car ? 'Rediger bil' : 'Tilføj ny bil'}
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div>
          <label className="block text-gray-700 mb-2">Mærke</label>
          <input
            type="text"
            name="brand"
            value={formData.brand}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Model</label>
          <input
            type="text"
            name="model"
            value={formData.model}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Årgang</label>
          <input
            type="number"
            name="year"
            value={formData.year}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Pris pr. dag (kr.)</label>
          <input
            type="number"
            name="price_per_day"
            value={formData.price_per_day}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-2">Pris pr. måned (kr.)</label>
          <input
            type="number"
            name="price_per_month"
            value={formData.price_per_month}
            onChange={handleChange}
            className="w-full p-2 border rounded"
            required
          />
        </div>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Billede URL</label>
        <input
          type="url"
          name="main_image_url"
          value={formData.main_image_url}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          required
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 mb-2">Beskrivelse</label>
        <textarea
          name="description"
          value={formData.description}
          onChange={handleChange}
          className="w-full p-2 border rounded"
          rows={4}
        />
      </div>

      <div className="flex justify-end space-x-4">
        <button
          type="button"
          onClick={onCancel}
          className="bg-gray-500 text-white px-4 py-2 rounded"
        >
          Annuller
        </button>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded"
        >
          {car ? 'Gem ændringer' : 'Opret bil'}
        </button>
      </div>
    </form>
  );
} 