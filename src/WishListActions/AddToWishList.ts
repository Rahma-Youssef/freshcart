"use server";

import { getMyToken } from "@/utilities/token";


export async function AddToWishListAction(id: string) {
  const token = await getMyToken();

  if (!token) throw new Error("User not logged in");

  const values = {
    productId: id,
  };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/wishlist`,
    {

      method: "POST",

      headers: {
          "Content-Type": "application/json",
        token: token as string,
      },
      body: JSON.stringify(values),
    }
  );

  const data = await response.json();
  return data;
}
