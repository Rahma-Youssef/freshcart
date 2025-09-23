import React from "react";
import { Product } from "@/Types/Product.type";
import getAllProducts from "@/apis/allProducts";
import SearchProduct from "../_componets/SearchProduct/SearchProduct";

export const metadata = {
  title: "Products | FreahCart",
  description: "E-commerse Brands",
};

const Products = async () => {
  const data: Product[] = await getAllProducts();
  return (
    <section className=" w-full sm:w-[90%] mx-auto  md:px-10 py-15 px-10 mt-30">
      <SearchProduct></SearchProduct>


    </section>
  );
};

export default Products;
