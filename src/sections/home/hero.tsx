import Image from "next/image";
import React from "react";
import Img1 from "@/assets/img1.png";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
const Hero = () => {
  return (
    <div className="-top-10">
      <div className="flex items-center justify-between">
        <div className="w-full md:p-[12vw] py-[30vw] px-[5vw]   text-center text-1xl space-y-4">
          <h1 className="md:text-4xl text-[30px]  text-red-600 font-bold">
            Your Solution for Productivity And Safety
          </h1>
          <p className="md:text-black md:text-2xl text-white">
            Maximize efficiency and safeguard your workforce with our reliable
            products.
          </p>
        </div>
        <Image
          src={Img1}
          width={900}
          height={800}
          alt="hero-image-scavation-area"
          className=" hidden"
        />
      </div>
      <div className="md:px-[24vw] px-[5vw] md:py-[3vw] py-[5vw] md:text-start  bg-white">
        <p className="md:text-lg py-3">
          We proudly offer an extensive selection of high-quality electrical
          materials, powerful generators, essential personal protective
          equipment (PPE), durable batteries, premium oils, and lubricants, all
          carefully designed to optimize your industrial operations. Whether
          you're in construction, mining, or energy, our products ensure peak
          efficiency, reliable performance, and maximum safety for your
          workforce.
        </p>
        <div className="flex items-center">
          <Button
            variant={"outline"}
            className="my-4  bg-red-800 text-white px-4  py-4 h-6"
          >
            Contact Us
          </Button>
          <Button variant={"link"} className="flex items-center">
            <Link href={"/quoteform"}>Get free quote</Link>
            <div>
              <ChevronRight size={18} strokeWidth={1} />
            </div>
          </Button>
        </div>
      </div>
      <div className="h-16 w-full"></div>
    </div>
  );
};

export default Hero;
