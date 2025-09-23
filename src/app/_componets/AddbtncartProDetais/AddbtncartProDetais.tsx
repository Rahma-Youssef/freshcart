
"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import { useAddToCart } from "../AddBtnCart/AddBtnCart";

const AddbtncartProDetais = ({ id }: { id: string }) => {
const { handleAddToCart, loading } = useAddToCart();


  return (
    <Button
      disabled={loading}
      onClick={() => handleAddToCart(id)}
      className="w-full mx-auto mt-3 rounded-md bg-[#64a164] hover:bg-[#2f6f2f] border-0"
    >
      
      {loading ? "Adding..." : "Add to Cart"}
    </Button>
  );
};

export default AddbtncartProDetais;
