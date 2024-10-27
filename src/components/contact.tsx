import React from "react";
import { Button } from "@/components/ui/button";
import c_data from "@/lib/c_data";
import Link from "next/link";
import { ChevronRight } from "lucide-react";



const Contact = () => {
  return (
    <div className=" bg-zinc-900 text-white py-4">
      <div className="container flex items-center gap-8">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold">Let Us Help You</h2>
        <p>
          Let us help you achieve your project goals.
          For inquiries or to request a quote, reach out to us.
        </p>
      </div>
      <div className="flex gap-2 items-center mx-auto my-4 bg-zinc-800 rounded-xl w-fit text-">
        <Button variant={"ghost"} className="bg-red-700 text-white rounded-xl">
          Contact Now
        </Button> 
        <Link
          href={c_data.categories[1].items[3].link}
          className="flex items-center "
        >
          <span className="font-medium">Request a Quote</span><ChevronRight size={20} strokeWidth={1}/>
        </Link>
      </div>
      </div>
    </div>
  );
};

export default Contact;
