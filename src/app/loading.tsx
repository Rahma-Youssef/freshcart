import React from "react";
import { SyncLoader } from "react-spinners";

const loading = () => {
  return (
    <>
      <section className="flex justify-center items-center h-screen">
        <span className="loading loading-dots w-25 text-green-600"></span>
 
      </section>
    </>
  );
};

export default loading;
