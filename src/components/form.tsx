import React from "react";
import { Button } from "./ui/button";
import { z } from "zod";
import { Input } from "./ui/input";
import { ChevronRight } from "lucide-react";

const Form = () => {
  return (
    <div className="md:p-10">
      <form action="" className="space-y-4">
        <Input type="text" placeholder="Business Email" className="md:w-[15vw]" />
        <div className="flex justify-between md:flex-row flex-col gap-4">
          <Button
            type="submit"
            variant={"ghost"}
            className="bg-red-700 text-white  hover:bg-red-700/30"
          >
            Get Catalogue
          </Button>
          <Button
            variant={"ghost"}
            className="bg-neutral-950 flex items-center text-white  hover:bg-black/30"
          >
            <span>Request quote</span><span><ChevronRight size={15}/></span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
