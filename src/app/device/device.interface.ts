export interface Device {
  id: number;
  name: string;
  description: string;
  createdAt: Date;
  object: string;
  isActive: boolean;
  manufacturer: string;
  postalcode: string;
  city: string;
  street: string;
  period: number;
}