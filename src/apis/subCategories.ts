import { Subcategory } from "@/Types/Product.type";


export default async function getSubCategories(categoryId: string) {

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/categories/${categoryId}/subcategories`,
    { cache: "no-store" } 
  );
  const { data }:{data:Subcategory[]} = await response.json();


  
  
return data;
}



