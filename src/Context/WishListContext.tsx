import { Cart } from "@/Types/cart.type";
import { WishList } from "@/Types/wishList.type";
import { AddToWishListAction } from "@/WishListActions/AddToWishList";
import { getUserWishListAction } from "@/WishListActions/getUserWishlist";
import { removeWishlistItemAction } from "@/WishListActions/removeWishlistItem";

import React, { createContext, useEffect, useState } from "react";

export const WishListContext = createContext({});

const WishListContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isloading, setIsLoading] = useState(false);
  const [products, setProducts] = useState([]);

  // function isInWishList(id: string) {
  //   return products.some((item) => item._id === id);
  // }

  async function addProductToWishList(id: string) {
    try {
      const data: WishList = await AddToWishListAction(id);
      // if (data.status === "success") {
      //   setProducts((prev) => [...prev, data.data]); // ضيف الجديد
      // }
       if (data.status === "success") {
        await getUserWishList(); // ⬅️ تحديث بعد الحذف
      }
      return data;
    } catch (error) {
      return error;
    }
  }

async function removeWishListItem(id: string) {
  try {
    const data = await removeWishlistItemAction(id);

    // if (data.status === "success") {
    //   // فلترة الـ products عشان يتشال من الواجهة من غير Refresh
    //   setProducts((prev) => prev.filter((item) => item._id !== id));
    // }
     if (data.status === "success") {
        await getUserWishList(); // ⬅️ تحديث بعد الحذف
      }

    return data;
  } catch (error) {
    console.log(error);
  }
}

  async function getUserWishList() {
    setIsLoading(true);
    try {
      const data = await getUserWishListAction();

      setProducts(data.data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  }

  useEffect(() => {
    getUserWishList();
  }, []);

  return (
    <WishListContext.Provider
      value={{
        products,
        isloading,
        setIsLoading,
        addProductToWishList,
        removeWishListItem,
      }}
    >
      {children}
    </WishListContext.Provider>
  );
};

export default WishListContextProvider;
