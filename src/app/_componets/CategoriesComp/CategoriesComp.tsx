"use client";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import getAllCategories from "@/apis/allCategories";
import getSubCategories from "@/apis/subCategories";

export default function CategoriesComp() {
  const [categories, setCategories] = useState<any[]>([]);
  const [subCategories, setSubCategories] = useState<any[]>([]);
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [activeCategoryName, setActiveCategoryName] = useState<string>("");
  const subCategoriesRef = useRef(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await getAllCategories();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const handleCategoryClick = async (categoryId: string,categoryName: string ) => {

    setActiveCategory(categoryId);

    setActiveCategoryName(categoryName);

    const data = await getSubCategories(categoryId);
    setTimeout(() => {
      subCategoriesRef.current?.scrollIntoView({ behavior: "smooth" });
    }, 100);

    setSubCategories(data);
  };

  return (
    <div className="w-[90%] mx-auto md:px-10 px-5">
      {/* Categories */}

      <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-7 py-20">
        {categories.map((category) => (
          <div
            key={category._id}
            onClick={() => handleCategoryClick(category._id, category.name)}
            className="card h-[500px] border border-gray-300 shadow-sm hover:shadow-[0_0_10px_#6BAF6B] transition-all cursor-pointer"
          >
            <figure>
              <Image
                src={category.image}
                alt={category.name}
                width={500}
                height={500}
                className="object-cover w-full h-[450px]"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title mx-auto text-[#64a164]   text-xl">
                {category.name}
              </h2>
            </div>
          </div>
        ))}
      </div>

      {/* SubCategories */}

      {activeCategory && (
        <div className="mt-10" ref={subCategoriesRef}>
          <h2 className="text-center text-[#4f8e4f] font-semibold mb-4 md:text-3xl text-xl">
            {activeCategoryName} Subcategories
          </h2>
          <div className="grid md:grid-cols-3 sm:grid-cols-2 gap-7 py-20 text-center  ">
            {subCategories.length > 0
              ? subCategories.map((sub) => (
                  <div
                    key={sub._id}
                    className="  md:text-2xl font-semibold border border-gray-400  md:py-5 py-3 rounded-sm shadow-sm hover:shadow-[0_0_10px_#6BAF6B] transition-all duration-300 cursor-pointer"
                  >
                    {sub.name}
                  </div>
                ))
              : ""}
          </div>
        </div>
      )}
    </div>
  );
}
