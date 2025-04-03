'use client';

import { useState, useEffect, useCallback } from 'react';
import { createBrowserClient } from '@supabase/ssr';
import { Car } from '@/types/car';
import AdminCarList from '@/components/AdminCarList';
import AdminCarForm from '@/components/AdminCarForm';

export default function AdminPage() {
  const [cars, setCars] = useState<Car[]>([]);
  const [selectedCar, setSelectedCar] = useState<Car | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  
  const supabase = createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );

  const fetchCars = useCallback(async () => {
    const { data, error } = await supabase
      .from('cars')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error fetching cars:', error);
      return;
    }

    setCars(data || []);
  }, [supabase]);

  useEffect(() => {
    fetchCars();
  }, [fetchCars]);

  const handleDelete = async (id: string) => {
    const { error } = await supabase
      .from('cars')
      .delete()
      .eq('id', id);

    if (error) {
      console.error('Error deleting car:', error);
      return;
    }

    fetchCars();
  };

  const handleEdit = (car: Car) => {
    setSelectedCar(car);
    setIsEditing(true);
  };

  const handleCancel = () => {
    setSelectedCar(null);
    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Administration af biler</h1>
      
      {isEditing ? (
        <AdminCarForm 
          car={selectedCar} 
          onSuccess={() => {
            fetchCars();
            handleCancel();
          }}
          onCancel={handleCancel}
        />
      ) : (
        <button
          onClick={() => setIsEditing(true)}
          className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
        >
          Tilføj ny bil
        </button>
      )}

      <AdminCarList 
        cars={cars} 
        onDelete={handleDelete} 
        onEdit={handleEdit}
      />
    </div>
  );
}