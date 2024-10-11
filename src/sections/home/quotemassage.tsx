import { CircleUser } from "lucide-react";
import Image from "next/image";
import React from "react";

const QuoteMassage = () => {
  return (
    <div className="bg-zinc-100 flex justify-center py-28">
      <div className="md:px-[30vw] flex flex-col items-center text-center">
        <CircleUser />
        <h2>General manager</h2>
        <p>
          "Stay focused on safety and efficiency. With the right tools and
          determination, every challenge becomes an opportunity for success."
        </p>
      </div>
    </div>
  );
};

export default QuoteMassage;
