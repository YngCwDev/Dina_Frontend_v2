import Link from "next/link";
import React from "react";
import { buttonVariants } from "./ui/button";


const Contact = () => {
  return (
    <div className="lg:px-[20vw] p-2  bg-zinc-950 text-white flex justify-between items-center md:text-md text-sm">
      <div>
        <h2 className="font-semibold text-xl">
          Can&apos;t find what you looking for?
        </h2>
        <p className="text-lg">
          Don&apos;t hesitate to contact us for more information
        </p>
      </div>
      <div>
        <Link href="/support" className={buttonVariants({ variant: "light" })}>
          Contact Now
        </Link>
      </div>
    </div>
  );
};

export default Contact;
