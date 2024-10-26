import React from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { ChevronRight } from "lucide-react";

const Form = () => {
  return (
    <div className="lg:p-10 w-full">
      <form action="POST" className="space-y-4">
        <Input type="text" placeholder="Business Email" className="border-zinc-300 lg:pr-0 pr-20" />
        <div className="flex md:flex-row flex-col gap-4">
          <Button
            type="submit"
            variant={"ghost"}
            className="bg-red-700 text-white  hover:bg-red-700/30"
          >
            Get a Catalogue
          </Button>
          <Button
            variant={"ghost"}
            className="bg-neutral-950 flex items-center text-white  hover:bg-black/30"
          >
            <span>Request a Quote</span><span><ChevronRight size={15}/></span>
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Form;
