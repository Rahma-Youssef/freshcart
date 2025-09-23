import React from "react";

import CategoriesComp from "../_componets/CategoriesComp/CategoriesComp";
import { getMyToken } from "@/utilities/token";

export const metadata = {
  title: "Categories | FreahCart",
  description: "E-commerse Categories",
};

const Categories = async() => {

  const token =  await getMyToken();
  console.log(token);
  

  return (
    <div>
      <CategoriesComp></CategoriesComp>
    </div>
  );
};

export default Categories;
