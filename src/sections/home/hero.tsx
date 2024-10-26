import React from "react";
import Link from "next/link";
import { CtaButton } from "@/components/cta_button";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div>
      <div className="-top-10 ">
        <div className="text-start lg:py-[8vw] py-[15vh] space-y-4 bg-home-hero bg-no-repeat lg:px-[14vw] px-16">
          <h1 className="md:text-6xl text-4xl font-bold text-red-700">
            <div>Maximize Efficiency </div>{" "}
            <div className="text-zinc-100">Ensure Safety</div>
          </h1>
          <p className="md:text-2xl md:w-[35vw] text-sm">
            Empowering industries with reliable solutions for productivity and
            safety.
          </p>
          <div>
            <CtaButton />
          </div>
        </div>
      </div>
      <div className="lg:px-[14vw] px-16 md:py-16 py-[5vw] md:text-start  bg-white">
        <motion.div className="space-y-4">
          <div className="bg-red-700 h-2 max-w-16"></div>
          <p className="md:text-md lg:py-3  text-justify">
            We proudly offer an extensive selection of high-quality electrical
            materials, robust power generators, essential personal protective
            equipment (PPE), reliable industrial batteries, premium oils and
            lubricants, as well as a comprehensive fleet of heavy machinery
            available for rental.
           
          </p>
           <p className="lg:inline hidden">
              From excavators and loaders to cranes and forklifts, our rental
              solutions are designed to meet the rigorous demands of industries
              like construction, mining, and energy. These products and services
              ensure peak operational efficiency, reliable performance, and
              maximum safety, providing tailored support for your workforce and
              industrial projects.
            </p>
          <div className="relative right-0 font-medium text-red-700">
            <Link href="/about">Read more</Link>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
