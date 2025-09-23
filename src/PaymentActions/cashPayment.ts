import { getMyToken } from "@/utilities/token";

export async  function cashPaymentAction(id: string , values: object) {

    const token = await getMyToken();

    if (!token) throw new Error("User not logged in");

    const response = await fetch(`https://ecommerce.routemisr.com/api/v1/orders/${id}`, {
      method: "POST",
      headers: {
        token: token as string,
      },
      body: JSON.stringify(values),
     
    }
);

const data = await response.json();

return data;
}