export interface Product {
  id: number;
  title: string;
  price: number;
  categories: Record<number, string>;  // number is key, and string is description
}
