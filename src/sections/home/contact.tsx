import { Button } from "@/components/ui/button";
import React from "react";

const Contact = () => {
  return (
    <div className="lg:px-[20vw] p-2  bg-zinc-950 text-white flex justify-between items-center md:text-md text-sm">
      <div>
        <h2 className="font-semibold">Can&apos;t find what you looking for?</h2>
        <p className="text-xs">
          Don&apos;t hesitate to contact us for more information
        </p>
      </div>
      <div>
        <Button variant={"ghost2"} className="bg-red-700 md:text-md text-xs ">
          Contact Us
        </Button>
      </div>
    </div>
  );
};

export default Contact;
