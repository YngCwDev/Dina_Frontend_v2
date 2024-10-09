import Form from "@/components/form";
import { Button } from "@/components/ui/button";
import React from "react";

const Quotecard = () => {
  return (
    <div className="md:p-[10vw] p-8 bg-white flex justify-center ">
      <div className="shadow-xl py-20 p-16 md:w-[50vw] w-[80vw] border-2 flex items-center  flex-wrap border-red-700 rounded-lg gap-16">
        <div className="md:w-[20vw] space-y-4 md:text-start text-center">
          <h2 className="md:text-3xl text-2xl  font-bold text-red-700">Free Quote & Catalogue</h2>
          <p className="md:text-md text-[12px]">*Get a personalized quote for your project and explore our full range of offerings in our comprehensive catalogue.</p>
          
        </div>
        <div className="">
          <Form/>
        </div>
      </div>
    </div>
  );
};

export default Quotecard;
