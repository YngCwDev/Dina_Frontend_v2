"use client";

import React from "react";
import Hero from "@/sections/home/hero";
import Discover from "@/sections/home/discover";
import About from "@/sections/home/about";
import Quotecard from "@/sections/home/quotecard";
import Services from "@/sections/home/services";
import QuoteMassage from "@/sections/home/quotemassage";
import Contact from "@/sections/home/contact";

const Page = () => {
  return (
    <main>
      <section>
        <Hero />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <Discover />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Quotecard />
      </section>
      <section>
      <QuoteMassage/>
      </section>
      
      <section>
        <Contact/>
      </section>
    </main>
  );
};

export default Page;
