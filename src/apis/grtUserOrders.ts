import { getMyToken } from "@/utilities/token";
import { jwtDecode } from "jwt-decode";

export async function getUserOrders() {
  const token = await getMyToken();

  const { id }: { id: string } = jwtDecode(token);

  if (!token) throw new Error("User not logged in");

  const response = await fetch(
    `https://ecommerce.routemisr.com/api/v1/orders/user/${id}`,
    {
      method: "GET",
      headers: {
        token: token as string,
      },
    }
  );

  const data = await response.json();
  return data;
}
