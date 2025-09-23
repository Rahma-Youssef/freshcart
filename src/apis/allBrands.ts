
import { Brand } from "@/Types/Product.type";

export default async function getAllBarnds() {
  const response = await fetch(
    "https://ecommerce.routemisr.com/api/v1/brands"
  );
  const  {data}:{data:Brand[]}  = await response.json();
 
  
  return data;
}
