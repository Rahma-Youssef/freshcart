"use server";

import { getMyToken } from "@/utilities/token";

export async function getUserCartAction() {
  const token = await getMyToken();

  if (!token) throw new Error("User not logged in");

  const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/cart`, {
    method: "GET",
    headers: {
      token: token as string,
    },
  });

  const data = await response.json();

  if (!response.ok) {
    throw new Error(data?.message || "Failed to fetch cart");
  }

  return data;
}
