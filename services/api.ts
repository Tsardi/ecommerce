import axios from 'axios';


const API_BASE_URL = 'https://fakestoreapi.com';

export interface Product {
  id: number;
  title: string;
  price: number;
  category: string;
  description: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

export const fetchProducts = async (category?: string): Promise<Product[]> => {
  const url = category ? `${API_BASE_URL}/products/category/${category}` : `${API_BASE_URL}/products`;
  // Corrected: 'Products[]' to 'Product[]'
  const { data } = await axios.get<Product[]>(url);
  return data;
};

export const fetchCategories = async (): Promise<string[]> => {
  const { data } = await axios.get<string[]>(`${API_BASE_URL}/products/categories`);
  return data;
};
