"use client";

import React from "react";
import Hero from "@/app/home/hero";
import Discover from "@/app/home/discover";
import About from "@/app/home/about";
import Quotecard from "@/app/home/quotecard";
import Services from "@/app/home/services";
import Contact from "@/components/contact";
import Support from "@/app/home/support";
import Location from "@/app/home/location";

const Page = () => {
  return (
    <>
      <section>
        <Hero />
      </section>

      <section>
        <Services />
      </section>

      <section>
        <Support />
      </section>

      <section>
        <Discover />
      </section>

      <section>
        <About />
      </section>

      <section>
        <Location />
      </section>

      <section>
        <Quotecard />
      </section>
{/*       <section>
        <QuoteMassage />
      </section> */}

      <section>
        <Contact />
      </section>
    </>
  );
};

export default Page;
