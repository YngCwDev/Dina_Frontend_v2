"use client";
import Image from "next/image";
import React from "react";
import img1 from "@/assets/img/hero2.png";
import  c_data  from "@/lib/c_data";

const Hero = () => {
  return (
    <div>
      <div>
        <Image src={img1} alt="" className="w-full" />
      </div>
      <div className="space-y-4 py-8">
        <div className="px-[15vw] py-20 space-y-8">
          <h1 className="text-4xl text-red-700 font-bold">Our Services</h1>
          <p>
            Here’s a more detailed and polished version: We provide tailored
            solutions designed to meet the unique challenges of industries such
            as mining, construction, energy, and beyond. Our comprehensive range
            of services is specifically crafted to enhance operational
            efficiency, optimize resource management, and prioritize the safety
            of your workforce and assets. By leveraging our industry expertise
            and commitment to quality, we help you navigate complex projects,
            reduce risks, and achieve your goals with confidence. Whether you
            are looking to improve your equipment reliability, streamline
            processes, or ensure compliance with safety regulations, Dina
            Holding SA delivers solutions that drive sustainable growth and
            operational excellence.
          </p>
        </div>
        {/* NavServices */}
        <div>
          <div className="flex divide-x-2 justify-center py-8 text-lg text-white font-semibold bg-zinc-950 ">
            {c_data.categories[1].items.map((item, index) => {
              if (index < 3) {
                return (
                  <div
                    key={item.name}
                    className="px-16 hover:text-red-700 transition-colors duration-150"
                  >
                    {item.name}
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
