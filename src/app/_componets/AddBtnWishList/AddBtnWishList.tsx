"use client";

import { toast } from "sonner";
import React, { useContext, useState } from "react";
import { WishListContext } from "@/Context/WishListContext";

const AddBtnWishList = ({ id }: { id: string }) => {
  const { products, addProductToWishList, removeWishListItem, setIsLoading } =
    useContext(WishListContext);

  const inWishlist = products.some((item) => item._id === id);

  // const inWishlist = isInWishList(id);

  async function handleToggleWishList() {
    setIsLoading(true);
    try {
      if (inWishlist) {
        await removeWishListItem(id);
        toast.success("Product remve successfully from wishlist", {
          duration: 3000,
          position: "top-center",
        });
      } else {
        await addProductToWishList(id);
        toast.success("Product add successfully to wishlist", {
          duration: 3000,
          position: "top-center",
        });
      }
    } catch (error) {

      toast.error("Something went wrong", { duration: 3000, position: "top-center" });
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <div>
      <i
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          handleToggleWishList();
          if (inWishlist) {
            removeWishListItem(id);
          } else {
            addProductToWishList(id);
          }
        }}
        className={`fa-regular fa-heart fa-xl cursor-pointer active:scale-90 hover:scale-90 transition-all duration-100 ${
          inWishlist ? " fa-solid fa-heart text-red-500 " : "text-black"
        }`}
      ></i>
    </div>
  );
};

export default AddBtnWishList;
