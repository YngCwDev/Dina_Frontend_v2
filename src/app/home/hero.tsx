import React from "react";
import Link from "next/link";
import { CtaButton } from "@/components/cta_button";
import { motion } from "framer-motion";
import {ChevronDownIcon, ChevronRight } from "lucide-react";

const Hero = () => {
  return (
    <div>
      <div className="-top-10 ">
        <div className="text-start lg:py-[8vw] py-[15vh] space-y-4 bg-home-hero bg-no-repeat lg:px-[14vw] px-16">
          <h1 className="md:text-6xl text-4xl font-bold text-red-700">
            <div>Maximize Efficiency </div>{" "}
            <div className="text-white">Ensure Safety</div>
          </h1>
          <p className="md:text-2xl md:w-[35vw] text-sm">
            Empowering industries with reliable solutions for productivity and
            safety.
          </p>
          <div>
            <CtaButton classname="" />
          </div>
        </div>
      </div>
      <div className="lg:px-[14vw] px-16 md:py-16 py-[5vw] md:text-start  bg-zinc-50">
        <motion.div className="space-y-4 text-center">
          <div className="bg-zinc-900 h-1 max-w-16 mx-auto"></div>
          <p className="md:text-md lg:py-3  ">
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

          <div className="relative right-0 font-normal hover:text-red-700 text-zinc-900">
            <Link href="/about" className="flex items-center justify-center">
              Read more
              <ChevronRight size={20} strokeWidth={1} className="mt-[1px]" />
            </Link>

            <ChevronDownIcon size={50} strokeWidth={0.2} className="relative mx-auto top-5 animate-bounce"/>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
