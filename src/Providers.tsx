"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";
import CartContextProvider from "./Context/CartContext";
import WishListContextProvider from "./Context/WishListContext";

export const Providers = ({ children }: { children: React.ReactNode }) => {
  return (
    <SessionProvider>
      <WishListContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </WishListContextProvider>
    </SessionProvider>
  );
};
