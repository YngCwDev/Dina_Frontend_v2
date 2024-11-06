import React from "react";
import {buttonVariants } from "../../components/ui/button";
import { Input } from "../../components/ui/input";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

const Form = () => {
  return (
    <div className="w-full">
      <form action="POST" className="space-y-4">
        <Input
          type="text"
          placeholder="Your Email"
          className="border-zinc-300 lg:pr-0 pr-20 bg-white"
          required
        />
        <div className="flex md:flex-row flex-col gap-4">
          <input
            type="submit"
            className={buttonVariants({ variant: "lightToRed" })}
            value="Get a Catalogue"
            
          />

          <Link
            href="/support/quotepage"
            className="flex items-center text-white"
          >
            <span>Request a Quote</span>
            <span>
              <ChevronRight size={15} />
            </span>
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Form;
