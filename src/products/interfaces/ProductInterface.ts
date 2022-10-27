import { Document } from 'mongoose'

export interface ProductInterface extends Document {
  id?: number;
  name: string;
  price: number;
  description: string;
  stock: number;
  brand: string;
}
