import Image from "next/image";
import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { Input } from "@/components/ui/input";
import hero_home from "@/assets/img/home-hero.png";
import { ChevronLeft, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div className="-top-10">
      <div>
        <div className="md:pl-[14vw] text-center md:text-start py-[8vw] bg- space-y-4 bg-home-hero bg-no-repeat">
          <h1 className="md:text-6xl font-bold text-red-700">
            Maximize Efficiency <br /> Ensure Safety
          </h1>
          <p className="md:text-2xl md:w-[35vw] text-sm md:px-0 px-8">
            Empowering industries with reliable solutions for productivity and safety.
          </p>
          <div className="space-x-4 flex md:flex-row flex-col  items-center">
            <Button variant={"ghost"} className=" bg-red-700 text-white px-4">
              Contact Now
            </Button>
            <Link href={"/quoteform"} className="font-medium flex items-center">
              Request a Quote <ChevronRight size={20} strokeWidth={1} className="mt-1"/>
            </Link>
          </div>
        </div>
      </div>
      <div className="md:px-[16vw] px-[5vw] md:py-16 py-[5vw] md:text-start  bg-white">
        <div>
        <h2 className="text-4xl text-red-700 font-bold">
        Dina Holding 
        </h2>
        <p className="md:text-lg py-3 text-justify">
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
        <div className="relative right-0 font-medium">
          <Link href='/about'>Read more here</Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
