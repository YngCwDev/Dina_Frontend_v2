import Image from "next/image";
import React from "react";
import Img1 from "@/assets/img1.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { Input } from "@/components/ui/input";
const Hero = () => {
  return (
    <div className="-top-10">
      <div className="flex flex-col items-center py-[8vw] gap-4">
        <div className="w-full  px-[5vw]   text-center text-1xl space-y-4">
          <h1 className="md:text-4xl text-[30px]  text-red-600 font-bold">
            Your Solution for Productivity And Safety
          </h1>
          <p className="md:text-black md:text-2xl text-white">
            Maximize efficiency and safeguard your workforce with our reliable
            products.
          </p>
        </div>
        <div className="md:flex hidden">
          <div className="flex w-full max-w-sm  flex-col gap-2 items-center space-x-2">
            <Input type="email" placeholder="Business Email" className="w-[20vw] bg-white h-10"/>
            <div className="flex items-center flex-col">
          <Button
            variant={"outline"}
            className="  bg-red-800 text-white px-4  py-4 h-6"
          >
            Get a free Catalogue
          </Button>
          <Button variant={"link"} className="flex items-center">
            <Link href={"/quoteform"}>Request a quote</Link>
            <div>
              <ChevronRight size={18} strokeWidth={1} />
            </div>
          </Button>
        </div>
          </div>
        </div>
      </div>
      <div className="md:px-[24vw] px-[5vw] md:py-[3vw] py-[5vw] md:text-start  bg-white">
        <p className="md:text-lg py-3">
          We proudly offer an extensive selection of high-quality electrical
          materials, robust power generators, essential personal protective
          equipment (PPE), reliable industrial batteries, premium oils and
          lubricants, as well as a comprehensive fleet of heavy machinery
          available for rental. From excavators and loaders to cranes and
          forklifts, our rental solutions are designed to meet the rigorous
          demands of industries like construction, mining, and energy. These
          products and services ensure peak operational efficiency, reliable
          performance, and maximum safety, providing tailored support for your
          workforce and industrial projects.
        </p>
        
      </div>
    </div>
  );
};

export default Hero;
