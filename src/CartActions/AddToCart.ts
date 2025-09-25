"use server";

import { ProductCart } from "@/Types/cart.type";
import { getMyToken } from "@/utilities/token";


export async function AddToCartAction(id: string) {
  const token  = await getMyToken();

  if (!token) throw new Error("User not logged in");

  const values = {
    productId: id,
  };
  
  const response  = await fetch(
  `${process.env.NEXT_PUBLIC_API_URL}/cart`,
    {
      cache: "force-cache",
      method: "POST",
      headers: {
         "Content-Type": "application/json",
        token: token as string,
      },
      body: JSON.stringify(values),
    }
  );


  const data: ProductCart = await response.json();

    console.log("🚀 AddToCart Response:", data); 
  return data;
}
