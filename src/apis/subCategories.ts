import { Subcategory } from "@/Types/Product.type";


export default async function getSubCategories(categoryId: string) {

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/categories/${categoryId}/subcategories`,
    { cache: "no-store" } 
  );
  const { data }:{data:Subcategory[]} = await response.json();


  
  
return data;
}



