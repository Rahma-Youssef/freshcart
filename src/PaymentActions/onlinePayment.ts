import { getMyToken } from "@/utilities/token";

export async  function onlinePaymentAction(id: string , values: object) {

    const token = await getMyToken();

    if (!token) throw new Error("User not logged in");

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/checkout-session/${id}?url=http://localhost:3000`, {
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