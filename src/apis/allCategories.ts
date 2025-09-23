import { Category } from "@/Types/Product.type";

export default async function getAllCategories() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories`
  );
  const { data }: { data: Category[] } = await response.json();
  return data;
}