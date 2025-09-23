import { Product } from "@/Types/Product.type";

export async function searchProducts(keyword: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products?keyword=${keyword}`
  );

  if (!response.ok) throw new Error("Failed to fetch products");

  const { data }: { data: Product[] } = await response.json(); 

  return data; 
}
