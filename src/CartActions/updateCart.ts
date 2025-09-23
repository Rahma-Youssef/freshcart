"use server";

import { getMyToken } from "@/utilities/token";

export async function updateCartAction(id: string, count: number) {
  const token = await getMyToken();

  if (!token) throw new Error("User not logged in");

  const values = { count };

  const response = await fetch(
    `${process.env.NEXT_PUBLIC_API_URL}/cart/${id}`,
    {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        token: token as string,
      },
      body: JSON.stringify(values),
    }
  );

  if (!response.ok) {
    // ممكن تطلعي رسالة السيرفر بدل ما تعملي Error عام
    const errorBody = await response.json().catch(() => null);
    throw new Error(
      errorBody?.message || `Failed to update cart: ${response.statusText}`
    );
  }

  const data = await response.json();
  return data;
}
