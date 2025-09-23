import Image from "next/image";
import React from "react";
import errorImg from "./../../public/assets/404.jpg";

const notfound = () => {
  return (
    <>
      <div className="w-full h-64 sm:h-80 md:h-96 ">
        <Image
          src={errorImg}
          alt="Not Found"
          className="w-full   object-cover object-center h-[100%]"
        />
      </div>
    </>
  );
};

export default notfound;
