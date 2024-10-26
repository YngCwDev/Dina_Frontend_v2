import Form from "@/components/form";
import React from "react";

const Quotecard = () => {
  return (
    <div className="p-4 bg-white">
      <div className=" mx-auto shadow-xl py-20 lg:p-16 p-8 lg:w-[50vw]  border-2 flex items-center  flex-wrap border-red-700 rounded-lg gap-16">
        <div className="md:w-[20vw] space-y-4 md:text-start text-center">
          <h2 className="lg:text-3xl text-2xl  font-bold text-red-700">
            Free Quote & Catalogue
          </h2>
          <p className="md:text-md text-[12px]">
            *Get a personalized quote for your project and explore our full
            range of offerings in our comprehensive catalogue.
          </p>
        </div>
        <div className="mx-auto">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Quotecard;
