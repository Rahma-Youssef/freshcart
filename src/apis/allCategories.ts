import { Category } from "@/Types/Product.type";

export default async function getAllCategories() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/categories"
  );
  const { data }: { data: Category[] } = await response.json();
  return data;
}