import { Product } from "@/Types/Product.type";

export async function searchProducts(keyword: string) {
  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/products?keyword=${keyword}`
  );

  if (!response.ok) throw new Error("Failed to fetch products");

  const { data }: { data: Product[] } = await response.json(); 

  return data; 
}
