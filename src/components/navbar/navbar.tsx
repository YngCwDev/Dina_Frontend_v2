"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Menu, X, Phone } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { Button, buttonVariants } from "@/components/ui/button";
import logo from "./../../../public/svg/LOGO.svg";
import { DesktopMenu } from "./desktop";
import { MobileMenu } from "./mobile";
import { Banner } from "./banner";
import Language from "./language";
import SearchBar from "./search";

interface OpenCategories {
  [key: string]: boolean;
}

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [search, setSearch] = useState(false);
  const [openCategories, setOpenCategories] = useState({});

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const handleSearchClick = () => {
    setSearch(!search);
  };

  const handleHover = (category: string): void => {
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
          <Button variant="ghost" aria-label="Search" className="relative px-0">
            <Search className="h-6 w-6 mx-2" onClick={handleSearchClick} />
            {search && (
              <motion.div
                className="absolute z-10 right-0"
                initial={{ opacity: 0, translateX: 5 }}
                animate={{ opacity: 1, translateX: 0 }}
                transition={{ duration: 0.2 }}
              >
                <SearchBar handleSearchClick={handleSearchClick} />
              </motion.div>
            )}
          </Button>

          <Language openCategories={openCategories} handleHover={handleHover} />

          <Link href="/support" className={buttonVariants({ variant: "red" })}>
            <span className="flex gap-1 items-center">
              Contact Now
              <Phone size={16} strokeWidth={1.8} className="ml-2" />
            </span>
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
