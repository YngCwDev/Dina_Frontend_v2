import React from "react";
import img1 from "@/assets/img-2.png";
import Image from "next/image";
import { c_data } from "@/lib/c_data";

const Technical = () => {
  return (
    <div className="px-[15vw] bg-zinc-100 space-y-8">
      <div className="space-y-2">
        <h2 className="text-3xl font-semibold">
          {c_data.categories[1].items[1].name}
        </h2>
        <div className="bg-red-700 h-1 w-[6vw]"></div>
      </div>
      <div className="flex gap-14">
        <Image src={img1} alt="" />
        <div>
          <p>
            We provide a wide selection of machinery to support your project's
            demands, from excavators and bulldozers to cranes and loaders. Each
            piece of equipment undergoes rigorous maintenance and inspections to
            ensure top performance and safety standards.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Technical;
