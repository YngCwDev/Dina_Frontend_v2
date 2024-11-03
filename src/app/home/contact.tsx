import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
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
        <Link  href='/' className={buttonVariants({variant:'red'})}>
          Contact Us
        </Link>
      </div>
    </div>
  );
};

export default Contact;
