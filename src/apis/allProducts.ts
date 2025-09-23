import { Product } from "@/Types/Product.type";

export default async function getAllProducts() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch products");
  }

  const { data }: { data: Product[] } = await response.json();
  return data;
}
