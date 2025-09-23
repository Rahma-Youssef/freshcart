import { Brand } from "@/Types/Product.type";




export default async function getSingleBrands(id: string) {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/brands/${id}'`
  );
  const { data }:{data:Brand} = await response.json();
  
return data;
}