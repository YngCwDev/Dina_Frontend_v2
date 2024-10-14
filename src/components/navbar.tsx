"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Search, Globe, CircleUser, Menu, X, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import img from "@/assets/img1.png";

import { Button, buttonVariants } from "@/components/ui/button";
import data from "@/lib/data";
import logo from "@/assets/LOGO.svg";

const Navbar = () => {
  const [isOpen, setOpen] = useState(false);
  const [openCategories, setOpenCategories] = useState({});

  const handleClick = () => {
    setOpen(!isOpen);
  };

  const handleCategoryClick = (categoryName: string) => {
    setOpenCategories((prev: any) => ({
      ...prev,
      [categoryName]: !prev[categoryName],
    }));
  };

  return (
    <header className="relative bg-white">
      <Banner />
      <div className="container mx-auto flex items-center justify-between p-1 md:px-20">
        <div className="flex items-center">
          <Link href="/" aria-label="Home">
            <Image src={logo} alt="" width={110} height={18} priority />
          </Link>
          <DesktopMenu />
        </div>
        <div className="hidden gap-2 md:flex">
          <Button variant="ghost" aria-label="Search">
            <Search className="h-6 w-6" />
          </Button>
          <Button variant="ghost" aria-label="Language">
            <Globe className="h-6 w-6" />
          </Button>
          <Button variant="outline" className="bg-red-800 text-white">
            Contact Us
          </Button>
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
            handleCategoryClick={handleCategoryClick}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

const DesktopMenu = () => {
  return (
    <>
      
    </>
  )
};

const MobileMenu = ({
  openCategories,
  handleCategoryClick,
}: {
  openCategories: any;
  handleCategoryClick: any;
}) => {
  return (
    <motion.div
      className="absolute left-0 top-full w-full bg-white shadow-md z-10"
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <nav className="container mx-auto">
        <ul className="block space-y-2 p-4">
          <li className="p-4">
            <Link href="/about" className="block w-full">
              About
            </Link>
          </li>
          {data.categories.map((category) => (
            <div key={category.name} className="group/link">
              <li
                onClick={() => handleCategoryClick(category.name)}
                className={`p-4 cursor-pointer flex items-center justify-between rounded-lg ${
                  openCategories[category.name] ? "bg-slate-100" : ""
                }`}
              >
                <div>{category.name}</div>
                <ChevronDown
                  size={16}
                  strokeWidth={1}
                  className={`transition-transform duration-200 ${
                    openCategories[category.name] ? "rotate-180" : ""
                  }`}
                />
              </li>
              {openCategories[category.name] && (
                <ul className="pl-4 space-y-2">
                  {category.items.map((item) => (
                    <li key={item.name} className="p-2">
                      <Link href={item.name} className="block w-full">
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
          <li className="p-4 flex justify-center">
            <Button variant="outline" className="w-full bg-red-800 text-white">
              Contact Us
            </Button>
          </li>
        </ul>
      </nav>
    </motion.div>
  );
};

const Banner = () => {
  return (
    <div className="hidden bg-red-800 p-1 text-white md:block">
      <div className="container mx-auto flex justify-between px-4 md:px-20">
        <nav>
          <ul className="flex gap-4">
            <li>
              <Link href="#">Locations</Link>
            </li>
            <li>
              <Link href="#">Offices</Link>
            </li>
            <li>
              <Link href="#">Careers</Link>
            </li>
          </ul>
        </nav>
        <Link href="#" className="flex items-center gap-2">
          <CircleUser className="h-5 w-5" />
          <span>Client Portal</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
