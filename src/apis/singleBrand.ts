import { Brand } from "@/Types/Product.type";


export default async function getSingleBrands(id: string) {

  const response = await fetch(
    `curl --location 'https://ecommerce.routemisr.com/api/v1/brands/${id}'`
  );
  const { data }:{data:Brand} = await response.json();
  
return data;
}