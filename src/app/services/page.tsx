import Hero from "@/sections/services/hero";
import Heavy from "@/sections/services/heavy";
import React from "react";
import Technical from "@/sections/services/technical";
import Safety from "@/sections/services/safety";
import Contact from "@/sections/services/contact";

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
      <section>
        <Safety />
      </section>
      <section>
        <Contact />
      </section>
    </div>
  );
};

export default Services;
