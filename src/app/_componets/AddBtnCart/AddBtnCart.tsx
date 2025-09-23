
"use client";

import { useContext, useState } from "react";
import { toast } from "sonner";

import { ProductCart } from "@/Types/cart.type";
import { CartContext } from "@/Context/CartContext";

export function useAddToCart() {
  const [loadingIds, setLoadingIds] = useState<string[]>([]);
  const { addProductToCart } = useContext(CartContext);

  const handleAddToCart = async (id: string) => {
    setLoadingIds((prev) => [...prev, id]); 

    try {
      const data: ProductCart = await addProductToCart(id);

      if (data.status === "success") {
        toast.success(data.message, {
          duration: 3000,
          position: "top-center",
        });
      } else {
        toast.error("Failed to add product", {
          duration: 3000,
          position: "top-center",
        });
      }
    } catch (error) {
      toast.error("Something went wrong", {
        duration: 3000,
        position: "top-center",
      });
    } finally {
      setLoadingIds((prev) => prev.filter((pid) => pid !== id)); 
    }
  };


  const isLoading = (id: string) => loadingIds.includes(id);

  return { handleAddToCart, isLoading };
}
