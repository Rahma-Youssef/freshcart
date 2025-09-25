// "use client";
// import { useEffect, useState } from "react";
// import React from "react";
// import HomeProductCard from "../HomeProductCard/HomeProductCard";
// import { Product } from "@/Types/Product.type";
// import { Skeleton } from "@/components/ui/skeleton";
// import getAllProducts from "@/apis/allProducts";

// const SearchProduct = () => {
//   const [allProducts, setAllProducts] = useState<Product[]>([]);
//   const [filtered, setFiltered] = useState<Product[]>([]);
//   const [keyword, setKeyword] = useState("");
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     async function fetchProducts() {
//       try {
//         setLoading(true);

//         const data: Product[] = await getAllProducts();
//         console.log(data);

//         setAllProducts(data);
//         setFiltered(data);
       
//       } catch (err) {
//         console.error("Error fetching products", err);
//       } finally {
//         setLoading(false);
//       }
//     }
//     fetchProducts();
//   }, []);


//   const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
//     const value = e.target.value.toLowerCase();
//     setKeyword(value);
//     const results = allProducts.filter((p) =>
//       p.title.toLowerCase().includes(value)
//     );
//     setFiltered(results);
//   };

//   return (
//     <>
//       {" "}
//       <label className="input input-success bg-white border border-gray-300 rounded-md md:w-[80%] w-[90%]  mx-auto flex justify-center   ">
//         <svg
//           className="h-[1em] opacity-50"
//           xmlns="http://www.w3.org/2000/svg"
//           viewBox="0 0 24 24"
//         >
//           <g
//             strokeLinejoin="round"
//             strokeLinecap="round"
//             strokeWidth="2.5"
//             fill="none"
//             stroke="currentColor"
//           >
//             <circle cx="11" cy="11" r="8"></circle>
//             <path d="m21 21-4.3-4.3"></path>
//           </g>
//         </svg>
//         <input
//           type="search"
//           required
//           placeholder="Search"
//           value={keyword}
//           onChange={handleSearch}
//         />
//       </label>
//       {loading ? (
//         <div className="flex flex-wrap justify-center scrollbar-thin scrollbar-thumb-blue-400">
//           <div className="grid xl:grid-cols-4  md:grid-cols-3  sm:grid-cols-2  gap-7 py-20">
//             {[...Array(8)].map((_, i) => (
//               <Skeleton className="h-[300px] w-[200px] rounded-md bg-gray-300" key={i} />
//             ))}
//           </div>
//         </div>
//       ) : (
//         <div className="flex flex-wrap justify-center scrollbar-thin scrollbar-thumb-blue-400">
//           <div className="grid xl:grid-cols-4  md:grid-cols-3  sm:grid-cols-2 gap-7 py-20">
//             {filtered.length > 0 ? (
//               filtered.map((product) => (
//                 <HomeProductCard key={product.id} product={product} />
//               ))
//             ) : (
//               <p className="col-span-4 text-center text-black font-bold text-3xl ">
//                 No products found
//               </p>
//             )}
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default SearchProduct;


"use client";
import { useEffect, useState, useMemo } from "react";
import React from "react";
import HomeProductCard from "../HomeProductCard/HomeProductCard";
import { Product } from "@/Types/Product.type";
import { Skeleton } from "@/components/ui/skeleton";
import getAllProducts from "@/apis/allProducts";

const SearchProduct = () => {
  const [allProducts, setAllProducts] = useState<Product[]>([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchProducts() {
      try {
        setLoading(true);
        const data: Product[] = await getAllProducts();
        setAllProducts(data);
      } catch (err) {
        console.error("Error fetching products", err);
      } finally {
        setLoading(false);
      }
    }
    fetchProducts();
  }, []);

  // 🟢 فلترة المنتجات بالاعتماد على keyword
  const filteredProducts = useMemo(() => {
    return allProducts.filter((p) =>
      p.title.toLowerCase().includes(keyword.toLowerCase())
    );
  }, [allProducts, keyword]);

  return (
    <>
      <label className="input input-success bg-white border border-gray-300 rounded-md md:w-[80%] w-[90%] mx-auto flex justify-center">
        <svg
          className="h-[1em] opacity-50"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
        >
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input
          type="search"
          required
          placeholder="Search"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </label>

      {loading ? (
        <div className="flex flex-wrap justify-center">
          <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7 py-20">
            {[...Array(8)].map((_, i) => (
              <Skeleton
                className="h-[300px] w-[200px] rounded-md bg-gray-300"
                key={i}
              />
            ))}
          </div>
        </div>
      ) : (
        <div className="flex flex-wrap justify-center">
          <div className="grid xl:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-7 py-20">
            {filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <HomeProductCard key={product.id} product={product} />
              ))
            ) : (
              <p className="col-span-4 text-center text-black font-bold text-3xl">
                No products found
              </p>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default SearchProduct;

