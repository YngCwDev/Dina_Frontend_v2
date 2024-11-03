import { CtaButtonDark } from "@/components/cta_button";
import React from "react";

const Hero = () => {
  return (
    <div className="bg-white">
      <div className="container py-[10vh]">
        <div className="text-2xl text-center space-y-4">
          <h1 className="text-4xl text-red-700 font-semibold">We&apos;re Here to Help</h1>
          <p>
            Reach out to us for any inquiries, support, or consultations you may
            need.
          </p>
        </div>
        <div>
          <CtaButtonDark classname="bg-black/10" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
