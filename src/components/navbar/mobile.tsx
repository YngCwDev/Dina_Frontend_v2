import React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { motion} from "framer-motion";
import { Button } from "@/components/ui/button";
import c_data from "@/lib/c_data";


export const MobileMenu = ({
    openCategories,
    handleCategoryClick,
  }: {
    openCategories: { [key: string]: boolean };
    handleCategoryClick: (category: string) => void;
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
            {c_data.categories.map((category) => (
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
                        <Link href={category.link} className="block w-full">
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
  