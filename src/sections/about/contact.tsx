import { Button } from "@/components/ui/button";
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
      <div className="text-zinc-50 flex gap-4">
        <Button variant={'ghost'} className="bg-red-700">Contact us</Button>
        <Button variant={'ghost'} className="bg-zinc-950">Request a Quote</Button>
      </div>
    </div>
  );
};

export default Contact;
