"use client";

import { AddToCartAction } from "@/CartActions/AddToCart";
import { clearCartAction } from "@/CartActions/clearCart";
import { getUserCartAction } from "@/CartActions/getUserCart";
import { removeCartItemAction } from "@/CartActions/removeCartItem";
import { updateCartAction } from "@/CartActions/updateCart";
import { Cart } from "@/Types/cart.type";
import { CartContextType } from "@/Types/cartcontext.type";

import React, { createContext, useEffect, useState } from "react";

export const CartContext = createContext<CartContextType | null>(null);

const CartContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [numOfCartItems, setNumOfCartItems] = useState<number>(0);
  const [totalCartPrice, setTotalCartPrice] = useState<number>(0);
  const [isloading, setIsloading] = useState<boolean>(false);
  const [cartId, setCartId] = useState<string>("");
  const [products, setProducts] = useState<Cart["data"]["products"]>([]);

  async function addProductToCart(id: string) {
    try {
      const data = await AddToCartAction(id);
      if (data.status === "success") {
        await getUserCart();
      }
      return data;
    } catch (error) {
      return error;
    }
  }

  async function removeCartItem(id: string) {
    try {
      const data: Cart = await removeCartItemAction(id);
      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setProducts(data.data.products);
      return data;
    } catch (error) {
      return error;
    }
  }

  async function updateCart(id: string, count: number) {
    try {
      const data: Cart = await updateCartAction(id, count);
      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setProducts(data.data.products);
      return data;
    } catch (error) {
      return error;
    }
  }

  async function clearCart() {
    try {
      const data = await clearCartAction();
      setNumOfCartItems(0);
      setTotalCartPrice(0);
      setProducts([]);
      return data;
    } catch (error) {
      return error;
    }
  }

  async function getUserCart() {
    setIsloading(true);
    try {
      const data: Cart = await getUserCartAction();
      setNumOfCartItems(data.numOfCartItems);
      setTotalCartPrice(data.data.totalCartPrice);
      setProducts(data.data.products);
      setCartId(data.cartId);
      setIsloading(false);
    } catch (error) {

      setIsloading(false);
    }
  }

  useEffect(() => {
    getUserCart();
  }, []);

  function afterPayment() {
    setCartId("");
    setNumOfCartItems(0);
    setTotalCartPrice(0);
    setProducts([]);
  }

  return (
    <CartContext.Provider
      value={{
        isloading,
        numOfCartItems,
        totalCartPrice,
        products,
        addProductToCart,
        removeCartItem,
        updateCart,
        clearCart,
        getUserCart,
        cartId,
        afterPayment,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartContextProvider;

