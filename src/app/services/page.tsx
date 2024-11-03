import Hero from "@/app/services/sections/hero";
import Heavy from "@/app/services/sections/heavy";
import React from "react";
import Technical from "@/app/services/sections/technical";
import Safety from "@/app/services/sections/safety";
import Contact from "@/components/contact";

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
