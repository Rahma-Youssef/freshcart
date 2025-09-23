"use server";

import { getMyToken } from "@/utilities/token";

export async function getUserWishListAction() {
  const token = await getMyToken();

  

  if (!token) throw new Error("User not logged in");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/wishlist`, {
    headers: {
      token: token as string,
    },
  });

  const data = await response.json();

  return data ;
}
