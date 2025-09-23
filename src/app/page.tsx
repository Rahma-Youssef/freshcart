import getAllProducts from "@/apis/allProducts";
import React from "react";
import HomeProductCard from "./_componets/HomeProductCard/HomeProductCard";
import MainSlider from "./_componets/MainSlider/MainSlider";
import CategorySlide from "./_componets/CategorySlide/CategorySlide";
import { Product } from "@/Types/Product.type";

export const metadata = {
  title: "Home | FreahCart",
  description: "E-commerse website",
};

const Home = async () => {
  const data: Product[] = await getAllProducts();

  return (
    <>
      <section className=" w-full sm:w-[90%] mx-auto  md:px-10 my-10 px-10 mt-30">
        <MainSlider />

        <CategorySlide />
        <div className="flex flex-wrap justify-center scrollbar-thin scrollbar-thumb-blue-400">
          <div className="grid xl:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 gap-7 py-20">
            {data.map((product: Product) => (
              <HomeProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
