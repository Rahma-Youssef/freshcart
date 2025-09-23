"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CartContext } from "@/Context/CartContext";
import { Label } from "@radix-ui/react-label";
import React, { useContext, useRef } from "react";
import { cashPaymentAction } from "../../PaymentActions/cashPayment";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { onlinePaymentAction } from "@/PaymentActions/onlinePayment";
import TitlePage from "../_componets/TitlePage/TitlePage";

const payment = () => {
  const { cartId, afterPayment } = useContext(CartContext);

  const router = useRouter();
  const details = useRef("");
  const phone = useRef("");
  const city = useRef("");

  async function cashPayment() {
    const values = {
      shippingAddress: {
        details: details.current?.value,
        phone: phone.current?.value,
        city: city.current?.value,
      },
    };

    try {
      const data = await cashPaymentAction(cartId, values);
      console.log(data);
      if (data.status === "success") {
        toast.success(data.status, {
          duration: 3000,
          position: "top-center",
        });
        router.push("/allorders");
        afterPayment();
      }
    } catch (error) {
      console.log(error);
    }
  }

  async function onlinePayment() {



    const values = {
      shippingAddress: {
        details: details.current?.value,
        phone: phone.current?.value,
        city: city.current?.value,
      },
    };

    try {
      const data = await onlinePaymentAction(cartId, values);
      console.log(data);
      if (data.status === "success") {
        window.location.href = data.session.url;
      }
    } catch (error) {
      toast.error("Not have product in cart", {
        duration: 3000,
        position: "top-center",
      });
    }
  }

  return (
<>
  <TitlePage title="Payment" />
  <div className="w-full md:w-1/2 mx-auto px-4 py-10 mt-30">
      <h1 className="text-4xl font-bold mb-6 text-center"> Payment</h1>

      <div className="bg-white shadow-lg border border-gray-200 rounded-2xl p-6 space-y-4">
        <div className="grid w-full items-center gap-3">
          <Label htmlFor="details">Details</Label>
          <Input
            type="tel"
            ref={details}
            id="details"
            placeholder="Details..."
          />
        </div>

        <div className="grid w-full  items-center gap-3">
          <Label htmlFor="phone">Phone</Label>
          <Input
            type="text"
            ref={phone}
            id="phone"
            placeholder="Phone..."
            className="w-full"
          />
        </div>

        <div className="grid w-full  items-center gap-3">
          <Label htmlFor="city">City</Label>
          <Input type="text" ref={city} id="city" placeholder="City..." />
        </div>

        <div>
          <Button
            onClick={cashPayment}
            className="bg-amber-300 text-black hover:bg-amber-300   hover:scale-90 hover:text-black transation-all duration-300 cursor-pointer"
          >
            Cash Payment
          </Button>
          <Button
            onClick={onlinePayment}
            className="ms-5 bg-green-700 hover:bg-green-700  hover:scale-90 hover:text-white transation-all duration-300 cursor-pointer"
          >
            Online Payment
          </Button>
        </div>
      </div>
    </div></>
  );
};

export default payment;
