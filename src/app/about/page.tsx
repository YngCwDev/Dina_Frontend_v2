import React  from "react";
import Hero from "@/app/about/sections/hero";
import Profile from "@/app/about/sections/profile";
import Qualities from "@/app/about/sections/qualities";
import Contact from "@/app/about/sections/contact";

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
