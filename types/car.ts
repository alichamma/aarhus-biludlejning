export interface Car {
  id: string
  brand: string
  model: string
  year: number
  transmission: string
  fuel_type: string
  type: string
  seats: number
  price_per_day: number
  price_per_month: number
  short_description?: string
  main_image_url: string
  is_available: boolean
  is_active: boolean
  created_at: string
} 