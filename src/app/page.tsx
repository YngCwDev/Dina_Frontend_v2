"use client";

import React from "react";
import Hero from "@/sections/home/hero";
import Discover from "@/sections/home/discover";
const Page = () => {
  return (
    <main>
      <section>
        <Hero />
      </section>
      <section>
        <Discover />
      </section>
    </main>
  );
};

export default Page;
