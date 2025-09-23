"use client";

import { Button } from "@/components/ui/button";
import { WishListContext } from "@/Context/WishListContext";
import { WishListProduct } from "@/Types/wishList.type";
import Image from "next/image";
import React, { useContext } from "react";
import Loading from "../_componets/Loading/Loading";
import { useAddToCart } from "../_componets/AddBtnCart/AddBtnCart";
import TitlePage from "../_componets/TitlePage/TitlePage";

const WishList = () => {

  const { products, isloading, removeWishListItem } =useContext(WishListContext);

  const { handleAddToCart, isLoading  } = useAddToCart();


  if (isloading) {
    return <Loading />;
  }

  return (
  <>
   <TitlePage title="WishList" />
    <div className="w-full md:w-[80%] mx-auto my-10 px-5 md:px-0 mt-30">
      <div className="p-5">
        <h1 className="text-2xl font-semibold mb-5">My Wish List</h1>

        {products.length === 0 ? (
          <p className="text-center text-gray-500">Your wishlist is empty.</p>
        ) : (
          <div className="allproducts py-5 space-y-6">
            {products.map((product: WishListProduct) => (
              <div
                key={product._id}
                className="flex  md:flex-row flex-col gap-10 md:gap-0 justify-between items-center border-b border-gray-300/70 pb-5"
              >
         
                <div className="flex items-center gap-5">
                  <Image
                    src={product.imageCover}
                    alt={product.title}
                    width={120}
                    height={120}
                    className="rounded-lg object-cover"
                  />

                  <div>
                    <h2 className="mb-2 font-medium text-sm md:text-lg">{product.title}</h2>
                    <p className="text-green-600 mb-2 text-sm md:text-lg">
                      Price:{" "}
                      <span className="text-black font-semibold">
                        {product.price} EGP
                      </span>
                    </p>
                    <button
                      className="text-sm md:text-lg flex items-center gap-2 text-red-600 hover:text-red-800 transition cursor-pointer"
                      onClick={() => removeWishListItem(product._id)}
                    >
                      <i className="fa-solid fa-trash-can"></i> Remove
                    </button>
                  </div>
                </div>

                {/* زرار Add to Cart */}
                <div className="flex items-center">
                  <Button
                    disabled={isLoading(product._id)}
                    onClick={() => handleAddToCart(product._id)}
                    className="border-2 border-[#08AC0A] bg-transparent hover:bg-[#08AC0A] hover:border-white transition-all duration-200 hover:text-white text-black cursor-pointer"
                  >
                     {isLoading(product._id) ? "Adding..." : "Add to Cart"}
                  </Button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </>
  );
};

export default WishList;
