"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Globe, Menu, X, Phone } from "lucide-react";
import { AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import logo from "./../../../public/LOGO.svg";
import { DesktopMenu } from "./desktop";
import { MobileMenu } from "./mobile";
import { Banner } from "./banner";

interface OpenCategories {
  [key: string]: boolean;
}
const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({});

  const handleClick = () => {
    setOpen(!isOpen);
  };
  const handleHover = (category: string) => {
    setOpenCategories((prev: OpenCategories) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };
  return (
    <header className="relative bg-white z-10  shadow-md">
      <Banner />
      <div className="container mx-auto flex items-center justify-between  md:px-20">
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <Image src={logo} alt="" width={110} height={18} priority />
          </Link>
          <AnimatePresence>
            <DesktopMenu
              handleHover={handleHover}
              openCategories={openCategories}
            />
          </AnimatePresence>
        </div>
        <div className="hidden gap-2 md:flex">
          <Button variant="ghost" aria-label="Search">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" aria-label="Language">
            <Globe className="h-6 w-6" />
          </Button>
          <Link href="/support">
            <Button variant="outline" className="divide-x gap-2"><span>Contact</span><Phone size={20} strokeWidth={1}/></Button>
          </Link>
        </div>
        <Button
          variant="ghost"
          className="md:hidden"
          onClick={handleClick}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </Button>
      </div>
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            openCategories={openCategories}
            handleCategoryClick={handleHover}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
