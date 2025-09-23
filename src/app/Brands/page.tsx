import getAllBarnds from "@/apis/allBrands";
import { Brand } from "@/Types/Product.type";
import Image from "next/image";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogClose,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

export const metadata = {
  title: "Brands | FreahCart",
  description: "E-commerse Brands",
};

const Brands = async () => {
  const data: Brand[] = await getAllBarnds();

  return (
    <>
      <section className=" w-[90%] mx-auto  md:px-10 my-10 px-10 mt-30">
        <h1 className="text-[#4FA74F] text-center font-semibold text-5xl ">
          All Brands
        </h1>

        <div className=" grid xl:grid-cols-4  md:grid-cols-3  sm:grid-cols-2   gap-6 py-10 ">
          {data.map((brand) => (
            <Dialog key={brand._id}>
              <DialogTrigger asChild>
                <Button
                  variant="outline"
                  className="bordr border-1 border-grey-600 rounded-lg pb-10 pt-0 hover:bg-transparent flex flex-col items-center justify-center hover:shadow-[0_0_10px_#6BAF6B] transition-all duration-500 delay-100 cursor-pointer h-auto"
                >
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    width={300}
                    height={300}
                  />
                  <p>{brand.name} </p>
                </Button>
              </DialogTrigger>
              <DialogContent className=" top-1/2 w-[80%]  md:w-[90%]  ">
                <div className="absolute right-0 left-0 top-13 bg-gray-300 h-[.5px] w-full"></div>
                <DialogHeader className="  grid sm:grid-cols-2 grid-cols-1    items-center mt-8   ">
                  <div>
                    <DialogTitle className="text-[#4FA74F] text-4xl">
                      {brand.name}
                    </DialogTitle>
                    <DialogTitle className="mt-5">{brand.slug}</DialogTitle>
                  </div>
                  <DialogDescription>
                    <Image
                      src={brand.image}
                      alt={brand.name}
                      className="w-3xl"
                      width={500}
                      height={500}
                    />
                  </DialogDescription>
                </DialogHeader>
                <div className="absolute right-0 left-0 bottom-18 bg-gray-300 h-[.5px] w-full"></div>
                <DialogFooter>
                  <DialogClose asChild className="border-t border-gray-600 p-5">
                    <Button
                      variant="outline"
                      className=" bg-gray-500 hover:bg-gray-600 hover:text-white hover:cursor-pointer transition-all duration-300 text-white text-[17px]  border-0 font-normal "
                    >
                      Close
                    </Button>
                  </DialogClose>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          ))}
        </div>
      </section>
    </>
  );
};

export default Brands;
