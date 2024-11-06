import Form from "@/app/home/form";
import React from "react";

const Quotecard = () => {
  return (
    <div className="p-4 bg-red-700 flex justify-center py-24">
      <div className="mx-auto py-20 lg:p-16 p-8   border-2 flex items-center  flex-wrap border-red-700 rounded-lg gap-16">
        <div className="md:w-[20vw] space-y-4 md:text-start text-center">
          <h2 className="lg:text-4xl text-2xl   font-bold text-white">
            Get a Free Catalogue
          </h2>
          <p className="md:text-md text-[12px] text-white">
            *Get a personalized quote for your project and explore our full
            range of offerings in our comprehensive catalogue.
          </p>
        </div>
        <div className="w-[24vw]">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Quotecard;
