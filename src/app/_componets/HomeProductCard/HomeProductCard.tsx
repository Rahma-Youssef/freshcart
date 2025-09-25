"use client";
import { Button } from "@/components/ui/button";
import { Product } from "@/Types/Product.type";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import AddBtnWishList from "../AddBtnWishList/AddBtnWishList";
import { useAddToCart } from "../AddBtnCart/AddBtnCart";

const HomeProductCard = ({ product }: { product: Product }) => {
  const { handleAddToCart, loading } = useAddToCart();


  return (
    <div
      className={`card group shadow-sm transition-all duration-500 delay-100 cursor-pointer
      hover:shadow-[0_0_10px_#6BAF6B]
                 active:shadow-[0_0_10px_#6BAF6B] focus:shadow-[0_0_10px_#6BAF6B]
                `}

    >
      <Link href={`/ProductDetails/${product.id}`}>
        <figure>
          <Image
            src={product.imageCover}
            alt={product.title}
            width={500}
            height={500}
          />
        </figure>
        <div className="card-body px-4">
          <div className="flex justify-between items-center">
            <h3 className="text-[#64a164] text-[15px]">
              {product.category.name}
            </h3>
            <AddBtnWishList id={product.id} />
          </div>
          <h2 className="card-title line-clamp-1 text-[17px]">
            {product.title}
          </h2>
          <div className="flex justify-between items-center w-full" onClick={(e)=>{
 
            e.stopPropagation()}}>
            <span className="font-semibold">
              {product.price} <span className="font-normal">EGP</span>
            </span>
            <span>
              {product.ratingsAverage}
              <i className="fa-solid fa-star text-yellow-400"></i>
            </span>
          </div>
        </div>
      </Link>

      <div className="card-actions justify-end">
        <Button
          disabled={loading}
          onClick={() => handleAddToCart(product.id)}
          className="border-0 bg-[#64a164] cursor-pointer w-[90%] mx-auto rounded-md mt-3 
                     md:translate-y-8 md:opacity-0
                      md:group-hover:-translate-y-3 md:group-hover:opacity-100
                     -translate-y-3 opacity-100
                    
                     transition-all duration-500"
        >
          {loading ? "Adding..." : "Add to Cart"}
        </Button>
      </div>
    </div>
  );
};

export default HomeProductCard;
