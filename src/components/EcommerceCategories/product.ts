export interface Product {
  id: number;
  title: string;
  price: number;
  description?: string;
  image?: string;
  category?: string;
  Rating : {rate : number , count : number}
}