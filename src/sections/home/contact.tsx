import { Button } from "@/components/ui/button";
import React from "react";

const Contact = () => {
  return (
    <div className="px-[20vw] py-1 bg-zinc-950 text-white flex justify-between items-center ">
      <div>
        <h2 className="font-semibold">Can't find what you looking for?</h2>
        <p className="text-sm">Don't hesitate to contact us for more information</p>
      </div>
      <div>
        <Button variant={"ghost2"} className="bg-red-700">Contact Us</Button>
      </div>
    </div>
  );
};

export default Contact;
