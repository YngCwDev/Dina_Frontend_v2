"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Globe,
  CircleUser,
  Menu,
  X,
  ChevronDown,
  ChevronRight,
} from "lucide-react";
import {
  motion,
  AnimatePresence,
  easeIn,
  easeInOut,
  easeOut,
} from "framer-motion";
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
  const handleHover = (category: string) => {
    setOpenCategories((prev: any) => ({
      ...prev,
      [category]: !prev[category],
    }));
  };

  return (
    <header className="relative bg-white">
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
            handleCategoryClick={handleHover}
          />
        )}
      </AnimatePresence>
    </header>
  );
};

const DesktopMenu = ({
  handleHover,
  openCategories,
}: {
  handleHover: string;
  openCategories: string;
}) => {
  return (
    <>
      <nav className="ml-8 text-zinc-950  md:flex hidden z-10">
        {/* Nav list categories */}
        <ul className="flex">
          {data.categories.map((category) => {
            return (
              <li
                onMouseEnter={() => handleHover(category.name)}
                onMouseLeave={() => handleHover(category.name)}
                className="py-4 px-4 border-b-zinc-950"
                key={category.name}
              >
                <Link
                  href={category.link}
                  className="font-semibold px-4 flex items-center gap-4"
                >
                  {category.name}
                  <ChevronDown
                    size={20}
                    strokeWidth={1}
                    className={`${
                      openCategories[category.name] &&
                      "transition rotate-180 duration 300 ease-linear"
                    }`}
                  />
                </Link>

                {openCategories[category.name] && (
                  /* SubNav list categories - viewport */
                  <motion.div
                    className=" flex justify-center gap-16 py-16 w-full absolute drop-shadow-md left-0 mt-4
                 bg-white"
                  >
                    {/* SubNav Content */}
                    <ul className="flex gap-8 text-[14px]  justify-center">
                      {category.items.map((items) => {
                        return (
                          <div>
                            <h1 className="font-semibold text-zinc-950 text-[16px] p-2">
                              {items.name}
                            </h1>
                            {items.sub_items.map((sub_item) => {
                              return (
                                <li className="p-2 hover:font-semibold">
                                  <Link href={sub_item}>{sub_item}</Link>
                                </li>
                              );
                            })}
                          </div>
                        );
                      })}
                    </ul>
                    <div className="text-[16px]  underline font-medium">
                      <Image src={img} width={350} height={350} alt="" />
                      <Link href={""}>
                        See more {category.name.toLowerCase()} here
                      </Link>
                    </div>
                  </motion.div>
                )}
              </li>
            );
          })}
          <li className="py-4 px-4 font-semibold">
            <Link href="/about">About us</Link>
          </li>
        </ul>
      </nav>
    </>
  );
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
                  openCategories[category.name] && "bg-slate-100"
                }`}
              >
                <div>{category.name}</div>
                <ChevronDown
                  size={16}
                  strokeWidth={1}
                  className={`transition-transform duration-200 ${
                    openCategories[category.name] && "rotate-180"
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
