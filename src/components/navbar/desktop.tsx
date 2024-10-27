import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion} from "framer-motion";
import c_data from "@/lib/c_data";


export const DesktopMenu = ({
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
            {c_data.categories.map((category) => {
              return (
                <li
                  onMouseEnter={() => handleHover(category.name)}
                  onMouseLeave={() => handleHover(category.name)}
                  className="py-4 px-4 border-b-zinc-950 hover:bg-zinc-100"
                  key={category.name}
                >
                  <Link
                    href={category.link}
                    className="font-semibold px-4 flex items-center gap-2"
                  >
                    {category.name}
                    {category.name === "Products" && (
                      <ChevronDown
                        size={20}
                        strokeWidth={1}
                        className={`relative top-[1px] ${
                          openCategories[category.name] &&
                          "transition rotate-180 duration 300 ease-linear"
                        }`}
                      />
                    )}
                  </Link>
  
                  {category.name === "Products" &&
                    openCategories[category.name] && (
                      /* SubNav list categories - viewport */
                      <motion.div
                        className=" flex justify-center gap-36 py-16 w-full absolute drop-shadow-md left-0 mt-4
                   bg-white -z-10"
                        initial={{ opacity: 0, translateY:-20 }}
                        animate={{ opacity: 1, translateY:0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {/* SubNav Content */}
                        <ul className="flex gap-8 text-[14px]  justify-center">
                          {category.items.map((items) => {
                            return (
                              <div key={items.name}>
                                <h1 className="font-semibold text-zinc-950 text-[16px] p-2">
                                  {items.name}
                                </h1>
                                {items.sub_items.map((sub_item) => {
                                  return (
                                    <li key={sub_item} className="p-2 hover:font-semibold">
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
              );
            })}
            <li className="py-4 px-4 font-medium hover:bg-zinc-100">
              <Link href="/about">About</Link>
            </li>
          </ul>
        </nav>
      </>
    );
  };