import React from "react";
import Image from "next/image";
import {c_data, images} from "@/lib/c_data";
import img1 from "@/assets/img-2.png";

import {
  ShieldCheck,
  SearchCheck,
  Handshake,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Heavy = () => {
  const heavyMR = [
    {
      icon: ShieldCheck,
      detail: "	High-quality equipment",
    },
    {
      icon: SearchCheck,
      detail: "	Regular maintenance to ensure safety",
    },
    {
      icon: Handshake,
      detail: "	Flexible rental terms according to your needs",
    },
  ];

  return (
    <div className=" space-y-4">
      {/* Services */}
      <div className="px-[15vw]">
        <div className="flex gap-8 justify-between">
          <div className="w-[50vw] space-y-4">
            <div className="space-y-4">
              <h2 className="text-3xl font-semibold">
                {c_data.categories[1].items[0].name}
              </h2>
              <div className="bg-red-700 h-1 w-[6vw]"></div>
            </div>{" "}
            <p>
              We provide a wide selection of machinery to support your project's
              demands, from excavators and bulldozers to cranes and loaders.
              Each piece of equipment undergoes rigorous maintenance and
              inspections to ensure top performance and safety standards.
            </p>
            <div className="space-y-2 pl-4">
              {heavyMR.map((item) => (
                <div className="flex gap-4 items-center">
                  <item.icon className="text-red-700" />
                  <p>{item.detail}</p>
                </div>
              ))}
            </div>
            <div className="flex gap-2 items-center pt-8">
              <Button variant={"ghost"} className="bg-red-700 text-white">
                Contact Now
              </Button>
              <Link href={c_data.categories[1].items[0].link} className="flex items-center">
                <span className="font-medium">Request a Quote</span> <ChevronRight size={20} strokeWidth={1}/>
              </Link>
            </div>
          </div>
          <div>
            <Image src={img1} alt="" className="w-[50vw]" />
          </div>
        </div>
        <div className="flex gap-4  py-4">
          {images.map((item, index) => (
            <Image src={item} alt="" key={index} className="w-[320px]"/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Heavy;
