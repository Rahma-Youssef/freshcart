"use server";

import { getMyToken } from "@/utilities/token";
import axios from "axios";

export async function removeWishlistItemAction(id: string) {
  const token = await getMyToken();

  if (!token) throw new Error("User not logged in");

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/wishlist/${id}`,
    {
      method: "DELETE",
      headers: {
        token: token as string,
      },

    }
  );

  const data = await response.json();
  return data;
}
