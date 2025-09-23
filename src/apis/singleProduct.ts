import { Product } from "@/Types/Product.type";

export default async function getSingleProducts(id: string) {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/products/${id}`,
    { cache: "no-store" }
  );

  if (!response.ok) {
    throw new Error("Failed to fetch product");
  }

  const { data }: { data: Product } = await response.json();

  return data;
}
