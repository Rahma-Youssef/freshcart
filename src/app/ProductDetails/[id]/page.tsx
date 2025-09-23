import getSingleProducts from "@/apis/singleProduct";
import SwiperImgProductDetails from "../../_componets/SwiperImgProductDetails/SwiperImgProductDetails";
import React from "react";
import { Product } from "@/Types/Product.type";
import { Metadata } from "next";
import AddbtncartProDetais from "../../_componets/AddbtncartProDetais/AddbtncartProDetais";



interface Props {
  params: {
    id: string;
  };
}


export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const product: Product = await getSingleProducts(params.id);
  return {
    title: `${product.title} | FreshCart`,
    description: product.description,
  };
}


const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const { id } =  params;

  const product: Product = await getSingleProducts(id);
  console.log(product);

  return (
    <div className="w-full px-5 md:w-[80%] mx-auto  md:px-0 my-10  flex flex-wrap  items-center mt-20">
      {/* ProductImage */}
      <div className="w-full md:w-1/3 ">
        <SwiperImgProductDetails product={product} />
      </div>
      {/* ProductContent */}
      <div className="w-full md:w-2/3  p-5 md:m-0 ">
        <h1 className=" font-bold  ">{product.title}</h1>
        <p className="py-5 text-xs text-gray-600">{product.description}</p>
        <p>{product.category.name}</p>
        <div className="flex justify-between items-center w-full my-5">
          <span>{product.price} EGP</span>
          <span>
            {product.ratingsAverage}
            <i className="fa-solid fa-star text-yellow-400"></i>
          </span>
        </div>
        <div className="card-actions ">
          <AddbtncartProDetais id={product.id} />
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
