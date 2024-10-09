"use client";

import React from "react";
import Hero from "@/sections/home/hero";
import Discover from "@/sections/home/discover";
import About from "@/sections/home/about";
import Quotecard from "@/sections/home/quotecard";
const Page = () => {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <Discover />
      </section>
      <section>
        <About/>
      </section>
      <section>
         <Quotecard/>
      </section>
    </main>
  );
};

export default Page;
