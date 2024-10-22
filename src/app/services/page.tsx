import Hero from "@/sections/services/hero";
import Heavy from "@/sections/services/heavy";
import React from "react";
import Technical from "@/sections/services/technical";

const Services = () => {
  return (
    <div className="bg-white">
      <section>
        <Hero />
      </section>
      <section>
        <Heavy />
      </section>
      <section>
        <Technical />
      </section>
    </div>
  );
};

export default Services;
