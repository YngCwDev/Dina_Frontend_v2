import React from "react";
import Hero from "@/sections/about/hero";
import Profile from "@/sections/about/profile";
import Qualities from "@/sections/about/qualities";
import Contact from "@/sections/about/contact";

const About = () => {
  return (
    <>
    <section><Hero /></section>
    <section><Qualities/></section>
    <section><Profile /></section>
    <section><Contact /></section>
    </>
  );
};

export default About;
