export type FuelGrade = 'diesel-50ppm' | 'diesel-500ppm' | 'ulp-95' | 'lubricants';

export type SectorType = 'fleets' | 'farming' | 'mining' | 'generators' | 'construction';

export interface QuoteRequest {
  fullName: string;
  companyName: string;
  phone: string;
  email: string;
  location: string;
  fuelGrade: FuelGrade;
  volumeLitres: number;
  sector: SectorType;
  urgency: 'routine' | 'urgent_24h' | 'emergency';
  notes?: string;
}

export interface FleetItem {
  id: string;
  title: string;
  category: 'fleet' | 'depot' | 'bowsers' | 'metering';
  subtitle: string;
  description: string;
  image: string;
  specs: string[];
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  role: string;
  company: string;
  rating: number;
}
