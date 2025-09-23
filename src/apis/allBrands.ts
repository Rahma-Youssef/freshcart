
import { Brand } from "@/Types/Product.type";

export default async function getAllBarnds() {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/brands`
  );
  const  {data}:{data:Brand[]}  = await response.json();
 
  
  return data;
}
