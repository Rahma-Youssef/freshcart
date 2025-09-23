// "use client";

// import { CartContext } from "@/Context/CartContext";
// // import { getMyToken } from "@/utilities/token";
// import React, { useContext, useEffect, useState } from "react";
// import Loading from "../_componets/Loading/Loading";
// import { Button } from "@/components/ui/button";
// import { ProductCart } from "@/Types/cart.type";
// import emptyCartimg from "../../../public/assets/shopping-cart_2984778.png";
// import Image from "next/image";
// import { toast } from "sonner";
// import Link from "next/link";
// import TitlePage from "../_componets/TitlePage/TitlePage";

// const Cart = () => {
// const [updatingAction, setUpdatingAction] = useState(null);

//   async function handleUpdate(id: string, count: number, type: "plus" | "minus") {
//      setUpdatingAction(`${type}-${id}`);
//   await updateCart(id, count);
//   setUpdatingAction(null);
//   }

//   const {
//     isloading,
//     numOfCartItems,
//     totalCartPrice,
//     products,
//     removeCartItem,
//     updateCart,
//     clearCart,
//   } = useContext(CartContext);

//   async function removeItem(id: string) {
//     const data = await removeCartItem(id);
//     console.log(data);

//     if (data.status === "success") {
//       toast.success("success remove product", {
//         duration: 3000,
//         position: "top-center",
//       });
//     } else {
//       toast.error("failed remove product", {
//         duration: 3000,
//         position: "top-center",
//       });
//     }
//   }

//   if (isloading) {
//     return <Loading />;
//   }

//   if (products.length === 0) {
//     return (
//       <section className="flex flex-col justify-center items-center h-screen">
//         <h1 className="md:text-4xl  text-2xl">Your Cart is Empty</h1>
//         <Image
//           src={emptyCartimg}
//           alt="empty cart "
//           width={200}
//           height={200}
//           className="md:w-60 w-40"
//         ></Image>
//       </section>
//     );
//   }

//   return (
//     <>
//       <TitlePage title="Cart" />
//       <div className="w-full md:w-[80%] mx-auto my-10 px-5 md:px-0 bg-[#F0F3F2ff] mt-30 ">
//         <div className="p-5  ">
//           <div className="flex justify-between items-center">
//             <div>
//               <h1 className="md:text-2xl text-xl ">Shop Cart :</h1>
//               <p className="py-3 px-3 text-green-600 font-mono md:text-lg text-[11px]">
//                 Total Cart Price : {totalCartPrice} EGP
//               </p>
//             </div>

//             <Button className="bg-green-600 hover:bg-green-600 md:text-xl md:p-5 px-2 py-1 text-[11px] hover:scale-95">
//               <Link href="/payment">Payment</Link>
//             </Button>
//           </div>

//           <div className="allproducts py-10">
//             {products.map((product: ProductCart, index: number) => (
//               <div
//                 key={index}
//                 className="flex  flex-col md:flex-row  justify-between items-center gap-10 border-b border-gray-300/70 py-5"
//               >
//                 <div className="flex items-center gap-5">
//                   <Image
//                     src={product.product.imageCover}
//                     alt={product.product.title}
//                     width={200}
//                     height={200}
//                     className="md:w-[200px] md:h-[200px] w-[100px] h-[100px]   object-cover"
//                   ></Image>

//                   <div>
//                     <h1 className="mb-2 text-sm md:text-lg">
//                       {product.product.title}
//                     </h1>
//                     <p className="text-green-600 mb-2 text-sm md:text-lg">
//                       Price :{" "}
//                       <span className="text-black font-medium text-sm  md:text-lg">
//                         {product.price} EGP{" "}
//                       </span>{" "}
//                     </p>
//                     <button
//                       className="flex items-center gap-2 text-red-600 cursor-pointer text-sm md:text-lg"
//                       onClick={() => removeItem(product.product.id)}
//                     >
//                       <i className="fa-solid fa-trash-can "></i> Remove
//                     </button>
//                   </div>
//                 </div>

//                 <div className="flex items-center gap-3">
//                   <Button
//                     onClick={() =>
//                       handleUpdate(product.product.id, product.count + 1, "plus")
//                     }
//                     disabled={updatingAction === `plus-${product.product.id}`}

//                     className="  text-lg flex items-center justify-center  border-2 border-[#08AC0Aff] bg-transparent hover:bg-[#08AC0Aff] hover:border-white transition-all duration-200    hover:cursor-pointer hover:text-white text-black"
//                   >
//                      {updatingAction === `plus-${product.product.id}` ? <i className="fa-solid fa-spinner text-[10px] fa-spin-pulse"></i>: "+"}
//                   </Button>
//                   <p>{product.count}</p>
//                   <Button
//                     onClick={() =>
//                       handleUpdate(product.product.id, product.count - 1, "minus")
//                     }
//                    disabled={updatingAction === `minus-${product.product.id}`}
//                     className=" text-lg border-2 border-[#08AC0Aff] bg-transparent hover:bg-[#08AC0Aff] hover:border-white transition-all duration-200    hover:cursor-pointer hover:text-white text-black"
//                   >
//                     {updatingAction === `minus-${product.product.id}` ?  <i className="fa-solid fa-spinner text-[10px] fa-spin-pulse"></i> : "-"}
//                   </Button>
//                 </div>
//               </div>
//             ))}
//           </div>

//           <div className="flex justify-center py-5">
//             <Button
//               onClick={clearCart}
//               className=" py-5 border-2 border-[#08AC0Aff] bg-transparent hover:bg-[#08AC0Aff] hover:border-white transition-all duration-200  md:text-2x text-lg  hover:cursor-pointer hover:text-white text-black md:px-8"
//             >
//               Clear your Cart
//             </Button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Cart;


"use client";

import { CartContext } from "@/Context/CartContext";
// import { getMyToken } from "@/utilities/token";
import React, { useContext, useEffect, useState } from "react";
import Loading from "../_componets/Loading/Loading";
import { Button } from "@/components/ui/button";
import { ProductCart } from "@/Types/cart.type";
import emptyCartimg from "../../../public/assets/shopping-cart_2984778.png";
import Image from "next/image";
import { toast } from "sonner";
import Link from "next/link";
import TitlePage from "../_componets/TitlePage/TitlePage";

const Cart = () => {

  const [updatingAction, setUpdatingAction] = useState<string | null>(null);


  const cartCtx = useContext(CartContext);


  if (!cartCtx) {

    return null;
  }


  const {
    isloading,
    numOfCartItems,
    totalCartPrice,
    products,
    removeCartItem,
    updateCart,
    clearCart,
  } = cartCtx;

 
  async function handleUpdate(id: string, count: number, type: "plus" | "minus") {
    setUpdatingAction(`${type}-${id}`);
    try {
      if (typeof updateCart === "function") {
        await updateCart(id, count);
      }
    } catch (err) {
      console.error(err);
      toast.error("Failed to update product", { position: "top-center", duration: 3000 });
    } finally {
      setUpdatingAction(null);
    }
  }

  async function removeItem(id: string) {
    try {
      if (typeof removeCartItem !== "function") throw new Error("removeCartItem not available");
      const data = await removeCartItem(id);
      console.log(data);

      if (data?.status === "success") {
        toast.success("success remove product", {
          duration: 3000,
          position: "top-center",
        });
      } else {
        toast.error("failed remove product", {
          duration: 3000,
          position: "top-center",
        });
      }
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong", { duration: 3000, position: "top-center" });
    }
  }

  if (isloading) {
    return <Loading />;
  }


  const safeProducts: ProductCart[] = products ?? [];

  if (safeProducts.length === 0) {
    return (
      <section className="flex flex-col justify-center items-center h-screen">
        <h1 className="md:text-4xl  text-2xl">Your Cart is Empty</h1>
        <Image
          src={emptyCartimg}
          alt="empty cart "
          width={200}
          height={200}
          className="md:w-60 w-40"
        />
      </section>
    );
  }

  return (
    <>
      <TitlePage title="Cart" />
      <div className="w-full md:w-[80%] mx-auto my-10 px-5 md:px-0 bg-[#F0F3F2ff] mt-30 ">
        <div className="p-5  ">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="md:text-2xl text-xl ">Shop Cart :</h1>
              <p className="py-3 px-3 text-green-600 font-mono md:text-lg text-[11px]">
                Total Cart Price : {totalCartPrice} EGP
              </p>
            </div>

            <Button className="bg-green-600 hover:bg-green-600 md:text-xl md:p-5 px-2 py-1 text-[11px] hover:scale-95">
              <Link href="/payment">Payment</Link>
            </Button>
          </div>

          <div className="allproducts py-10">
            {safeProducts.map((product: ProductCart, index: number) => (
              <div
                key={product._id ?? index}
                className="flex  flex-col md:flex-row  justify-between items-center gap-10 border-b border-gray-300/70 py-5"
              >
                <div className="flex items-center gap-5">
                  <Image
                    src={product.product.imageCover}
                    alt={product.product.title}
                    width={200}
                    height={200}
                    className="md:w-[200px] md:h-[200px] w-[100px] h-[100px]   object-cover"
                  />

                  <div>
                    <h1 className="mb-2 text-sm md:text-lg">
                      {product.product.title}
                    </h1>
                    <p className="text-green-600 mb-2 text-sm md:text-lg">
                      Price :{" "}
                      <span className="text-black font-medium text-sm  md:text-lg">
                        {product.price} EGP{" "}
                      </span>{" "}
                    </p>
                    <button
                      className="flex items-center gap-2 text-red-600 cursor-pointer text-sm md:text-lg"
                      onClick={() => removeItem(product.product.id)}
                    >
                      <i className="fa-solid fa-trash-can "></i> Remove
                    </button>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <Button
                    onClick={() =>
                      handleUpdate(product.product.id, product.count + 1, "plus")
                    }
                    disabled={updatingAction === `plus-${product.product.id}`}
                    className="  text-lg flex items-center justify-center  border-2 border-[#08AC0Aff] bg-transparent hover:bg-[#08AC0Aff] hover:border-white transition-all duration-200    hover:cursor-pointer hover:text-white text-black"
                  >
                    {updatingAction === `plus-${product.product.id}` ? <i className="fa-solid fa-spinner text-[10px] fa-spin-pulse"></i>: "+"}
                  </Button>
                  <p>{product.count}</p>
                  <Button
                    onClick={() =>
                      handleUpdate(product.product.id, product.count - 1, "minus")
                    }
                    disabled={updatingAction === `minus-${product.product.id}`}
                    className=" text-lg border-2 border-[#08AC0Aff] bg-transparent hover:bg-[#08AC0Aff] hover:border-white transition-all duration-200    hover:cursor-pointer hover:text-white text-black"
                  >
                    {updatingAction === `minus-${product.product.id}` ?  <i className="fa-solid fa-spinner text-[10px] fa-spin-pulse"></i> : "-"}
                  </Button>
                </div>
              </div>
            ))}
          </div>

          <div className="flex justify-center py-5">
            <Button
              onClick={() => {
                if (typeof clearCart === "function") clearCart();
              }}
              className=" py-5 border-2 border-[#08AC0Aff] bg-transparent hover:bg-[#08AC0Aff] hover:border-white transition-all duration-200  md:text-2x text-lg  hover:cursor-pointer hover:text-white text-black md:px-8"
            >
              Clear your Cart
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
