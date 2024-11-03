import { buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

const Contact = () => {
  return (
    <div className="bg-zinc-300 text-zinc-950 flex flex-col justify-center px-6 md:px-[30vw] gap-4 py-16 md:py-[5vw]">
      <p>
        Choosing  <span className="font-semibold">Dina Holding SA</span> means partnering with a company that
        understands the importance of productivity, safety, and reliability. Our
        integrated solutions, expert team, and commitment to excellence ensure
        that we consistently deliver results that exceed expectations.
      </p>
      <div className="text-zinc-50 flex gap-4 items-center">
        <Link href='/support'  className={buttonVariants({variant:'outline'})}>Contact us</Link>
        <Link href='/support/quotepage'>Request a Quote</Link>
      </div>
    </div>
  );
};

export default Contact;
