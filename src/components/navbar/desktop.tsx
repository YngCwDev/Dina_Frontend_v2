import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion } from "framer-motion";
import c_data from "@/lib/c_data";

export const DesktopMenu = ({
  handleHover,
  openCategories,
}: {
  handleHover: (products: string) => void; // Changed from string to function type
  openCategories: { [key: string]: boolean }; // Changed from string to object type
}) => {
  const products = c_data.categories[0];
  return (
    <>
      <nav className="ml-8 text-zinc-950  md:flex hidden z-10">
        {/* Nav list categories */}
        <ul className="flex">
          <li
            onMouseEnter={() => handleHover(products.name)}
            onMouseLeave={() => handleHover(products.name)}
            className="py-4 px-4 border-b-zinc-950 hover:bg-zinc-100"
            key={products.name}
          >
            <Link
              href={products.link}
              className="font-normal px-4 flex items-center gap-[2px]"
            >
              {products.name}
              <ChevronDown
                size={20}
                strokeWidth={1}
                className={`relative top-[1px] ${
                  openCategories[products.name] &&
                  "transition rotate-180 duration 300 ease-linear"
                }`}
              />
            </Link>

            {openCategories[products.name] && (
              /* SubNav list categories - viewport */
              <motion.div
                className=" flex justify-center gap-36 py-16 w-full absolute drop-shadow-md left-0 mt-4
                   bg-white -z-10"
                initial={{ opacity: 0, translateY: -20 }}
                animate={{ opacity: 1, translateY: 0 }}
                transition={{ duration: 0.2 }}
              >
                {/* SubNav Content */}
                <ul className="flex gap-8 text-[14px]  justify-center divide-x">
                  {products.items.map((items) => {
                    return (
                      <div key={items.name}>
                        <h1 className=" font-semibold text-zinc-950 text-[16px] p-2">
                          {items.name}
                        </h1>
                        {items.sub_items.map((sub_item) => {
                          return (
                            <li
                              key={sub_item}
                              className="p-2 hover:font-mediun"
                            >
                              <Link href={sub_item}>{sub_item}</Link>
                            </li>
                          );
                        })}
                      </div>
                    );
                  })}
                </ul>
              </motion.div>
            )}
          </li>
          <li className="py-4 px-8 font-normal hover:bg-zinc-100">
            <Link href="/services">Services</Link>
          </li>
          <li className="py-4 px-8 font-normal hover:bg-zinc-100">
            <Link href="/industries ">Industries</Link>
          </li>
          <li className="py-4 px-8 font-normal hover:bg-zinc-100">
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};
