import { Product } from "@/Types/Product.type";

export default async function getAllProducts() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/products",
    { cache: "no-store" }
  );
  const { data }: { data: Product[] } = await response.json();
return data;
}